import React, { useRef, useState } from "react";
import { images } from "../../../constants";
import ButtonBlack500 from "../../global-component/button/button-black500/ButtonBlack500";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { signUpSchema } from "./lib/signupSchema";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signInWithPopup,
  signInWithRedirect,
  updatePassword,
} from "firebase/auth";
import { auth, googleAuthProvider } from "../../../lib/firebase/firebase";
import { useDispatch } from "react-redux";
import {
  setToken,
  setUser,
} from "../../../lib/redux-toolkit/feature/user/userSlice";
import { api } from "../../../api/api";
import Swal from "sweetalert2";
import { FaRegEye, FaRegEyeSlash } from "react-icons/fa";
import { Spinner } from "@chakra-ui/react";

function MainSection() {
  const dispatch = useDispatch();
  const timeoutRef = useRef();
  const [showBaru, setShowBaru] = useState(false);
  const [showConfirm, setShowConfirm] = useState(false);

  const [googleButton, setGoogleButton] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting, dirtyFields },
    reset,
  } = useForm({
    resolver: zodResolver(signUpSchema),
    defaultValues: {
      PASSWORD: "",
      CONFIRM_PASSWORD: "",
    },
  });
  // const password = watch("PASSWORD");
  // const confirmPassword = watch("CONFIRM_PASSWORD");

  const [isHide, setIsHide] = useState(true);

  const loginWithFirebse = async () => {
    setGoogleButton(true);
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
    }

    timeoutRef.current = setTimeout(async () => {
      try {
        const responsFirebase = await signInWithPopup(auth, googleAuthProvider);
        const coba = await updatePassword();
        const response = await api.post(
          `${process.env.REACT_APP_API_BASE_URL}/auth/login`,
          {
            email: responsFirebase.user.email,
            uid_firebase: responsFirebase.user.uid,
            display_name: responsFirebase.user.displayName,
            // password: data.PASSWORD,
          }
        );
        dispatch(setToken(response.data.token));
        localStorage.setItem("auth", JSON.stringify(response.data.token));
        localStorage.setItem(
          "verified",
          JSON.stringify(response.data.data.verified)
        );
        console.log(response);
      } catch (error) {
        console.log(error);
      } finally {
        setGoogleButton(false);
      }
    }, 2000);
  };

  const onSubmit = async (data) => {
    setGoogleButton(true);

    // console.log({ responsFirebase });
    try {
      console.log({ data });
      const response = await api.post(
        `${process.env.REACT_APP_API_BASE_URL}/auth/register`,
        {
          nama_lengkap: data.NAMA_LENGKAP,
          username: data.USERNAME,
          no_hp: data.HANDPHONE,
          email: data.EMAIL,
          password: data.PASSWORD,
          konfirm_password: data.CONFIRM_PASSWORD,
        }
      );
      console.log(response);

      if (response) {
        dispatch(setToken(response.data.data.jwt));
        dispatch(setUser(response.data.data.newUser));
        localStorage.setItem("auth", JSON.stringify(response.data.data.jwt));
        localStorage.setItem(
          "verified",
          JSON.stringify(response.data.data.newUser.verified)
        );
      }

      // reset();
    } catch (error) {
      console.log(error);
      Swal.fire({
        title: "Register failed!",
        text: "Mungkin email anda telah terdaftar! atau Ada yang salah, coba lagi!",
        icon: "error",
        confirmButtonColor: "#0F1011",
      });
    } finally {
      setGoogleButton(false);
    }
  };
  return (
    <div className="flex flex-col justify-center items-center w-full  2xl:max-w-[1080px]">
      <h1 className="text-[32px] text-center font-medium leading-[72px] mt-[109px]">
        Daftar Akun
      </h1>
      <div className="w-full flex flex-col justify-center items-center mt-[70px]">
        <form
          onSubmit={handleSubmit(onSubmit)}
          className="flex flex-col gap-[52px] w-[208px] md:w-[538px] "
        >
          <div className="w-full">
            <input
              autoFocus
              {...register("NAMA_LENGKAP")}
              type="text"
              placeholder="Nama Lengkap"
              className="outline-none w-full h-[50px] bg-transparent text-[12px] md:text-[18px] font-medium leading-[24px] border-b-[2px] border-black"
            />
            {errors.NAMA_LENGKAP && (
              <p className="mt-[10px] text-red-500 text-[12px] md:text-[18px] font-medium leading-[24px]">{`${errors.NAMA_LENGKAP.message}`}</p>
            )}
          </div>
          <div className="w-full">
            <input
              {...register("USERNAME")}
              type="text"
              placeholder="Username"
              className="outline-none w-full h-[50px]  bg-transparent text-[12px] md:text-[18px] font-medium leading-[24px] border-b-[2px] border-black"
            />
            {errors.USERNAME && (
              <p className="mt-[10px] text-red-500 text-[12px] md:text-[18px] font-medium leading-[24px]">{`${errors.USERNAME.message}`}</p>
            )}
          </div>
          <div className="w-full">
            <div className="w-full flex items-center gap-[25px] text-[12px] md:text-[18px] font-medium leading-[24px] border-b-[2px] border-black">
              <div className="w-[42px] h-[40px]  flex justify-center items-center bg-whiteSmoke600 rounded-[10px]">
                <p className="text-[16px] font-medium leading-[24px] ">+62</p>
              </div>
              <input
                {...register("HANDPHONE")}
                type="number"
                placeholder="No. handphone"
                className="outline-none w-full h-[50px] bg-transparent "
              />
            </div>
            {errors.HANDPHONE && (
              <p className="mt-[10px] text-red-500 text-[12px] md:text-[18px] font-medium leading-[24px]">{`${errors.HANDPHONE.message}`}</p>
            )}
          </div>
          <div className="w-full">
            <input
              {...register("EMAIL")}
              placeholder="Email"
              className="outline-none w-full h-[50px] bg-transparent text-[12px] md:text-[18px] font-medium leading-[24px] border-b-[2px] border-black"
            />
            {errors.EMAIL && (
              <p className="mt-[10px] text-red-500 text-[12px] md:text-[18px] font-medium leading-[24px]">{`${errors.EMAIL.message}`}</p>
            )}
          </div>

          <div className="gap-[20px] flex flex-col mb-[26px]">
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
                id="password"
                type={showBaru ? "text" : "password"}
                className=" outline-none w-full h-[50px] bg-transparent text-[12px] md:text-[18px] font-medium leading-[24px] border-b-[2px] border-black"
              />
              {!dirtyFields.PASSWORD && (
                <div className="absolute left-0 pointer-events-none flex justify-center items-start">
                  <p className="text-whiteSmoke800 font-medium">
                    Password <span className="text-red-600">*</span>{" "}
                  </p>
                </div>
              )}
            </div>

            {errors.PASSWORD && (
              <p className="text-red-500 text-[12px] md:text-[18px] font-medium leading-[24px]">{`${errors.PASSWORD.message}`}</p>
            )}
          </div>

          <div className="gap-[20px] flex flex-col mb-[26px]">
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
                id="confirmPassword"
                type={showConfirm ? "text" : "password"}
                className="outline-none w-full h-[50px] bg-transparent text-[12px] md:text-[18px] font-medium leading-[24px] border-b-[2px] border-black"
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
          {/* <div className="w-full">
            <div className="relative">
              <input
                {...register("CONFIRM_PASSWORD")}
                type="password"
                placeholder="Confirm Password"
                className="outline-none w-full h-[50px] bg-transparent text-[12px] md:text-[18px] font-medium leading-[24px] border-b-[2px] border-black"
              />
            </div>
            {errors.CONFIRM_PASSWORD && (
              <p className="mt-[10px] text-red-500 text-[12px] md:text-[18px] font-medium leading-[24px]">{`${errors.CONFIRM_PASSWORD.message}`}</p>
            )}
          </div> */}

          <div className="w-full  flex justify-center items-center">
            <button
              disabled={isSubmitting ? true : false}
              type="submit"
              className={` flex gap-5  mx-[5px] sm:mx-0 w-full px-[64px] py-[16px] justify-center items-center bg-black500  hover:bg-whiteSmoke800 rounded-[10px]`}
            >
              {isSubmitting ? <Spinner size={"md"} color="white" /> : null}

              <p className="text-whiteSmoke500 shrink-0 font-medium text-[16px] leading-[24px]">
                Masuk
              </p>
            </button>
          </div>
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

        <div className="w-[208px] md:w-[538px] mb-[271px]">
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
        </div>
      </div>
    </div>
  );
}

export default MainSection;
