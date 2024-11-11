import React, { useState } from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEllipsisVertical } from "@fortawesome/free-solid-svg-icons";
import { useNavigate } from "react-router-dom";
import ButtonBlack500 from "./../../button/button-black500/ButtonBlack500";
import moment from "moment";
import "moment/locale/id";
import { api } from "./../../../../api/api";
import Swal from "sweetalert2";

export default function TransactionCard(transaksi) {
  const [dropdownShow, setDropdownShow] = useState(false);
  const navigate = useNavigate();

  const toggleDropDown = () => {
    setDropdownShow(!dropdownShow);
  };
  const rupiah = (num) => {
    if (typeof num === "number") {
      return `Rp. ${num.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".")},-`;
    } else {
      return num;
    }
  };

  const labelColor = (status) => {
    if (status === "success") {
      return "bg-[#278B03]";
    } else if (status === "canceled") {
      return "bg-[#A12105]";
    } else {
      return "bg-[#E49333]";
    }
  };
  const total = (status, price) => {
    if (status === "canceled") {
      return "Dibatalkan";
    } else {
      return price;
    }
  };

  const updateStatus = async (upStatus) => {
    try {
      const token = JSON.parse(localStorage.getItem("auth"));
      const response = await api.put(
        `${process.env.REACT_APP_API_BASE_URL}/kelasTransaksi/updateStatusTransaksi`,
        {
          id: transaksi.transaksi.id,
          status_transaksi: upStatus,
        },
        {
          headers: {
            Authorization: token,
          },
        }
      );
      // console.log(response);
    } catch (error) {
      console.log(error);
    }
  };

  const transactionCanceled = () => {
    const swalWithBootstrapButtons = Swal.mixin({
      customClass: {
        confirmButton: "btn btn-success border border-dark",
        cancelButton: "btn btn-danger border border-dark",
      },
      buttonsStyling: true,
      confirmButtonColor: "#0F1011",
      cancelButtonColor: "#F4F4F4",

      
    });
    swalWithBootstrapButtons
      .fire({
        text: "Apakah kamu yakin ingin membatalkan transaksi ini?",
        showCancelButton: true,
        confirmButtonText: "Ya, batalkan transaksi ini",
        cancelButtonText: "<p style='color:#0F1011'> Tidak </p>",
        reverseButtons: true,
        heightAuto: false,
        customClass: "w-[389px] lg:w-[640px] text-[12px] lg:text-[18px] font-medium text-[#0F1011] py-[69.5px] lg:py-[110px]",
      })
      .then((result) => {
        if (result.isConfirmed) {
          swalWithBootstrapButtons.fire({
            title: "Dibatalkan",
            text: "Transaksi Telah Dibatalkan",
            icon: "success",
          });
          updateStatus("canceled").then(() => {
            transaksi.fetchTransaksi();
          });
        } else if (
          /* Read more about handling dismissals below */
          result.dismiss === Swal.DismissReason.cancel
        ) {
        }
      });
  };

  return (
    <>
      <div
        className={
          transaksi.transaksi.status_transaksi === "pending"
            ? "flex flex-col w-[358px] h-[248px] justify-between md:w-[500px] md:h-[280px] lg:w-[750px] lg:h-[346px] border-[1px] border-whiteSmoke700 mb-[30px] rounded-[10px] shadow-md shadow-gray-300 cursor-pointer"
            : "flex flex-col w-[358px] h-[204px] justify-between md:w-[500px] md:h-[280px] lg:w-[750px] lg:h-[346px] border-[1px] border-whiteSmoke700 mb-[30px] rounded-[10px] shadow-md shadow-gray-300 cursor-pointer"
        }
        onClick={() => {
          if (transaksi.transaksi.status_transaksi === "success") {
            navigate(`/lms`);
          } else if (transaksi.transaksi.status_transaksi === "pending") {
            const date = new Date().toISOString();
            console.log(date);
            console.log(transaksi.transaksi.date_expired);
            console.log(date >= transaksi.transaksi.date_expired === true);
            if (date >= transaksi.transaksi.date_expired) {
              if (transaksi.transaksi.isPaid === true) {
                navigate(`/checkout/approval-checkout`);
              } else {
                updateStatus("canceled");
                Swal.fire({
                  title: "Error",
                  text: "Transaksi Kadaluarsa",
                  icon: "error",
                  confirmButtonColor: "#0F1011",
                }).then(() => {
                  transaksi.fetchTransaksi();
                });
              }
            } else {
              if (transaksi.transaksi.isPaid === true) {
                navigate(`/checkout/approval-checkout`);
              } else {
                navigate(`/checkout/${transaksi.transaksi.kelas_bisni.id}`);
              }
            }
          } else {
            Swal.fire({
              title: "Info",
              text: "Transaksi Ini Telah Batal",
              icon: "info",
              confirmButtonColor: "#0F1011",
            });
          }
        }}
      >
        <div className="h-[38px] lg:h-[74px] flex justify-between bg-[rgba(204,204,204,0.2)] p-[11px] items-center text-[12px] lg:text-[18px] font-medium leading-[30px] rounded-t-[10px]">
          {transaksi.transaksi.status_transaksi === "success" ? (
            <>
              <p className="lg:w-[335px] lg:mr-[10px]">
                <span className="lg:inline hidden">Waktu Pembayaran, </span>
                {moment(transaksi.transaksi.date_transaksi).format(
                  "DD MMMM YYYY, hh:mm"
                )}
              </p>
              <div className="border-l border-[#666666] border-opacity-30 h-[45px] w-[2px] lg:block hidden"></div>
              <Link
                to={`/profile/transaksi/${transaksi.transaksi.id}/lihat-invoice`}
                onClick={(event) => {
                  event.stopPropagation();
                }}
              >
                <p className="h-[60px] mx-[10px] lg:inline-block hidden hover:underline hover:text-[#1C64F2]">
                  <span className="line-clamp-1">
                    No. Invoice: {transaksi.transaksi.nomor_invoice}
                  </span>
                </p>
              </Link>
            </>
          ) : (
            <Link
              to={`/profile/transaksi/${transaksi.transaksi.id}/lihat-invoice`}
              onClick={(event) => {
                event.stopPropagation();
              }}
            >
              <p className="w-[239px] items-center lg:inline-block hidden">
                <span className="line-clamp-1 hover:underline hover:text-[#1C64F2]">
                  No. Invoice: {transaksi.transaksi.nomor_invoice}
                </span>
              </p>
            </Link>
          )}
          <div className="flex flex-row items-center">
            <div
              className={`${labelColor(
                transaksi.transaksi.status_transaksi
              )} flex justify-center items-center min-w-[67px] w-fit h-[24px] lg:min-w-[109px] lg:w-fit lg:h-[36px] px-[10px] text-center border-[1px] rounded-[5px] lg:rounded-[10px] text-whiteSmoke500`}
            >
              {transaksi.transaksi.status_transaksi === "success"
                ? "Berhasil"
                : transaksi.transaksi.status_transaksi === "canceled"
                ? "Dibatalkan"
                : "Menunggu Konfirmasi"}
            </div>
            <div className="relative flex items-center lg:hidden text-left w-fit pl-2">
              <button
                type="button"
                className="inline-flex justify-between items-center w-fit min-w-[10px]"
                onClick={(event) => {
                  event.stopPropagation();
                  toggleDropDown();
                }}
              >
                <FontAwesomeIcon
                  icon={faEllipsisVertical}
                  className="w-[18px] h-[18px] text-slate-600"
                />
              </button>
              {dropdownShow ? (
                <div className="absolute right-0 top-4 z-10 mt-2 flex items-center w-[121px] h-[42px] origin-top-right rounded-[5px] bg-[#F4F4F4] ring-1 ring-black ring-opacity-5 focus:outline-none shadow-lg shadow-gray-300">
                  <Link
                    to={`/profile/transaksi/${transaksi.transaksi.id}/lihat-invoice`}
                    // className={({ isActive }) =>
                    //   isActive
                    //     ? "text-black500 text-[12px] leading-[20px] font-normal border-[1px] rounded-[5px] border-whiteSmoke600 shadow-lg shadow-gray-300"
                    //     : "text-whiteSmoke800 text-[12px] leading-[20px] font-bold"
                    // }
                    className="text-black500 text-[12px] leading-[20px] font-normal ml-2 active:font-bold"
                    onClick={(event) => {
                      event.stopPropagation();
                      toggleDropDown();
                    }}
                  >
                    Lihat Invoice
                  </Link>
                </div>
              ) : null}
            </div>
          </div>
        </div>
        <div className="flex lg:h-[198px] px-[11px] items-start lg:items-center">
          <div className="flex w-[78px] h-[78px] md:w-[150px] md:h-[150px] mr-[25px]">
            <img
              src={`${process.env.REACT_APP_SERVER_URL}images/kelas/${transaksi.transaksi.kelas_bisni.image}`}
              alt={transaksi.transaksi.kelas_bisni.nama || "No data"}
              className="w-full h-full object-cover rounded-[10px]"
            />
          </div>
          <div className="flex flex-col lg:flex-row lg:h-[160px] lg:leading-[28px] justify-start">
            <p className="text-[14px] lg:text-[24px] font-medium lg:w-[50%] w-[160px] mb-[15px]">
              {transaksi.transaksi.kelas_bisni.nama}
            </p>
            <div className="lg:block hidden h-[150px] w-[2px] font-medium border-l-2 border-[#666666)] border-opacity-50"></div>
            <div className=" lg:h-[160px] lg:pl-[25px] text-[12px] lg:text-[24px] font-medium">
              <p className="text-[#666666] mb-[5px] lg:mb-[72px]">
                Harga Produk
              </p>
              <p className="text-[#0F1011]">
                {rupiah(transaksi.transaksi.kelas_bisni.harga)}
              </p>
            </div>
          </div>
        </div>
        <div
          className={
            transaksi.transaksi.status_transaksi === "pending"
              ? "h-[72px] lg:h-[74px] flex flex-col lg:flex-row items-center rounded-b-[10px] bg-[rgba(204,204,204,0.2)] px-[11px] text-[12px] lg:text-[24px] lg:leading-[72px] font-medium"
              : "h-[38px] lg:h-[74px] flex flex-col lg:flex-row items-center rounded-b-[10px] bg-[rgba(204,204,204,0.2)] px-[11px] text-[12px] lg:text-[24px] lg:leading-[72px] font-medium"
          }
        >
          <div
            className={
              transaksi.transaksi.status_transaksi === "pending"
                ? "flex w-full h-[50%] lg:h-[100%] justify-center items-center"
                : "flex w-full h-[100%] justify-center items-center"
            }
          >
            <p className="w-[55%] lg:w-[65%] h-fit text-[#666666]">
              Total Pembayaran
            </p>
            <p className="w-[45%] lg:w-[35%] h-fit text-[#0F1011] text-right lg:text-left">
              {total(
                transaksi.transaksi.status_transaksi,
                rupiah(transaksi.transaksi.kelas_bisni.harga)
              )}
            </p>
          </div>
          {transaksi.transaksi.status_transaksi === "pending" ? (
            <div className="flex gap-[10px] w-fit">
              <button
                onClick={(event) => {
                  event.stopPropagation();
                  transactionCanceled();
                }}
                className={`flex mx-[5px] sm:mx-0 w-[155px] h-[24px] lg:w-[107px] lg:h-[34px] justify-center items-center bg-[#8A8A8A33] hover:bg-black100 rounded-[5px]`}
              >
                <p className="text-black500 shrink-0 font-medium text-[12px] lg:text-[16px] leading-[20px] lg:leading-[24px]">
                  Batalkan
                </p>
              </button>
              <button
                onClick={(event) => {
                  event.stopPropagation();
                  navigate(
                    `/checkout-free/${transaksi.transaksi.kelas_bisni.id}`
                  );
                }}
                className={`flex mx-[5px] sm:mx-0 w-[155px] h-[24px] lg:w-[107px] lg:h-[34px] justify-center items-center bg-black500 hover:bg-whiteSmoke800 rounded-[5px]`}
              >
                <p className="text-whiteSmoke500 shrink-0 font-medium text-[12px] lg:text-[16px] leading-[20px] lg:leading-[24px]">
                  Selesaikan
                </p>
              </button>
            </div>
          ) : (
            ""
          )}
        </div>
      </div>
    </>
  );
}
