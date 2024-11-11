import React, { useEffect, useState } from "react";
import { api } from "../../../../api/api";
import TransactionCard from "../../../global-component/card/transaction-card/TransactionCard";

export default function SemuaTransaksi() {
  const [transaksi, setTransaksi] = useState([]);
  // console.log(transaksi);

  const fetchTransaksi = async () => {
    const token = JSON.parse(localStorage.getItem("auth"));
    try {
      const response = await api.get(
        `${process.env.REACT_APP_API_BASE_URL}/kelasTransaksi/getTransaksiByIdUser`,
        {
          headers: {
            Accept: "application/json",
            "Content-Type": "application/json",
            Authorization: token,
          },
        }
      );
      setTransaksi(response.data.data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchTransaksi();
  }, []);
  return (
    <div>
      {transaksi.map((transaksi, index) => (
        <TransactionCard transaksi={transaksi} key={index} fetchTransaksi={fetchTransaksi} />
      ))}
    </div>
  );
}
