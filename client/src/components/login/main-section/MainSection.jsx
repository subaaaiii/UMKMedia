import React, { useEffect, useRef, useState } from "react";
import { HiEye, HiEyeOff } from "react-icons/hi";
import ButtonBlack500 from "../../global-component/button/button-black500/ButtonBlack500";
import { images } from "../../../constants";
import { useForm } from "react-hook-form";
import { LuLoader2 } from "react-icons/lu";
import { api } from "../../../api/api";

import { zodResolver } from "@hookform/resolvers/zod";
import { signInSchema } from "./lib/signinSchema";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signInWithPopup,
  signOut,
} from "firebase/auth";

import { auth, googleAuthProvider } from "../../../lib/firebase/firebase";
import { useDispatch } from "react-redux";
import {
  setToken,
  setUser,
} from "../../../lib/redux-toolkit/feature/user/userSlice";
import { Link } from "react-router-dom";
import Swal from "sweetalert2";
import { FaRegEye, FaRegEyeSlash } from "react-icons/fa";

function MainSection() {
  const dispatch = useDispatch();

  const [googleButton, setGoogleButton] = useState(false);
  const [showBaru, setShowBaru] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting, dirtyFields },
    reset,
  } = useForm({
    resolver: zodResolver(signInSchema),
    defaultValues: {
      PASSWORD: "",
    },
  });

  const [isHide, setIsHide] = useState(true);
  const timeoutRef = useRef(null);
  const onSubmit = async (data) => {
    try {
      const response = await api.post(
        `${process.env.REACT_APP_API_BASE_URL}/auth/login`,
        {
          email: data.EMAIL,
          password: data.PASSWORD,
        }
      );
      console.log(response);
      dispatch(setToken(response.data.token));
      dispatch(setUser(response.data.user));
      localStorage.setItem("auth", JSON.stringify(response.data.token));
      localStorage.setItem(
        "verified",
        JSON.stringify(response.data.user.verified)
      );
      reset();
    } catch (error) {
      console.log(error);
      Swal.fire({
        title: "Login failed!",
        text: " Ada yang salah, coba lagi!",
        icon: "error",
        confirmButtonColor: "#0F1011",
      });
    }
  };

  const loginWithFirebse = async () => {
    setGoogleButton(true);
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
    }

    timeoutRef.current = setTimeout(async () => {
      try {
        const responsFirebase = await signInWithPopup(auth, googleAuthProvider);
        console.log(responsFirebase);
        const response = await api.post(
          `${process.env.REACT_APP_API_BASE_URL}/auth/login`,
          {
            email: responsFirebase.user.email,
            uid_firebase: responsFirebase.user.uid,
            display_name: responsFirebase.user.displayName,
            // password: data.PASSWORD,
          }
        );
        console.log(response);

        localStorage.setItem("auth", JSON.stringify(response.data.token));
        localStorage.setItem(
          "verified",
          JSON.stringify(response.data.data.verified)
        );
        dispatch(setToken(response.data.token));
        dispatch(setUser(response.data.data));
      } catch (error) {
        console.log(error);
      } finally {
        setGoogleButton(false);
      }
    }, 2000);
  };
  const logOut = () => {
    localStorage.removeItem("auth");
    signOut(auth);
    // setDataUser(null);
    // dispatch(setUser(null));
    // dispatch(setToken(null));
    // setTOggleProfile(false);
  };

  return (
    <div className="flex flex-col justify-center items-center w-full  2xl:max-w-[1080px]">
      <h1 className="text-[32px] text-center font-medium leading-[72px] mt-[109px]">
        Masuk Akun
      </h1>
      <div className="w-full flex flex-col justify-center items-center mt-[70px]">
        <form
          onSubmit={handleSubmit(onSubmit)}
          className="flex flex-col gap-[52px] w-[208px] md:w-[538px] "
        >
          <div>
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
          <div className="gap-[20px] flex flex-col ">
            <div className="relative w-full  flex items-center">
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
                id="passwordbaru"
                type={showBaru ? "text" : "password"}
                className="outline-none w-full h-[50px] bg-transparent text-[12px] md:text-[18px] font-medium leading-[24px] border-b-[2px] border-black"
              />
              {!dirtyFields.PASSWORD && (
                <div className="absolute left-0 pointer-events-none flex justify-center items-start">
                  <p className="text-whiteSmoke800 font-medium">
                    Password <span className="text-red-600">*</span>{" "}
                  </p>
                </div>
              )}
            </div>

            <div
              className={`w-full flex ${
                errors.PASSWORD ? "justify-between" : "justify-end"
              }   items-start mt-[10px] gap-5`}
            >
              {errors.PASSWORD && (
                <p className="text-red-500 text-[12px] md:text-[18px] font-medium leading-[24px]">{`${errors.PASSWORD.message}`}</p>
              )}
              <Link
                to={"/request-reset"}
                className="text-[12px] shrink-0 md:text-[18px] font-medium leading-[24px] underline text-indigoDye500"
              >
                Lupa Password?
              </Link>
            </div>
          </div>

          {/* <div className="relative">
            <input
              {...register("PASSWORD")}
              type="password"
              placeholder="Password"
              className="outline-none w-full h-[50px] bg-transparent text-[12px] md:text-[18px] font-medium leading-[24px] border-b-[2px] border-black"
            />
            <button
              onClick={() => setIsHide((prev) => !prev)}
              type="button"
              className="absolute right-2 h-[50px]  "
            ></button>
            <div
              className={`w-full flex ${
                errors.PASSWORD ? "justify-between" : "justify-end"
              }   items-start mt-[10px] gap-5`}
            >
              {errors.PASSWORD && (
                <p className="text-red-500 text-[12px] md:text-[18px] font-medium leading-[24px]">{`${errors.PASSWORD.message}`}</p>
              )}
              <Link
                to={"/request-reset"}
                className="text-[12px] shrink-0 md:text-[18px] font-medium leading-[24px] underline text-indigoDye500"
              >
                Lupa Password?
              </Link>
            </div>
          </div> */}

          <div className={`flex justify-center items-center mt-[46px]`}>
            <button
              disabled={isSubmitting ? true : false}
              type="submit"
              className={` flex  mx-[5px] sm:mx-0 w-full px-[64px] py-[16px] justify-center items-center bg-black500 disabled:bg-whiteSmoke600 hover:bg-whiteSmoke800 rounded-[10px]`}
            >
              <p className="text-whiteSmoke500 shrink-0 font-medium text-[16px] leading-[24px]">
                Masuk
              </p>
            </button>
            {/* <button
              className={`${
                isSubmitting ? "flex" : "hidden"
              } flex  mx-[5px] sm:mx-0 w-[160px] px-[64px] py-[16px] justify-center items-center bg-black500 hover:bg-whiteSmoke800 rounded-[10px]`}
            >
              <LuLoader2 className="animate-spin text-white" />
            </button> */}
          </div>

          {/* <ButtonBlack500 TEXT_BUTTON={"Masuk"} WIDTH={"w-[160px]"} /> */}
        </form>

        <div className=" flex justify-center items-center gap-[8px] w-full mt-[48px]">
          <img
            src={images.lineWhiteSmoke}
            alt="line"
            className="w-[47px] md:w-[179px]"
          />
          <p className="w-[108px] md:w-[161px] text-[12px] md:text-[18px] font-medium leading-[24px] shrink-0">
            Atau masuk dengan
          </p>
          <img
            src={images.lineWhiteSmoke}
            alt="line"
            className="w-[47px] md:w-[179px]"
          />
        </div>

        <div className="w-[208px] md:w-[538px] mb-[414px]">
          <button
            disabled={googleButton}
            onClick={loginWithFirebse}
            className=" flex justify-center items-center h-[64px] w-full bg-whiteSmoke500 border-2 border-black400 border-opacity-50 rounded-[10px] mt-[48px] gap-[10px] disabled:opacity-50"
          >
            <img
              src={images.googleIcon}
              alt="google"
              className="w-[32px] h-[32px] object-cover"
            />
            <p className="text-[16px] font-medium leading-[24px]">Google</p>
          </button>

          <Link
            to={"/register"}
            className="w-full flex justify-center items-center mt-[60px]"
          >
            <p className="text-[12px] md:text-[18px] font-medium leading-[24px]">
              Belum punya akun?{" "}
              <span className="text-indigoDye500 cursor-pointer ">Daftar</span>
            </p>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default MainSection;
