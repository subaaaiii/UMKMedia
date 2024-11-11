import React, { useCallback, useEffect, useMemo, useState } from "react";
import { icon, images, kelasBisnisPic } from "../../../constants";
import NavigationDetailKelasBisnis from "./navigation-detail-kelas-bisnis/NavigationDetailKelasBisnis";
import { useParams } from "react-router-dom";
import { HiHeart, HiOutlineHeart } from "react-icons/hi";
import ButtonWhiteSmoke500 from "../../global-component/button/button-whitesmoke500/ButtonWhiteSmoke500";
import { api } from "../../../api/api";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import Swal from "sweetalert2";

function HeroSection({
  dataDetail,
  star,
  addWishlist,
  // checkStatusWishlist,
  status,
}) {
  const { value } = useSelector((state) => state.detailKelasSlice);
  const { user } = useSelector((state) => state.userSlice);
  const [setCheckout] = useState([]);
  const [setfreeCheckout] = useState([]);
  const navigate = useNavigate();
  // const [star, setStar] = useState(null);

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

  const addCheckout = async () => {
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
        window.scrollTo(0, 0);
      }
    }
  };

  const addfreeCheckout = async (text) => {
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

  const renderStarRating = useCallback(() => {
    const nilai = Number(star) * 2;
    console.log({ start2: star });

    if (Number(star) === 0 || isNaN(star) || star === undefined) {
      return (
        <>
          <div className="rating rating-sm rating-half gap-0">
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
          </div>
        </>
      );
    } else {
      return (
        <>
          <div className="rating rating-sm rating-half gap-0">
            <div className="text-white">{star * 2}</div>
            <input type="radio" name="rating-10" className="rating-hidden" />
            <input
              type="radio"
              name={`rating-10`}
              className="bg-yellow-500 mask mask-star-2 mask-half-1"
              defaultChecked={nilai === 1}
            />
            <input
              type="radio"
              name={`rating-10`}
              className="bg-yellow-500 mask mask-star-2 mask-half-2"
              defaultChecked={nilai === 2}
            />
            <input
              type="radio"
              name={`rating-10`}
              className="bg-yellow-500 mask mask-star-2 mask-half-1"
              defaultChecked={nilai === 3}
            />
            <input
              type="radio"
              name={`rating-10`}
              className="bg-yellow-500 mask mask-star-2 mask-half-2"
              defaultChecked={nilai === 4}
            />
            <input
              type="radio"
              name={`rating-10`}
              className="bg-yellow-500 mask mask-star-2 mask-half-1"
              defaultChecked={nilai === 5}
            />
            <input
              type="radio"
              name={`rating-10`}
              className="bg-yellow-500 mask mask-star-2 mask-half-2"
              defaultChecked={nilai === 6}
            />
            <input
              type="radio"
              name={`rating-10`}
              className="bg-yellow-500 mask mask-star-2 mask-half-1"
              defaultChecked={nilai === 7}
            />
            <input
              type="radio"
              name={`rating-10`}
              className="bg-yellow-500 mask mask-star-2 mask-half-2"
              defaultChecked={nilai === 8}
            />
            <input
              type="radio"
              name={`rating-10`}
              className="bg-yellow-500 mask mask-star-2 mask-half-1"
              defaultChecked={nilai === 9}
            />
            <input
              type="radio"
              name={`rating-10`}
              className="bg-yellow-500 mask mask-star-2 mask-half-2"
              defaultChecked={nilai === 10}
            />
          </div>
        </>
      );
    }
  }, [star]);

  // const { id } = useParams();
  // const fetchDetailKelas = useMemo(async () => {
  //   try {
  //     const response = await api.post(
  //       `${process.env.REACT_APP_API_BASE_URL}/kelasBisnis/detail`,
  //       {
  //         id: Number(id),
  //       }
  //     );
  //     // console.log(response);
  //   } catch (error) {
  //     console.log(error);
  //   }
  //   // console.log({ id });
  // }, []);

  useEffect(() => {
    // setStar(Number(value[0]?.kelas_bisni.total_nilai));
    console.log({
      start1: Number(star) * 2 === 1,
      start2: Number(star) * 2 === 2,
      start3: Number(star) * 2 === 3,
      start4: Number(star) * 2 === 4,
      start5: Number(star) * 2 === 5,
      start6: Number(star) * 2 === 6,
      start7: Number(star) * 2 === 7,
      start8: Number(star) * 2 === 8,
      start9: Number(star) * 2 === 9,
      start10: Number(star) * 2 === 10,
    });
    // checkStatusWishlist();
  }, [star]);

  // useEffect(() => {
  //   console.log({ star });
  // }, [star]);

  console.log({ image: dataDetail?.kelas_bisni?.image });

  return (
    <div className="relative  w-full   2xl:max-w-[1280px] h-[600px] md:h-[660px]  flex flex-col md:flex-row items-center  md:items-start justify-start md:justify-center overflow-hidden">
      <div className="flex w-[1280px] xl:w-full  h-[600px] md:h-[660px]  justify-center items-center">
        {value[0] && value[0]?.kelas_bisni?.image ? (
          <img
            loading="lazy"
            src={`${process.env.REACT_APP_SERVER_URL}images/kelas/${value[0]?.kelas_bisni?.image}`}
            alt="hero"
            className="object-cover w-full xl:w-full h-full"
          />
        ) : (
          <img
            loading="lazy"
            src={`${process.env.REACT_APP_SERVER_URL}images/kelas/${images.joinOri}`}
            alt="hero"
            className="object-cover w-full xl:w-full h-full"
          />
        )}
      </div>
      <div className="absolute h-[600px] md:h-[660px] left-0 top-0 bg-black500 opacity-90 w-full  z-10"></div>
      <div className="absolute w-full z-20 px-0  md:px-[100px] flex flex-col items-center md:items-start mt-[24px] ">
        <NavigationDetailKelasBisnis dataDetail={value[0]} />
        <div className="gap-[24px] flex flex-col items-start mt-[52px]">
          <div className="gap-[16px]  flex flex-col items-start">
            <h1 className="text-[24px] md:text-[48px] text-center md:text-start text-whiteSmoke500 font-bold leading-[36px] md:leading-[72px] w-[358px] md:w-[568px]">
              {value[0]?.kelas_bisni?.nama
                .split(" ")
                .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
                .join(" ") ?? "no data"}
            </h1>
            <div className="w-full flex text-whiteSmoke600 justify-start gap-x-[16px]  ">
              <div className=" w-max flex items-center  gap-1">
                <img
                  loading="lazy"
                  src={icon.bookOpenSold}
                  alt="bok"
                  className="w-[16px] h-[16px]"
                />
                <p className="text-[14px] font-light leading-[20px] shrink-0">
                  Materi Eksklusif
                </p>
              </div>
              <div className=" w-max flex items-center gap-1 ">
                <img
                  loading="lazy"
                  src={icon.signal}
                  alt="bok"
                  className="w-[16px] h-[16px]"
                />
                <p className="text-[14px] font-light leading-[20px] shrink-0">
                  {value[0]?.kelas_bisni?.kelas_level?.nama || "no data"}
                </p>
              </div>
              <div className=" w-max flex items-center gap-1 ">
                <img
                  loading="lazy"
                  src={icon.userCircle}
                  alt="bok"
                  className="w-[16px] h-[16px]"
                />
                <p className="text-[14px] font-light leading-[20px] shrink-0">
                  {value[0]?.kelas_bisni?.jumlah_pendaftar || "0"}{" "}
                  Pendaftar
                </p>
              </div>
            </div>
          </div>
          <div className="w-full flex justify-center md:justify-start items-center  gap-[8px]">
            {star && renderStarRating()}

            <div className="flex items-center justify-center mt-1">
              <p className="text-[14px] text-whiteSmoke600 font-light leading-[20px]">
                {dataDetail?.kelas_bisni?.total_nilai || "0"}
              </p>
            </div>
          </div>
          <div className="w-full flex flex-col items-center md:items-start gap-[4px]">
            <div className="w-full flex text-whiteSmoke600 justify-center md:justify-start gap-[4px]">
              <p className="text-[14px] md:text-[18px] font-light leading-[20px] md:leading-[28px] line-through">
                {new Intl.NumberFormat("id-ID", {
                  style: "currency",
                  currency: "IDR",
                }).format(dataDetail?.kelas_bisni?.harga ?? 0)}
              </p>
              <p className="text-[14px] md:text-[18px] font-medium leading-[20px] md:leading-[28px] text-[#BA0000]">
                0%
              </p>
            </div>
            {/* // ) : null} */}
            <p className="text-[22px] md:text-[32px] font-bold leading-[32px] md:leading-[48px] text-whiteSmoke500">
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

        <div className="mt-[52px] gap-[16px] hidden md:flex ">
          <button
            onClick={() => (user ? addWishlist() : navigate("/login"))}
            className="w-[56px] h-[56px] flex justify-center items-center border-[1px] border-whiteSmoke500 rounded-[10px]"
          >
            {status === false ? (
              <HiHeart className="text-[32px] text-whiteSmoke500" />
            ) : (
              <HiOutlineHeart className="text-[32px] text-whiteSmoke500" />
            )}
          </button>

          <div
            onClick={() => {
              if (dataDetail?.kelas_bisni?.harga > 0) {
                addCheckout();
              } else {
                addfreeCheckout();
                // navigate(`/checkout-free/${dataDetail?.id_kelas_bisnis}`);
                // window.scrollTo(0, 0);
              }
            }}
          >
            <ButtonWhiteSmoke500
              TEXT_BUTTON={"Daftar Sekarang"}
              WIDTH={"w-[216px]"}
            />
          </div>
        </div>
      </div>
      <div className="rounded-[10px] overflow-hidden absolute  z-20 w-[358px] xl:w-[432px] h-[188px] xl:h-[468px] bottom-[32px] lg:bottom-auto lg:top-[300px] xl:top-[112px] lg:right-[100px]">
        {dataDetail?.kelas_bisni?.image ? (
          <img
            loading="lazy"
            src={`${process.env.REACT_APP_SERVER_URL}images/kelas/${dataDetail?.kelas_bisni?.image}`}
            alt="hero"
            className="w-full h-full object-cover flex md:hidden lg:flex"
          />
        ) : (
          <img
            loading="lazy"
            src={`${process.env.REACT_APP_SERVER_URL}images/kelas/${images.joinOri}`}
            alt="hero"
            className="w-full h-full object-cover flex md:hidden lg:flex"
          />
        )}
      </div>
    </div>
  );
}

export default HeroSection;
