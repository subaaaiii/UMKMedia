import React, { useState } from "react";
import { api } from "../../../api/api";

function Unverified() {
  const [actived, setActived] = useState(false);
  const handleButton = async () => {
    setActived(true);
    setTimeout(async () => {
      try {
        const token = JSON.parse(localStorage.getItem("auth"));
        const response = await api.get(
          `${process.env.REACT_APP_API_BASE_URL}/user/send-verif`,
          {
            headers: {
              Accept: "application/json",
              "Content-Type": "application/json",
              Authorization: token,
            },
          }
        );

        console.log(response);
      } catch (error) {
        console.log(error);
      } finally {
        setActived(false);
      }
    }, 1000);
  };

  return (
    <div className="w-full flex justify-center items-center bg-yellow-200">
      <div className="flex justify-center items-center text-[12px] gap-5">
        <p>
          {actived ? "link sended cek your email" : "Cek your email message or"}{" "}
        </p>
        <button
          onClick={() => {
            handleButton();
          }}
          className={`${
            actived ? "hidden" : "block"
          } px-[10px] py-[5px] bg-black500 rounded-[10px] text-white`}
        >
          Send link
        </button>
      </div>
    </div>
  );
}

export default Unverified;
