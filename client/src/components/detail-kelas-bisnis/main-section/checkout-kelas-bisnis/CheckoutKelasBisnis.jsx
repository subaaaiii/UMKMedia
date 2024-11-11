import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { icon } from "../../../../constants";
import { HiOutlineHeart, HiHeart } from "react-icons/hi";
import ButtonBlack500 from "../../../global-component/button/button-black500/ButtonBlack500";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
import { api } from "../../../../api/api";

function CheckoutKelasBisnis({
  dataDetail,
  addWishlist,
  // checkStatusWishlist,
  status,
}) {
  const [star, setStar] = useState(0);
  const { user } = useSelector((state) => state.userSlice);
  const [setCheckout] = useState([]);
  const navigate = useNavigate();
  const [setfreeCheckout] = useState([]);

  const token = JSON.parse(localStorage.getItem("auth"));

  const copyToClipboard = (text) => {
    const el = document.createElement("textarea");
    el.value = text;
    document.body.appendChild(el);
    el.select();
    document.execCommand("copy");
    document.body.removeChild(el);

    Swal.fire({
      position: "center",
      icon: "error",
      title: text,
      showConfirmButton: false,
      timer: 3000,
    });
  };


  const addCheckout = async (text) => {
    try {
      const token = JSON.parse(localStorage.getItem("auth"));
      const response = await api.post(
        `${process.env.REACT_APP_API_BASE_URL}/kelasTransaksi/createTransaksi`,
        {
          id_kelas_bisnis: dataDetail.id_kelas_bisnis,
        },
        {
          headers: {
            Authorization: token,
          },
        }
      );
      setCheckout(response.data.data);
      console.log(response);
    } catch (error) {
      if (error.response && error.response.status === 400) {
        const responseData = error.response.data;
        if (responseData.error === "AKUN ANDA BELUM VERIFIED") {
          copyToClipboard("Akun anda belum verified");
        }
        if (responseData.error === "DATA REGIST SUDAH ADA") {
          copyToClipboard("Kelas sudah terdaftar");
          navigate(`/profile/kelas-saya/`);
          window.scrollTo(0, 0);
        }
        if (responseData.error === "DATA TRANSAKSI SUDAH ADA") {
          copyToClipboard("Kelas menunggu konfirmasi");
          navigate(`/profile/transaksi/`);
          window.scrollTo(0, 0);
        }
        console.log(error);
      } else {
        user
          ? navigate(`/checkout/${dataDetail?.id_kelas_bisnis}`)
          : navigate("/login");
      }
    }
  };

  const addfreeCheckout = async (text) => {
    try {
      const response = await api.post(
        `${process.env.REACT_APP_API_BASE_URL}/kelasTransaksi/createTransaksi`,
        {
          id_kelas_bisnis: dataDetail.id_kelas_bisnis,
        },
        {
          headers: {
            Authorization: token,
          },
        }
      );
      setfreeCheckout(response.data.data);
      console.log(response);
    } catch (error) {
      if (error.response && error.response.status === 400) {
        const responseData = error.response.data;
        if (responseData.error === "AKUN ANDA BELUM VERIFIED") {
          copyToClipboard("Akun anda belum verified");
        }
        if (responseData.error === "DATA REGIST SUDAH ADA") {
          copyToClipboard("Kelas sudah terdaftar");
          navigate(`/profile/kelas-saya/`);
          window.scrollTo(0, 0);
        }
        if (responseData.error === "DATA TRANSAKSI SUDAH ADA") {
          copyToClipboard("Kelas menunggu konfirmasi");
          navigate(`/profile/transaksi/`);
          window.scrollTo(0, 0);
        }
        console.log(error);
      } else {
        user
          ? navigate(`/checkout-free/${dataDetail?.id_kelas_bisnis}`)
          : navigate("/login");
      }
    }
  };

  //  useEffect(() => {
  //   addCheckout();

  // }, [addCheckout]);
  // console.log(checkout.checkout)

  // useEffect(() => {
  //   console.log(checkout)
  // },[checkout]);

  useEffect(() => {
    setStar(Number(dataDetail?.kelas_bisni?.total_nilai));
  }, [dataDetail]);

  return (
    <div className="p-[20px] flex flex-col items-start rounded-[10px] shadow-customSm">
      <h1 className="text-[22px] font-bold leading-[32px] w-[288px]">
        {dataDetail?.kelas_bisni?.nama
          .split(" ")
          .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
          .join(" ") ?? "no data"}
      </h1>
      <div className=" mt-[16px] flex justify-start items-center ">
        <div className="w-fit grid grid-cols-2 gap-x-[10px] gap-y-[8px] ">
          <div className=" w-max flex items-center  gap-1">
            <img
              src={icon.bookOpenSold}
              alt="bok"
              className="w-[16px] h-[16px]"
            />
            <p className="text-[14px] font-light leading-[20px] shrink-0">
              Materi Eksklusif
            </p>
          </div>
          <div className=" w-max flex items-center gap-1 ">
            <img src={icon.signal} alt="bok" className="w-[16px] h-[16px]" />
            <p className="text-[14px] font-light leading-[20px] shrink-0">
              {dataDetail?.kelas_bisni?.kelas_level?.nama ?? "no data"}
            </p>
          </div>
          <div className=" w-max flex items-center gap-1 ">
            <img
              src={icon.userCircle}
              alt="bok"
              className="w-[16px] h-[16px]"
            />
            <p className="text-[14px] font-light leading-[20px] shrink-0">
              {dataDetail?.kelas_bisni?.jumlah_pendaftar ?? "no data"}
              <span className="ml-[5px]">Pendaftar</span>
            </p>
          </div>
        </div>
      </div>
      <div className="flex justify-start items-center  mt-[20px] gap-[8px]">
        <div className="rating rating-sm rating-half gap-0">
          {star === Number(0) ? (
            <>
              <input
                type="radio"
                name={`rating-1`}
                className="rating-hidden"
                defaultChecked
              />
              <input
                type="radio"
                name={`rating-1`}
                className="bg-yellow-500 mask mask-star-2 mask-half-1"
              />
              <input
                type="radio"
                name={`rating-1`}
                className="bg-yellow-500 mask mask-star-2 mask-half-2"
              />
              <input
                type="radio"
                name={`rating-1`}
                className="bg-yellow-500 mask mask-star-2 mask-half-1"
              />
              <input
                type="radio"
                name={`rating-1`}
                className="bg-yellow-500 mask mask-star-2 mask-half-2"
              />
              <input
                type="radio"
                name={`rating-1`}
                className="bg-yellow-500 mask mask-star-2 mask-half-1"
              />
              <input
                type="radio"
                name={`rating-1`}
                className="bg-yellow-500 mask mask-star-2 mask-half-2"
              />
              <input
                type="radio"
                name={`rating-1`}
                className="bg-yellow-500 mask mask-star-2 mask-half-1"
              />
              <input
                type="radio"
                name={`rating-1`}
                className="bg-yellow-500 mask mask-star-2 mask-half-2"
              />
              <input
                type="radio"
                name={`rating-1`}
                className="bg-yellow-500 mask mask-star-2 mask-half-1"
              />
              <input
                type="radio"
                name={`rating-1`}
                className="bg-yellow-500 mask mask-star-2 mask-half-2"
              />
            </>
          ) : (
            <>
              <input
                type="radio"
                name={`rating-1`}
                className="bg-yellow-500 mask mask-star-2 mask-half-1"
                defaultChecked={star * 2 === 1}
              />
              <input
                type="radio"
                name={`rating-1`}
                className="bg-yellow-500 mask mask-star-2 mask-half-2"
                defaultChecked={star * 2 === 2}
              />
              <input
                type="radio"
                name={`rating-1`}
                className="bg-yellow-500 mask mask-star-2 mask-half-1"
                defaultChecked={star * 2 === 3}
              />
              <input
                type="radio"
                name={`rating-1`}
                className="bg-yellow-500 mask mask-star-2 mask-half-2"
                defaultChecked={star * 2 === 4}
              />
              <input
                type="radio"
                name={`rating-1`}
                className="bg-yellow-500 mask mask-star-2 mask-half-1"
                defaultChecked={star * 2 === 5}
              />
              <input
                type="radio"
                name={`rating-1`}
                className="bg-yellow-500 mask mask-star-2 mask-half-2"
                defaultChecked={star * 2 === 6}
              />
              <input
                type="radio"
                name={`rating-1`}
                className="bg-yellow-500 mask mask-star-2 mask-half-1"
                defaultChecked={star * 2 === 7}
              />
              <input
                type="radio"
                name={`rating-1`}
                className="bg-yellow-500 mask mask-star-2 mask-half-2"
                defaultChecked={star * 2 === 8}
              />
              <input
                type="radio"
                name={`rating-1`}
                className="bg-yellow-500 mask mask-star-2 mask-half-1"
                defaultChecked={star * 2 === 9}
              />
              <input
                type="radio"
                name={`rating-1`}
                className="bg-yellow-500 mask mask-star-2 mask-half-2"
                defaultChecked={star * 2 === 10}
              />
            </>
          )}
        </div>
        <div className="flex items-center justify-center mt-1">
          <p className="text-[14px] font-light leading-[20px]">
            {dataDetail?.kelas_bisni?.total_nilai || "0"}
          </p>
        </div>
      </div>
      <div className="mt-[40px] flex flex-col gap-[12px]">
        <h1 className="text-[16px] font-medium leading-[24px]">Total Harga</h1>
        <div className=" flex flex-col items-start gap-[8px]">
          {/* {el.discount ? ( */}
          <div className="w-full flex justify-start gap-[2px]">
            <p className="text-[14px] font-light leading-[20px] line-through">
              {new Intl.NumberFormat("id-ID", {
                style: "currency",
                currency: "IDR",
              }).format(dataDetail?.kelas_bisni?.harga ?? 0)}
            </p>
            <p className="text-[14px] font-medium leading-[20px] text-[#BA0000]">
              0%
            </p>
          </div>
          {/* ) : null} */}
          <p className="text-[24px] font-bold leading-[36px] text-black500">
            {new Intl.NumberFormat("id-ID", {
              style: "currency",
              currency: "IDR",
            }).format(
              dataDetail?.kelas_bisni?.harga -
                (dataDetail?.kelas_bisni?.harga * 0) / 100
            )}
          </p>
        </div>
      </div>
      <div className="mt-[40px] gap-[16px] flex ">
        <button
          onClick={() => (user ? addWishlist() : navigate("/login"))}
          className="w-[56px] h-[56px] flex justify-center items-center border-[1px] border-black500 hover:bg-whiteSmoke600 rounded-[10px]"
        >
          {status === false ? (
            <HiHeart className="text-[32px] text-black500" />
          ) : (
            <HiOutlineHeart className="text-[32px] text-black500" />
          )}
        </button>
        <div
          onClick={() => {
            if (dataDetail?.kelas_bisni?.harga > 0) {
              addCheckout();
            } else {
              addfreeCheckout();
            }
          }}
        >
          <ButtonBlack500 TEXT_BUTTON={"Daftar Sekarang"} WIDTH={"w-[216px]"} />
        </div>
      </div>
    </div>
  );
}

export default CheckoutKelasBisnis;
