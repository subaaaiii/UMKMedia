import { zodResolver } from "@hookform/resolvers/zod";
import React, { useRef, useState } from "react";
import { useForm } from "react-hook-form";
import { requestSchema } from "../lib/requestSchema";
import Swal from "sweetalert2";
import { api } from "../../../api/api";
import { useNavigate } from "react-router-dom";
import { Spinner } from "@chakra-ui/react";
function MainSection() {
  const navigate = useNavigate();
  const timeoutRef = useRef(null);
  const [isSended, setIsSended] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
    reset,
  } = useForm({
    resolver: zodResolver(requestSchema),
  });

  const onSubmit = async (data) => {
    setIsLoading(true);
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
    }

    timeoutRef.current = setTimeout(async () => {
      try {
        const response = await api.post(
          `${process.env.REACT_APP_API_BASE_URL}/user/request-reset`,
          {
            email: data.EMAIL,
          }
        );
        console.log(response);
        //   dispatch(setToken(response.data.token));
        //   dispatch(setUser(response.data.data));
        //   localStorage.setItem("auth", JSON.stringify(response.data.token));
        //   localStorage.setItem(
        //     "verified",
        //     JSON.stringify(response.data.data.verified)
        //   );
        reset();
        Swal.fire({
          title: "Request sended!",
          text: " Cek email anda!",
          icon: "success",
          confirmButtonColor: "#0F1011",
        });
        setIsSended(true);
      } catch (error) {
        console.log(error);
        Swal.fire({
          title: "Request failed!",
          text: " Ada yang salah, coba lagi!",
          icon: "error",
          confirmButtonColor: "#0F1011",
        });
      } finally {
        setIsLoading(false);
      }
    }, 2000);
  };

  return (
    <div className="flex flex-col justify-center items-center w-full  2xl:max-w-[1080px]">
      <div className="w-full  h-[1099px] min-h-screen flex flex-col justify-center items-center">
        <h1 className="text-[32px] text-center font-medium leading-[72px] ">
          Lupa Password
        </h1>
        <div className="w-full flex flex-col justify-center items-center mt-[70px]">
          {!isSended ? (
            <form
              onSubmit={handleSubmit(onSubmit)}
              className="flex flex-col gap-[52px] w-[208px] md:w-[538px] "
            >
              <div className="w-full flex flex-col items-center">
                <input
                  {...register("EMAIL")}
                  autoFocus
                  type="text"
                  placeholder="Email"
                  className="outline-none w-full h-[50px] bg-transparent text-[12px] md:text-[18px] font-medium leading-[24px] border-b-[2px] border-black"
                />

                {errors.EMAIL && (
                  <p className="mt-[10px] text-red-500 text-[12px] md:text-[18px] font-medium leading-[24px]">{`${errors.EMAIL.message}`}</p>
                )}
              </div>

              <div
                className={`w-full  flex justify-center items-center mt-[49px]`}
              >
                <button
                  disabled={isSubmitting ? true : false}
                  type="submit"
                  className={`gap-5 flex  mx-[5px] sm:mx-0 w-full px-[64px] py-[16px] justify-center items-center bg-black500 disabled:bg-whiteSmoke600 hover:bg-whiteSmoke800 rounded-[10px]`}
                >
                  {isLoading && <Spinner size="md" color="white" />}

                  <p className="text-whiteSmoke500 shrink-0 font-medium text-[16px] leading-[24px]">
                    Send Link
                  </p>
                </button>
              </div>

              <div className="w-full flex gap-1 justify-center items-center mt-[57px] text-[18px] font-medium leading-[24px]">
                <p>Sudah punya akun?</p>{" "}
                <button
                  onClick={() => navigate("/login")}
                  className="underline text-indigoDye500"
                >
                  {" "}
                  Masuk di sini
                </button>
              </div>
            </form>
          ) : (
            <div className=" w-[208px] md:w-[538px] flex flex-col justify-start items-center">
              <p className="text-[24px] font-medium leading-[50px]">
                Permintaan reset password berhasil.
              </p>
              <p className="text-[24px] font-normal leading-[50px]">
                Cek email kamu untuk proses berikutnya
              </p>
              <button
                onClick={() => navigate("/")}
                className="px-[32px] py-[16px] rounded-[10px] w-full flex bg-black500 text-white justify-center items-center mt-[66px]"
              >
                <p className="text-[16px] font-medium leading-[24px]">
                  Kembali ke halaman utama
                </p>
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default MainSection;
