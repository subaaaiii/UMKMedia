import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { api } from "../../../../api/api";
import moment from "moment";
import "moment/locale/id";

export default function LihatInvoice() {
  const { transaction_id } = useParams();
  const [invoice, setInvoice] = useState([]);
  const [user, setUser] = useState([]);
  const [kelasbisnis, setKelasBisnis] = useState([]);

  const fetchInvoice = async () => {
    try {
      const token = JSON.parse(localStorage.getItem("auth"));
      const response = await api.post(
        `${process.env.REACT_APP_API_BASE_URL}/kelasTransaksi/transaksi-saya/invoice`,
        {
          id: transaction_id,
        },
        {
          headers: {
            Authorization: token,
          },
        }
      );
      setInvoice(response.data.data);
      setUser(response.data.data.User);
      setKelasBisnis(response.data.data.kelas_bisni);
      console.log(response.data.data);
    } catch (error) {
      console.log(error);
    }
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
      return "text-[#278B03]";
    } else if (status === "canceled") {
      return "text-[#A12105]";
    } else {
      return "text-[#E49333]";
    }
  };

  const total = (status, price) => {
    if (status === "success") {
      return price;
    } else if (status === "canceled") {
      return "Dibatalkan";
    } else {
      return "Menunggu Konfirmasi";
    }
  };

  useEffect(() => {
    fetchInvoice();
  }, [fetchInvoice]);

  return (
    <div className="flex flex-col lg:w-[1080px] max-w-screen-xl justify-center">
      <p className="text-[16px] lg:text-[48px] leading-[30px] lg:leading-[72px] font-bold text-black500">
        Invoice
      </p>
      <div className="flex flex-col lg:flex-row justify-between items-start lg:items-end mb-[20px] lg:my-[30px]">
        <table className="hidden lg:block text-[24px] leading-[30px] font-normal">
          <tbody>
            <tr>
              <td>No. Invoice</td>
              <td className="px-[25px]">:</td>
              <td className="text-[#AF0707] font-medium">
                {invoice.nomor_invoice}
              </td>
            </tr>
            <tr>
              <td>Waktu Pembayaran</td>
              <td className="px-[25px] py-[10px]">:</td>
              <td className="font-medium">
                {invoice.status_transaksi === "success"
                  ? moment(invoice.date_transaksi).format("DD MMMM YYYY, hh:mm")
                  : "-"}
              </td>
            </tr>
            <tr>
              <td>Status Transaksi</td>
              <td className="px-[25px]">:</td>
              <td
                className={`${labelColor(
                  invoice.status_transaksi
                )} text-[#278B03] font-medium`}
              >
                {invoice.status_transaksi === "success"
                  ? "Berhasil"
                  : invoice.status_transaksi === "canceled"
                  ? "Dibatalkan"
                  : "Menunggu Konfirmasi"}
              </td>
            </tr>
          </tbody>
        </table>
        <div className=" lg:hidden text-[12px] leading-[20px] font-normal">
          <div className="mt-[10px]">
            <p>No. Invoice:</p>
            <p className="text-[#AF0707] font-medium">
              {invoice.nomor_invoice}
            </p>
          </div>
          <div className="my-[10px]">
            <p>Waktu Pembayaran:</p>
            <p className="font-medium">
              {invoice.status_transaksi === "success"
                ? moment(invoice.date_transaksi).format("DD MMMM YYYY, hh:mm")
                : "-"}
            </p>
          </div>
          <div className="mb-[10px]">
            <p>Status Transaksi:</p>
            <p
              className={`${labelColor(
                invoice.status_transaksi
              )} text-[#278B03] font-medium`}
            >
              {invoice.status_transaksi === "success"
                  ? "Berhasil"
                  : invoice.status_transaksi === "canceled"
                  ? "Dibatalkan"
                  : "Menunggu Konfirmasi"}
            </p>
          </div>
        </div>
        <div className="text-[12px] leading-[20px] lg:text-[24px] lg:leading-[30px]">
          <p className="font-bold lg:mb-[10px]">
            {user.nama_lengkap || "data not found"}
          </p>
          <p className="font-normal">{user.email || "data not found"}</p>
        </div>
      </div>

      <div className="flex flex-col w-[358px] h-[295px] justify-between md:w-[500px] md:h-[280px] lg:w-[1080px] lg:h-[554px] border-[1px] border-whiteSmoke700 mb-[50px] rounded-[10px] ">
        <div className="h-[38px] lg:h-[74px] flex justify-between bg-[rgba(204,204,204,0.2)] p-[11px] items-center text-[14px] lg:text-[28px] font-medium leading-[30px] rounded-t-[10px]">
          <p className="lg:w-[335px]">Daftar Produk</p>
        </div>
        <div className="flex lg:h-[198px] px-[11px] items-start lg:items-center">
          <div className="flex w-[78px] h-[78px] md:w-[150px] md:h-[150px] mr-[25px]">
            <img
              src={`${process.env.REACT_APP_SERVER_URL}images/kelas/${kelasbisnis.image}`}
              alt={"No Data"}
              className="w-full h-full object-cover rounded-[10px]"
            />
          </div>
          <div className="flex flex-col lg:flex-row lg:h-[160px] lg:leading-[28px] justify-start">
            <p className="text-[14px] lg:text-[24px] font-medium lg:w-[50%] w-[160px] mb-[15px]">
              {kelasbisnis.nama}
            </p>
            <div className="lg:block hidden h-[150px] w-[2px] font-medium border-l-2 border-[#666666)] border-opacity-50"></div>
            <div className=" lg:h-[160px] lg:pl-[25px] text-[12px] lg:text-[24px] font-medium">
              <p className="text-[#666666] mb-[5px] lg:mb-[72px]">
                Harga Produk
              </p>
              <p className="text-[#0F1011]">{rupiah(kelasbisnis.harga)}</p>
            </div>
          </div>
        </div>
        <div className="flex flex-col justify-center items-center">
          <div className="h-[2px] w-[335px] lg:w-[1046px] font-medium border-t-2 border-[#666666)] border-opacity-50"></div>
          <div className="w-[100%]">
            <p className="text-[14px] lg:text-[28px] font-medium leading-[30px] px-[11px] lg:mb-[20px] lg:mt-[40px]">
              Detail Pembayaran
            </p>
            <div className="h-[30px] lg:h-[50px] flex items-center rounded-b-[10px] px-[11px] text-[12px] lg:text-[24px] leading-[72px]">
              <p className="w-[55%] lg:w-[65%] text-black500">Subtotal Harga</p>
              <p className="w-[45%] lg:w-[35%]  text-[#0F1011] text-right">
                {total(invoice.status_transaksi, rupiah(kelasbisnis.harga))}
              </p>
            </div>
            <div className="h-[30px] lg:h-[50px] flex items-center rounded-b-[10px] px-[11px] text-[12px] lg:text-[24px] leading-[72px] lg:mb-[20px]">
              <p className="w-[55%] lg:w-[65%] text-black500">
                Total Pembayaran
              </p>
              <p className="w-[45%] lg:w-[35%]  text-[#0F1011] text-right font-medium">
                {total(invoice.status_transaksi, rupiah(kelasbisnis.harga))}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
