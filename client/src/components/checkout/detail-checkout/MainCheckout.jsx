import React, { useEffect, useState } from "react";
import { images, icon } from "../../../constants";
import { Link, useParams } from "react-router-dom";
import ButtonBlack500 from "../../global-component/button/button-black500/ButtonBlack500";
import { FaPlay, FaClock, FaClipboardCheck } from "react-icons/fa";
import moment from "moment";
import "moment/locale/id";
import { api } from "../../../api/api";
import Swal from "sweetalert2";

function MainCheckout({ dataCheckout }) {
  const [checkout, setCheckout] = useState([]);
  const [isSubmitting, setIsSubmiting] = useState(false);

  const copyToClipboard = (text) => {
    const el = document.createElement("textarea");
    el.value = text;
    document.body.appendChild(el);
    el.select();
    document.execCommand("copy");
    document.body.removeChild(el);

    Swal.fire({
      position: "center",
      icon: "success",
      title: "Text copied to clipboard!",
      showConfirmButton: false,
      timer: 1500,
    });
  };

  //const [count, setCount] = useState(0);
  const { id_kelas_bisnis } = useParams();
  console.log(id_kelas_bisnis);
  const id = checkout.id;
  useEffect(() => {
    console.log(checkout);
  }, [checkout]);

  // function formatDate(dateString) {
  //     const options = { year: "numeric", month: "long", day: "numeric", hour:"2-digit" };
  //     const formattedDate = new Date(dateString).toLocaleDateString("id-ID", options);
  //     return formattedDate;
  //   }

  const onSubmit = async (word) => {
    console.log(word);
    Swal.fire({
      title: "Apakah anda yakin?",
      text: "Data anda akan diubah secara permanent!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#0F1011",
      cancelButtonColor: "#d33",
      cancelButtonText: "Batal!",
      confirmButtonText: "Ya!",
    }).then(async (result) => {
      if (result.isConfirmed) {
        try {
          setIsSubmiting(true);

          const token = JSON.parse(localStorage.getItem("auth"));
          const response = await api.put(
            `${process.env.REACT_APP_API_BASE_URL}/kelasTransaksi/updateStatusTransaksi`,
            {
              id: id,
              status_transaksi: "canceled",
            },
            {
              headers: {
                "Content-Type": "application/json",
                Authorization: token,
              },
            }
          );
          console.log(response);
          Swal.fire({
            position: "center",
            icon: "success",
            title: "Data anda berhasil di ubah",
            showConfirmButton: false,
            timer: 1500,
          });
        } catch (error) {
          Swal.fire({
            title: "Error",
            text: error.response.data.error || "something when wrong!",
            icon: "error",
            confirmButtonColor: "#0F1011",
          });
          console.log(error);
        } finally {
          setIsSubmiting(false);
        }
      }
    });
  };

  const paidCheckout = async () => {
    try {
      const token = JSON.parse(localStorage.getItem("auth"));
      const response = await api.put(
        `${process.env.REACT_APP_API_BASE_URL}/kelasTransaksi/changeTransaksiBool`,
        {
          id_kelas_bisnis: id_kelas_bisnis,
        },
        {
          headers: {
            "Content-Type": "application/json",
            Authorization: token,
          },
        }
      );
      setCheckout(response.data.data);
      console.log(response);
    } catch (error) {
      console.log(error);
    }
  };

  const fetchCheckout = async () => {
    try {
      const token = JSON.parse(localStorage.getItem("auth"));
      const response = await api.get(
        `${process.env.REACT_APP_API_BASE_URL}/kelasTransaksi/${id_kelas_bisnis}`,
        {
          headers: {
            Accept: "application/json",
            "Content-Type": "application/Json",
            Authorization: token,
          },
        }
      );
      setCheckout(response.data.data);
      console.log(response);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchCheckout();
  }, []);
  console.log(checkout.checkout);

  useEffect(() => {
    console.log(checkout);
  }, [checkout]);

  // console.log("kelas_bisnis =",id_kelas_bisnis)

  // console.log("kelas_bisnis =",id_kelas_bisnis)

  return (
    <div
      className="w-full lg:w-full lg:h-[1000px] h-[1000px] lg:flex flex flex-col items-center"
      style={{ backgroundColor: "#F0F0F0" }}
    >
      <h1 className="text-[22px] lg:text-[24px] font-bold text-center leading-[32px] lg:leading-[60px] lg:mt-[20px] mt-[20px] mb-[20px] lg:mb-[20px]">
        Checkout Kelas
      </h1>

      {/* {checkout.map((checkout, index) => ( */}
      <div key={checkout.id_kelas_bisnis} checkout={checkout}>
        <div
          className="w-[544px] lg:w-[544px] lg:h-[128px] h-[128px]"
          style={{
            boxShadow: "4px 6px 8px rgba(0, 0, 0, 0.1)",
            borderRadius: "10px",
            border: "2px solid #DEDEDE",
          }}
        >
          <div className="w-full lg:w-full lg:h-full h-full lg:flex flex ml-[20px] lg:ml-[20px] mr-[20px] lg:mr-[20px]">
            <img
              src={
                `${process.env.REACT_APP_SERVER_URL}images/kelas/${checkout.kelas_bisni?.image}` ||
                images.Linkedin
              }
              alt={checkout.kelas_bisni?.nama || "No Data"}
              className="w-[121px] lg:w-[121px] lg:h-[88px] lg:mt-[15px] lg:ml-[5px] h-[88px] object-cover rounded-[5px] mt-[15px] ml-[5px]"
            />
            <div className="lg:ml-[15px] ml-[15px] mt-[15px] lg:mt-[15px]">
              <h1 className="lg:text-[16px] text-[16px] font-medium">
                {checkout.kelas_bisni?.nama || "No Data"}
              </h1>
              <div className="flex lg:flex">
                <FaPlay
                  className="h-[14px] lg:h-[14px] lg:w-[14px] mt-[16px] w-[14px] lg:mt-[16px]"
                  style={{ color: "#5E5F60" }}
                />
                <p
                  className="lg:text-[14px] text-[14px] mt-[13px] ml-[5px] lg:mt-[13px] lg:ml-[5px]"
                  style={{ color: "#5E5F60" }}
                >
                  36 Video
                </p>
                <FaClock
                  className="h-[14px] lg:h-[14px] lg:w-[14px] w-[14px] mt-[16px] ml-[15px] lg:mt-[16px] lg:ml-[15px]"
                  style={{ color: "#5E5F60" }}
                />
                <p
                  className="lg:text-[14px] text-[14px] mt-[13px] ml-[5px] lg:mt-[13px] lg:ml-[5px]"
                  style={{ color: "#5E5F60" }}
                >
                  240 Menit
                </p>
                <FaClipboardCheck
                  className="h-[14px] lg:h-[14px] lg:w-[14px] mt-[16px] ml-[15px] w-[14px] lg:mt-[16px] lg:ml-[15px]"
                  style={{ color: "#5E5F60" }}
                />
                <p
                  className="lg:text-[14px] text-[14px] mt-[13px] ml-[5px] lg:mt-[13px] lg:ml-[5px]"
                  style={{ color: "#5E5F60" }}
                >
                  4 Kuis
                </p>
              </div>
            </div>
          </div>

          <div
            className="w-[544px] lg:w-[544px] lg:h-[356px] mt-[15px] h-[356px] lg:mt-[15px]"
            style={{
              boxShadow: "4px 6px 8px rgba(0, 0, 0, 0.1)",
              borderRadius: "10px",
              border: "2px solid #DEDEDE",
            }}
          >
            <div
              className="w-full lg:w-full lg:h-[70px] lg:mt-[20px] lg:flex h-[70px] flex mt-[20px]"
              style={{ borderBottom: "2px solid #DEDEDE" }}
            >
              <div className="lg:ml-[20px] ml-[20px]">
                <p
                  className="lg:text-[14px] text-[14px]"
                  style={{ color: "#3F4041" }}
                >
                  Bayar Sebelum
                </p>
                <p className="lg:mt-[5px] mt-[5px] text-[16px] lg:text-[16px] font-medium">
                  {moment(checkout.date_expired).format("DD MMMM YYYY, hh:mm")}{" "}
                  WIB
                </p>
              </div>
              {/* <div className="w-[134px] lg:w-[134px] lg:h-[32px] lg:ml-auto lg:mr-[20px] lg:flex h-[32px] ml-auto mr-[20px] rounded-[6px] flex" style={{border: '2px solid #BA0000', backgroundColor:"#F8E6E6"}}>
                                <FaClock className="h-[14px] lg:h-[14px] lg:w-[14px] mt-[8px] ml-[8px] w-[14px] lg:mt-[8px] lg:ml-[8px]" style={{color:"#BA0000"}} />
                                <p className=" lg:mt-[3px] mt-[3px] ml-[10px] text-[16px] lg:ml-[10px] lg:text-[16px] font-medium" style={{color:"#BA0000"}}>23 : 59 : 05</p>
                            </div> */}
            </div>
            <div className="w-full lg:w-full lg:h-full h-full ml-[20px] lg:mt-[20px] lg:ml-[20px] mt-[20px]">
              <div className="flex lg:flex">
                <img
                  src={images.BCA}
                  alt="atm"
                  className="w-[48px] lg:w-[48px] lg:h-[48px] h-[48px] object-cover rounded-[6px]"
                />
                <div>
                  <p
                    className="lg:text-[14px] text-[14px] ml-[20px] lg:ml-[20px]"
                    style={{ color: "#3F4041" }}
                  >
                    Transfer Bank BCA{" "}
                  </p>
                  <p className="lg:text-[16px] text-[14px] ml-[20px] lg:ml-[20px] font-medium">
                    PT. Digital Bisnis Kreatif
                  </p>
                </div>
              </div>
              <div
                className="w-[504px] lg:w-[504px] lg:h-[56px] lg:mt-[20px] lg:rounded-[10px] h-[56px] mt-[20px] rounded-[10px]"
                style={{ backgroundColor: "#EDEDEE" }}
              >
                <div className="flex lg:ml-[20px] lg:flex ml-[20px] ">
                  <p className="lg:text-[22px] text-[22px] lg:mt-[12px] mt-[12px] font-bold">
                    5623896490
                  </p>
                  <div
                    onClick={() => copyToClipboard("5623896490")}
                    className="w-[64px] lg:w-[64px] lg:h-[32px] lg:rounded-[6px] lg:mt-[12px] lg:ml-auto lg:mr-[20px] h-[32px] rounded-[6px] mt-[12px] ml-auto mr-[20px] "
                    style={{ border: "1px solid #0F1011" }}
                  >
                    <Link>
                      <p className="mt-[2px] lg:mt-[2px] lg:ml-[13px] ml-[13px] font-medium">
                        Salin
                      </p>
                    </Link>
                  </div>
                </div>
                <div className="mt-[20px] lg:mt-[20px]">
                  <p
                    className="lg:text-[14px] text-[14px]"
                    style={{ color: "#3F4041" }}
                  >
                    Total Bayar
                  </p>
                  <div
                    className="w-[504px] lg:w-[504px] lg:h-[56px] lg:mt-[10px] lg:rounded-[10px] h-[56px] mt-[10px] rounded-[10px]"
                    style={{ backgroundColor: "#EDEDEE" }}
                  >
                    <div className="flex lg:flex ml-[20px] lg:ml-[20px] ">
                      <p className="lg:text-[22px] text-[22px] lg:mt-[12px] mt-[12px] font-bold">
                        {new Intl.NumberFormat("id-ID", {
                          style: "currency",
                          currency: "IDR",
                        }).format(checkout.kelas_bisni?.harga)}
                      </p>
                      <div
                        onClick={() =>
                          copyToClipboard(
                            checkout.kelas_bisni?.harga.toString()
                          )
                        }
                        className="w-[64px] lg:w-[64px] lg:h-[32px] lg:rounded-[6px] lg:mt-[12px] lg:ml-auto lg:mr-[20px] h-[32px] rounded-[6px] mt-[12px] ml-auto mr-[20px] "
                        style={{ border: "1px solid #0F1011" }}
                      >
                        <Link>
                          <p className="mt-[2px] lg:mt-[2px] lg:ml-[13px] ml-[13px] font-medium">
                            Salin
                          </p>
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div
            className="w-[544px] lg:w-[544px] lg:h-[200px] mt-[15px] h-[200px] lg:mt-[15px]"
            style={{
              boxShadow: "4px 6px 8px rgba(0, 0, 0, 0.1)",
              borderRadius: "10px",
              border: "2px solid #DEDEDE",
            }}
          >
            <div
              className="w-full lg:w-full lg:h-[60px] lg:flex lg:mt-[20px] h-[60px] flex mt-[20px]"
              style={{ borderBottom: "2px solid #DEDEDE" }}
            >
              <div className=" w-full lg:w-full lg:h-full ml-[20px] lg:flex h-full lg:ml-[20px] flex">
                <p className="lg:mt-[5px] mt-[5px] text-[16px] lg:text-[16px] font-medium">
                  Detail Pembayaran
                </p>
                <div
                  onClick={() =>
                    copyToClipboard(checkout?.nomor_invoice?.toString())
                  }
                  className="w-[148px] lg:w-[148px] flex lg:flex lg:h-[36px] lg:ml-auto lg:mr-[20px] h-[36px] rounded-[6px] ml-auto mr-[20px] "
                  style={{ border: "1px solid #0F1011" }}
                >
                  <Link className="flex lg:flex lg:px-[5px] px-[5px] ">
                    <img
                      src={icon.COPY}
                      alt=""
                      className="h-[15px] w-[15px] lg:h[15px] lg:w[15px] lg:mt-[8px] mt-[8px] "
                    />
                    <p className="mt-[4px] lg:mt-[4px] lg:ml-[5px] ml-[5px] font-medium">
                      {`ID#${checkout?.nomor_invoice?.slice(0, 10)}.`}
                    </p>
                  </Link>
                </div>
              </div>
            </div>

            <div className="lg:ml-[20px] ml-[20px] mt-[20px] lg:mt-[20px]">
              <div className="flex lg:flex lg:mr-[20px] mr-[20px]">
                <p
                  className="lg:text-[14px] text-[14px]"
                  style={{ color: "#5E5F60" }}
                >
                  Subtotal
                </p>
                <p
                  className="lg:text-[14px] text-[14px] lg:ml-auto font-medium ml-auto"
                  style={{ color: "#5E5F60" }}
                >
                  {new Intl.NumberFormat("id-ID", {
                    style: "currency",
                    currency: "IDR",
                  }).format(checkout.kelas_bisni?.harga)}
                </p>
              </div>

              <div className="flex lg:flex lg:mr-[20px] lg:mt-[8px] mr-[20px] mt-[8px]">
                <p
                  className="lg:text-[14px] text-[14px]"
                  style={{ color: "#5E5F60" }}
                >
                  Diskon
                </p>
                <p
                  className="lg:text-[14px] text-[14px]  font-medium ml-auto"
                  style={{ color: "#5E5F60" }}
                >
                  -Rp 0,00
                </p>
              </div>

              <div className="flex mr-[20px] lg:mr-[20px] lg:mt-[8px] mt-[8px]">
                <p
                  className="lg:text-[16px] text-[16px]  font-medium"
                  style={{ color: "#5E5F60" }}
                >
                  Total Bayar
                </p>
                <p
                  className="lg:text-[16px] text-[16px] font-medium ml-auto"
                  style={{ color: "#12517C" }}
                >
                  {new Intl.NumberFormat("id-ID", {
                    style: "currency",
                    currency: "IDR",
                  }).format(checkout.kelas_bisni?.harga)}
                </p>
              </div>
            </div>
          </div>

          <Link onClick={() => onSubmit("apa")}>
            <h1 className="text-[22px]  lg:text-[16px] font-bold text-center leading-[32px] lg:leading-[60px] lg:mt-[20px] mt-[20px] mb-[20px] lg:mb-[20px] underline">
              Batalkan Pembelian
            </h1>
          </Link>
        </div>
      </div>
      {/* ))} */}

      <div
        className="fixed bottom-0 w-[540px] lg:w-full lg:h-[96px] lg:mt-auto h-[96px] border mt-auto"
        style={{
          boxShadow: "4px 6px 8px rgba(0, 0, 0, 0.1)",
          border: "2px solid #DEDEDE",
          backgroundColor: "#EDEDEE",
        }}
      >
        <div className="flex lg:flex lg:ml-[300px]">
          <div className="w-[350px] lg:w[350px] lg:mt-[20px]  mt-[20px]">
            <p
              className="lg:text-[14px] text-[14px] font-light"
              style={{ color: "#5E5F60" }}
            >
              Silakan klik tombol di samping ini agar pembayaranmu bisa segera
              kami konfirmasi
            </p>
          </div>
          <Link
            onClick={() => paidCheckout()}
            to={`/approval-checkout/${checkout?.id_kelas_bisnis}`}
            className=" mt-[15px] lg:mt-[15px] lg:ml-[20px] ml-[20px]"
          >
            <ButtonBlack500
              WIDTH={"w-[320px] lg:w-[320px]"}
              HEIGHT={"w-[56px] lg:w-[56px]"}
              TEXT_BUTTON={"Saya Sudah Bayar"}
            />
          </Link>
        </div>
      </div>
    </div>
  );
}

export default MainCheckout;
