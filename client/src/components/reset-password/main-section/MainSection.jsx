import { zodResolver } from "@hookform/resolvers/zod";
import React, { useEffect, useState } from "react";
import { useForm, useWatch } from "react-hook-form";
import { resetPasswordSchema } from "../lib/resetPasswordSchema";
import { FaRegEye, FaRegEyeSlash } from "react-icons/fa";
import Swal from "sweetalert2";
import { useNavigate, useParams } from "react-router-dom";
import { api } from "../../../api/api";
import { Spinner } from "@chakra-ui/react";
import "./main-reset.css";

function MainSection() {
  const [showBaru, setShowBaru] = useState(false);
  const [showConfirm, setShowConfirm] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const navigate = useNavigate();
  const { token } = useParams();

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting, dirtyFields },
    reset,
    getValues,
  } = useForm({
    resolver: zodResolver(resetPasswordSchema),
    defaultValues: {
      PASSWORD: "",
      CONFIRM_PASSWORD: "",
    },
  });

  const onSubmit = async (data) => {
    setIsLoading(true);
    try {
      const response = await api.put(
        `${process.env.REACT_APP_API_BASE_URL}/user/reset-password`,
        {
          password: data.PASSWORD,
          token: token,
        }
      );
      Swal.fire({
        position: "center",
        icon: "success",
        title: "reset password success",
        showConfirmButton: false,
        timer: 1500,
      });

      console.log(response);
    } catch (error) {
      console.log(error);
      Swal.fire({
        title: "Error",
        text: "Ada yang salah! atau token kadaluarsa!",
        icon: "error",
        confirmButtonColor: "#0F1011",
      });
    } finally {
      setIsLoading(false);
      navigate("/login");
    }
  };

  return (
    <div className="flex  h-full min-h-screen flex-col justify-center items-center w-full  2xl:max-w-[1080px]">
      <div className="w-full flex justify-center items-center">
        <h1 className="text-[32px] font-bold leading-[72px]">Reset Password</h1>
      </div>
      <div className="w-full flex justify-center items-center mt-[57px]">
        <form
          onSubmit={handleSubmit(onSubmit)}
          className=" flex flex-col w-[208px] md:w-[538px]  justify-center items-center"
        >
          <div className="gap-[20px] w-full flex flex-col mb-[26px]">
            <label className="relative w-full  flex items-center">
              <div
                type="button"
                onClick={() => setShowBaru((prev) => !prev)}
                className="cursor-pointer absolute right-0 bg-whiteSmoke500 w-[50px] py-1 flex justify-center items-center"
              >
                {showBaru ? (
                  <FaRegEye className="text-[20px]" />
                ) : (
                  <FaRegEyeSlash className="text-[20px]" />
                )}
              </div>

              <input
                {...register("PASSWORD")}
                // placeholder="Password baru*"
                id="password"
                type={showBaru ? "text" : "password"}
                className="custom-placeholder-color outline-none w-full h-[50px] bg-transparent text-[12px] md:text-[18px] font-medium leading-[24px] border-b-[2px] border-black"
              />
              {!dirtyFields.PASSWORD && (
                <div className="absolute left-0 pointer-events-none flex justify-center items-start">
                  <p className="text-whiteSmoke800 font-medium">
                    Password baru <span className="text-red-600">*</span>{" "}
                  </p>
                </div>
              )}
            </label>

            {errors.PASSWORD && (
              <p className="text-red-500 text-[12px] md:text-[18px] font-medium leading-[24px]">{`${errors.PASSWORD.message}`}</p>
            )}
          </div>

          <div className="gap-[20px] w-full flex flex-col mb-[26px]">
            <div className="relative w-full  flex items-center">
              <div
                type="button"
                onClick={() => setShowConfirm((prev) => !prev)}
                className="cursor-pointer absolute right-0 bg-whiteSmoke500 w-[50px] py-1 flex justify-center items-center"
              >
                {showConfirm ? (
                  <FaRegEye className="text-[20px]" />
                ) : (
                  <FaRegEyeSlash className="text-[20px]" />
                )}
              </div>
              <input
                {...register("CONFIRM_PASSWORD")}
                // placeholder="Confirm password"
                id="confirmPassword"
                type={showConfirm ? "text" : "password"}
                className=" outline-none w-full h-[50px] bg-transparent text-[12px] md:text-[18px] font-medium leading-[24px] border-b-[2px] border-black"
              />
              {!dirtyFields.CONFIRM_PASSWORD && (
                <div className="absolute left-0 pointer-events-none flex justify-center items-start">
                  <p className="text-whiteSmoke800 font-medium">
                    Confirm password <span className="text-red-600">*</span>{" "}
                  </p>
                </div>
              )}
            </div>

            {errors.CONFIRM_PASSWORD && (
              <p className="mt-[10px] text-red-500 text-[12px] md:text-[18px] font-medium leading-[24px]">{`${errors.CONFIRM_PASSWORD.message}`}</p>
            )}
          </div>
          <div className="w-full flex justify-center items-center">
            <button
              type="submit"
              className="w-full flex justify-center items-center gap-5 bg-black500 rounded-[10px] p-[10px]"
            >
              {isLoading && <Spinner size={"md"} color="white" />}
              <p className="text-white text-[18px] font-medium leading-[28px]">
                Simpan
              </p>
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default MainSection;
