import React, { useEffect, useState } from "react";
import { icon } from "../../../constants";
import { api } from "../../../api/api";

function MainSection() {
  const [linkedinLink, setLinkedinLink] = useState("");
  const [instaLink, setInstaLink] = useState("");
  const [facebookLink, setFacebookLink] = useState("");

  const getUserData = async () => {
    try {
      const token = JSON.parse(localStorage.getItem("auth"));
      const response = await api.get(
        `${process.env.REACT_APP_API_BASE_URL}/user/one-user`,
        {
          headers: {
            Accept: "application/json",
            "Content-Type": "application/json",
            Authorization: token,
          },
        }
      );

      if (
        response &&
        response.data &&
        response.data.data &&
        response.data.data.nama_lengkap &&
        response.data.data.email
      ) {
        const link = response.data.data.user_pribadi;
        setFacebookLink(link.link_fb);
        setInstaLink(link.link_ig);
        setLinkedinLink(link.link_linkedid);
        console.log(response);
        // dispatch(setUser(response.data.data));
        // const namaDepan =
        //   response.data.data.nama_depan ||
        //   response.data.data.nama_lengkap.split(" ")[0];
        // const namaBelakang =
        //   response.data.data.nama_belakang ||
        //   response.data.data.nama_lengkap.split(" ").slice(1).join(" ");

        // setValue("NAMA_DEPAN", namaDepan || "");
        // setValue("NAMA_BELAKANG", namaBelakang);
        // setValue("USERNAME", response.data.data.username || "");
        // setValue("EMAIL", response.data.data.email);
        // setValue("BIODATA", response.data.data.biografi || "");
        // console.log(response);
        // setUserImage(
        //   `${process.env.REACT_APP_SERVER_URL}images/user/${response.data.data.profile_picture}`
        // );
        // navigate(`/profile/${response.data.data.username}`);
      }
    } catch (error) {
      console.log(error);
    }
  };

  const submitLink = async () => {
    const token = JSON.parse(localStorage.getItem("auth"));
    try {
      const response = await api.put(
        `${process.env.REACT_APP_API_BASE_URL}/user/change-sosmed`,
        {
          insta: instaLink,
          facebook: facebookLink,
          linkedin: linkedinLink,
        },
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
    }
  };

  useEffect(() => {
    getUserData();
  }, []);

  return (
    <div className="w-full  ">
      <h1 className="hidden lg:block text-[32px] font-bold leading-[72px]">
        Informasi Lainnya
      </h1>

      <div className="mb-[45px]">
        <div className="text-[24px] text-black400 font-medium leading-[30px]">
          Media Sosial
        </div>
      </div>

      <div className="w-full flex flex-col gap-[15px] mb-[107px]">
        <div className="flex items-center gap-[20px]">
          <div className="w-[48px] h-[48px] flex items-center justify-center">
            <img
              src={icon.instaProfile}
              alt="insta"
              className="object-cover w-full h-full"
            />
          </div>
          <input
            value={instaLink}
            onChange={(e) => setInstaLink(e.target.value)}
            type="text"
            placeholder="https://"
            className="w-[374px] h-[57px] bg-whiteSmoke500 focus:outline-none rounded-[10px] border-[1px] border-black400 p-2"
          />
        </div>
        <div className="flex items-center gap-[20px]">
          <div className="w-[48px] h-[48px] flex items-center justify-center">
            <img
              src={icon.facebookProfile}
              alt="insta"
              className="object-cover w-full h-full"
            />
          </div>
          <input
            value={facebookLink}
            onChange={(e) => setFacebookLink(e.target.value)}
            type="text"
            placeholder="https://"
            className="w-[374px] h-[57px] bg-whiteSmoke500 focus:outline-none rounded-[10px] border-[1px] border-black400 p-2"
          />
        </div>
        <div className="flex items-center gap-[20px]">
          <div className="w-[48px] h-[48px] flex items-center justify-center">
            <img
              src={icon.linkedinProfile}
              alt="insta"
              className="object-cover w-full h-full"
            />
          </div>
          <input
            value={linkedinLink}
            onChange={(e) => setLinkedinLink(e.target.value)}
            type="text"
            placeholder="https://"
            className="w-[374px] h-[57px] bg-whiteSmoke500 focus:outline-none rounded-[10px] border-[1px] border-black400 p-2"
          />
        </div>
      </div>

      <div className="w-full flex justify-end items-center">
        <button
          onClick={() => submitLink()}
          //   disabled={isSubmitting ? true : false}
          className="p-[10px] w-[123px] flex justify-center bg-black500 rounded-[10px] gap-2"
        >
          {/* {isSubmitting ? <Spinner color="white" /> : null} */}
          <p className="text-[18px] text-center  font-medium leading-[28px] text-white shrink-0">
            Simpan
          </p>
        </button>
      </div>
    </div>
  );
}

export default MainSection;
