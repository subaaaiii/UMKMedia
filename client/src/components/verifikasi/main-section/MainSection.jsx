import { Spinner } from "@chakra-ui/react";
import React, { useEffect, useRef, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { api } from "../../../api/api";
import { HiOutlineRefresh } from "react-icons/hi";
import Logo from "../../global-component/logo/Logo";
import Swal from "sweetalert2";

function MainSection() {
  const navigate = useNavigate();
  const [isLoading, setIsLoading] = useState(false);
  const [text, setText] = useState("Silahkan verifikasi akun kamu disini!");
  const [status, setStatus] = useState("standby");
  const [err, setErr] = useState("no");
  const controllerRef = useRef();
  const { verif } = useParams();

  const timeoutRef = useRef(null);
  const timoutAbort = useRef(null);

  const verifikasiUser = async () => {
    controllerRef.current = new AbortController();
    if (verif) {
      setIsLoading(true);

      if (timeoutRef.current) {
        clearTimeout(timeoutRef.current);
      }
      setText(
        "jangan tutup atau refresh halaman, kami sedang memproses verifikasi akun anda!"
      );
      timeoutRef.current = setTimeout(async () => {
        try {
          const response = await api.get(
            `${process.env.REACT_APP_API_BASE_URL}/user/verif/${verif}`,
            {
              signal: controllerRef.current.signal,
            }
          );
          console.log(response);

          setText("Verifikasi akun berhasil!");
          setStatus("done");
        } catch (error) {
          clearTimeout(timoutAbort.current);
          if (error.name === "CanceledError") {
            setText(
              "Maaf, verifikasi akun kamu gagal. Silahkan coba lagi dan pastikan koneksi internet anda stabil."
            );
          } else {
            Swal.fire({
              title: "Error",
              text: "Ada yang salah, atau link telah kadaluarsa! Silahkan minta link baru lagi!",
              icon: "error",
              confirmButtonColor: "#0F1011",
            });
            navigate("/");
          }
          console.log(error.name);

          setStatus("error");
        } finally {
          setIsLoading(false);
        }
      }, 2000);
    }
  };

  useEffect(() => {}, [verif]);
  useEffect(() => {
    console.log({ isLoading });
  }, [isLoading]);

  return (
    <div className="flex  h-full min-h-screen flex-col justify-center items-center px-[5px] lg:px-[100px] 2xl:p-0 w-full  2xl:max-w-[1080px]">
      <div className="w-full flex flex-col justify-center items-center">
        <p
          className={`text-[24px] ${
            status === "error"
              ? "text-red-600"
              : status === "done"
              ? " text-green-600"
              : "text-black500"
          } text-center w-full max-w-[563px]`}
        >
          {text}
        </p>
        {text === "Proses ini memakan waktu lebih lama dari biasanya." && (
          <button onClick={() => controllerRef.current.abort()}>Cancel</button>
        )}

        {text === "Verifikasi akun berhasil!" && (
          <p className="text-[24px]  w-full  max-w-[620px]  text-center mt-[38px]">
            Selamat! Akun kamu sudah terverifikasi. Klik tombol dibawah untuk
            langkah selanjutnya.
          </p>
        )}
      </div>

      <div className="w-full flex flex-col justify-center items-center  gap-[10px] mt-[30px]  mb-[222px]">
        {status === "error" ? (
          <>
            <button
              onClick={() => verifikasiUser()}
              className="  rounded-[10px] p-[10px]"
            >
              <div className="flex justify-center items-center text-white text-[18px] font-medium leading-[28px]">
                {!isLoading ? (
                  <HiOutlineRefresh className="text-whiteSmoke700 w-[50px]  h-[50px]" />
                ) : (
                  <div className="w-full flex  justify-center items-center gap-5">
                    <Spinner size="lg" color="black" />
                  </div>
                )}
              </div>
            </button>
            {/* <button
              onClick={() => navigate("/")}
              className="w-[538px] bg-black500 rounded-[10px] p-[10px]"
            >
              <p className="text-white text-[18px] font-medium leading-[28px]">
                back to home
              </p>
            </button> */}
          </>
        ) : status === "standby" ? (
          <button
            onClick={() => verifikasiUser()}
            className="w-[538px] bg-black500 rounded-[10px] p-[10px]"
          >
            <div className="flex justify-center items-center text-white text-[18px] font-medium leading-[28px]">
              {!isLoading ? (
                <p className="text-[24px] text-center">Verifikasi Akun</p>
              ) : (
                <div className="w-full flex  justify-center items-center gap-5">
                  <Spinner size="lg" />
                  <p className="text-[24px] text-center">Verifikasi Akun</p>
                </div>
              )}
            </div>
          </button>
        ) : status === "done" ? (
          <button
            onClick={() => navigate("/")}
            className="w-[538px] bg-black500 rounded-[10px] p-[10px]"
          >
            <p className="text-white text-[18px] font-medium leading-[28px]">
              Masuk ke akun kamu
            </p>
          </button>
        ) : null}
      </div>

      <div className=" absolute bottom-0 w-full flex flex-col justify-start  border-t-[1px] border-black500   items-start  py-[63px] px-[95px]">
        <div className="max-w-[791px]">
          <p className="text-[24px]  font-medium leading-[30px]  ">
            Perhatian!
          </p>
          <p className="text-[18px]  leading-[20px]">
            Sebelum kamu melanjutkan langkah berikutnya, pastikan kamu sudah
            verifikasi email dan pastikan link verifikasi tidak kadaluarsa.
          </p>

          <p className="text-[18px]  leading-[20px] mt-[20px]">
            Jika kamu mengalami kendala, silahkan hubungi Contact Center{" "}
            <span className="text-indigoDye500  cursor-pointer">disini</span>{" "}
          </p>
        </div>
      </div>
    </div>
  );
}

export default MainSection;
