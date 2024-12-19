import React, { useEffect, useMemo, useState } from "react";
import { icon, logo, data } from "../../../constants";
import { HiMenu } from "react-icons/hi";
import ButtonBlack500 from "../button/button-black500/ButtonBlack500";
import ButtonBorderWhitesmoke500 from "../button/button-borderwhitesmoke500/ButtonBorderWhitesmoke500";
import ButtonBorderBlack500 from "../button/button-borderblack500/ButtonBorderBlack500";
import NavigationComponent from "./navigationComponent/NavigationComponent";
import { api } from "../../../api/api";
import { signOut } from "firebase/auth";
import { auth } from "../../../lib/firebase/firebase";
import { useDispatch, useSelector } from "react-redux";
import Swal from "sweetalert2";

import {
  getVerified,
  setToken,
  setUser,
} from "../../../lib/redux-toolkit/feature/user/userSlice";
import { Link, NavLink, useNavigate } from "react-router-dom";

import ProfileDrawer from "./profile-drawer/ProfileDrawer";
import MenuDrawer from "./menu-drawer/MenuDrawer";

function Navbar() {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const { user } = useSelector((state) => state.userSlice);

  const [toggle, setToggle] = useState({
    layanan: false,
    komunitas: false,
  });

  const redirectToDashboard = () => {
    navigate("/");
  };

  const [dataUser, setDataUser] = useState(null);
  const [isActive, setIsActive] = useState("home");
  const [toggleProfile, setTOggleProfile] = useState(false);

  const { token, verified } = useSelector((state) => state.userSlice);
  const [dropMenu, setDropMenu] = useState("");

  const NavlinkStyles = ({ isActive }) => {
    return {
      fontWeight: isActive ? "bold" : "medium",
      backgroundColor: isActive ? "lightgrey" : "transparent",
      // color: isActive ? "#0F1011" : "#666",
    };
  };

  const handleClick = (title) => {
    if (title === "Layanan" || title === "Komunitas") {
      setToggle((prev) => ({
        layanan: title === "Layanan" ? !prev.layanan : false,
        komunitas: title === "Komunitas" ? !prev.komunitas : false,
      }));
    } else {
      setToggle(() => ({
        layanan: false,
        komunitas: false,
      }));
    }
  };

  const handleChangeNavi = (title) => {
    console.log({ title });
    const currentUrl = window.location.pathname;
    const firstPath = currentUrl.split("/")[1];

    if (isActive.toLowerCase() === title.toLowerCase()) {
      const getSameData = data.navigationData.filter(
        (el) =>
          firstPath.toLowerCase() === el.navi?.split("/")[1]?.toLowerCase()
      );
      if (getSameData.length > 0) setIsActive(getSameData[0]?.BUTTON_TEXT);
      else {
        const getSameDropData = data.navigationData
          .filter((el) => {
            const getDrop = el.data?.filter(
              (nav) =>
                firstPath.toLowerCase() ===
                nav.navi?.split("/")[1]?.toLowerCase()
            );
            return getDrop && getDrop.length > 0;
          })
          .map((item) => {
            return {
              BUTTON_TEXT: item.BUTTON_TEXT,
              data: item.data.filter(
                (subItem) =>
                  subItem.navi?.split("/")[1]?.toLowerCase() ===
                  firstPath.toLowerCase()
              ),
              navi: item.navi,
            };
          });

        if (getSameDropData.length > 0) {
          setIsActive(getSameDropData[0].BUTTON_TEXT);
          if (getSameDropData[0]?.data[0]?.title) {
            setDropMenu(getSameDropData[0].data[0].title);
          }
        } else {
          setIsActive("home");
          setDropMenu("");
        }
      }
    } else {
      const getSameData = data.navigationData.filter(
        (el) => title.toLowerCase() === el.BUTTON_TEXT?.toLowerCase() && el.data
      );
      if (getSameData.length > 0) setIsActive(title);

      setDropMenu("");
    }
  };
  useEffect(() => {
    console.log({ isActive });
  }, [isActive]);

  const locationChange = useMemo(() => {
    const currnetUrl = window.location.pathname;
    const firstPath = currnetUrl.split("/")[1];

    const getSameData = data.navigationData.filter(
      (el) => firstPath.toLowerCase() === el.navi?.split("/")[1]?.toLowerCase()
    );
    if (getSameData.length > 0) {
      setIsActive(getSameData[0].BUTTON_TEXT);
      setDropMenu("");
    } else {
      const getSameDropData = data.navigationData
        .filter((el) => {
          const getDrop = el.data?.filter(
            (nav) =>
              firstPath.toLowerCase() === nav.navi?.split("/")[1]?.toLowerCase()
          );
          return getDrop && getDrop.length > 0;
        })
        .map((item) => {
          return {
            BUTTON_TEXT: item.BUTTON_TEXT,
            data: item.data.filter(
              (subItem) =>
                subItem.navi?.split("/")[1]?.toLowerCase() ===
                firstPath.toLowerCase()
            ),
            navi: item.navi,
          };
        });
      console.log(getSameDropData || "");

      if (getSameDropData.length > 0) {
        setIsActive(getSameDropData[0].BUTTON_TEXT);
        if (getSameDropData[0]?.data[0]?.title) {
          setDropMenu(getSameDropData[0].data[0].title);
        }
      } else {
        setIsActive("home");
        setDropMenu("");
      }
    }
  }, [window.location.pathname]);

  useEffect(() => {
    console.log({ dropMenu });
  }, [dropMenu]);

  const getUserData = async (token) => {
    console.log({ token });
    try {
      console.log({
        path: `${process.env.REACT_APP_API_BASE_URL}/user/one-user`,
      });
      const response = await api.get(
        `${process.env.REACT_APP_API_BASE_URL}/user/one-user`,
        {
          headers: {
            Authorization: token,
            Accept: "application/json",
            "Content-Type": "application/json",
          },
        }
      );
      setDataUser(response.data.data);
      dispatch(setUser(response.data.data));
      dispatch(getVerified(response.data.data.verified));
      localStorage.setItem(
        "verified",
        JSON.stringify(response.data.data.verified)
      );

      console.log(response);
    } catch (error) {
      localStorage.removeItem("auth");
      dispatch(setUser(null));
      dispatch(setToken(null));
      signOut(auth);
      setDataUser(null);
      setTOggleProfile(false);

      console.log(error);
    }
  };

  const logOut = () => {
    localStorage.removeItem("auth");
    localStorage.removeItem("verified");
    signOut(auth);
    setDataUser(null);
    dispatch(setUser(null));
    dispatch(setToken(null));
    setTOggleProfile(false);
    redirectToDashboard();
    Swal.fire({
      position: "center",
      icon: "success",
      title: "Logout berhasil",
      showConfirmButton: false,
      timer: 1500,
    });
  };

  const setNavbarActive = useMemo(() => {
    const route = JSON.parse(sessionStorage.getItem("active"));
    if (route) {
      setIsActive(route);
    } else {
      const currentUrl = window.location.pathname;
      const firstPath = currentUrl.split("/");
      if (
        firstPath[1] !== "" &&
        firstPath[1] !== "login" &&
        firstPath[1] !== "register" &&
        firstPath[1] !== "profile" &&
        firstPath[1] !== "verifikasi" &&
        firstPath[1] !== "reset-password"
      ) {
        console.log(firstPath[1] !== "login");

        const getDataPath = data.navigationData.filter(
          (el) => `${el.navi && el.navi.split("/")[1]}` === firstPath[1]
        );
        if (getDataPath.length > 0) {
          setIsActive(getDataPath[0].BUTTON_TEXT);
          sessionStorage.setItem(
            "active",
            JSON.stringify(getDataPath[0].BUTTON_TEXT)
          );

          console.log({
            firstPath: firstPath[1],
            data: data.dataService,
            getDataPath,
          });
        }
      } else {
        sessionStorage.setItem("active", JSON.stringify("home"));
      }
    }
  }, []);

  useEffect(() => {}, [dataUser]);

  useEffect(() => {
    if (JSON.parse(localStorage.getItem("auth"))) {
      dispatch(setToken(JSON.parse(localStorage.getItem("auth"))));
      getUserData(JSON.parse(localStorage.getItem("auth")));
      console.log("jalan");
    } else {
      localStorage.removeItem("auth");
      setDataUser(null);
    }

    if (JSON.parse(localStorage.getItem("verified"))) {
      dispatch(getVerified(JSON.parse(localStorage.getItem("verified"))));
    } else {
      localStorage.removeItem("verified");
    }
    console.log({ token });
  }, [token, verified]);

  return (
    <div className=" flex  justify-center  w-full items-center h-[64px] lg:h-[120px]   drawer drawer-end">
      <div className=" flex px-[5px] xl:px-0 max-w-[1080px] w-[356px] sm:w-auto  flex-1 justify-between  items-center shrink-0 ">
        <img
          onClick={() => {
            handleClick("");
            handleChangeNavi("home");
            // setIsActive("");
            navigate("/");
          }}
          className=" w-[100px] h-[100px] shrink-0 cursor-pointer hidden lg:block"
          src={logo.growlabXl}
          alt="growlab"
        />
        <img
          onClick={() => {
            handleClick("");
            handleChangeNavi("home");
            navigate("/");
          }}
          className=" w-[44px] h-[44px] shrink-0 cursor-pointer block lg:hidden"
          src={logo.growlabXl}
          alt="growlab"
        />

        {/* start of desktop responsif */}
        <ul className="hidden lg:inline-flex items-start gap-[16px]">
          {data.navigationData.map((el, index) => (
            <NavigationComponent
              handleClick={handleClick}
              handleChangeNavi={handleChangeNavi}
              key={index}
              BUTTON_TEXT={el.BUTTON_TEXT}
              icon={icon}
              toggle={toggle}
              setToggle={setToggle}
              DATA={el.data}
              setIsActive={setIsActive}
              isActive={isActive}
              navi={el.navi}
            />
          ))}
        </ul>
        <div className="hidden lg:flex gap-[24px]">
          <a
            href="https://wa.me/6283839772172"
            target="_blank"
            rel="noreferrer"
          >
            <div>
              <ButtonBorderBlack500
                TEXT_BUTTON={"Hubungi Kami"}
                WIDTH={"w-[160px]"}
                RESPONSIF={"hidden xl:flex"}
              />
            </div>
          </a>
          {user ? (
            <div className="relative flex justify-end items-center ">
              <div
                onClick={() => setTOggleProfile((prev) => !prev)}
                className="cursor-pointer px-[22px] py-[16px] flex justify-center items-center gap-[10px] border-[1px] rounded-[10px] border-black500"
              >
                <div className="w-[23px] h-[23px] rounded-full overflow-hidden ">
                  <img
                    src={`${process.env.REACT_APP_SERVER_URL}images/user/${user.profile_picture}`}
                    alt="profile"
                    className="h-full w-full object-cover"
                  />
                </div>
                <div className="">
                  <h1 className="text-[16px] font-medium leading-[24px]  w-[70px] overflow-hidden overflow-ellipsis whitespace-nowrap">
                    {user.username}
                  </h1>
                </div>
              </div>

              <div
                className={`${
                  toggleProfile ? "block" : "hidden"
                } absolute z-50 translate-y-48  py-[12px] bg-whiteSmoke500 shadow-customSm rounded-[10px]`}
              >
                <ul className="w-[268px] gap-[4px] text-[16px] font-medium">
                  <li className="px-[24px] py-[12px] flex flex-col justify-center items-start ">
                    <h1 className="text-[14px] font-bold leading-[20px] ">
                      {user.nama_lengkap}
                    </h1>
                    <p className="text-[14px] font-light leading-[20px]">
                      {user.email}
                    </p>
                  </li>
                  <li className=" flex flex-col justify-center items-start cursor-pointer">
                    <NavLink
                      to={`/profile/${user.username}`}
                      onClick={() => setTOggleProfile(false)}
                      className={"w-full  px-[24px] py-[12px]"}
                      style={NavlinkStyles}
                    >
                      Profil Saya
                    </NavLink>
                  </li>
                  <li className=" flex flex-col justify-center items-start cursor-pointer ">
                    <NavLink
                      to={"/profile/dashboard"}
                      onClick={() => setTOggleProfile(false)}
                      className={"w-full px-[24px] py-[12px]"}
                      style={NavlinkStyles}
                    >
                      Dashboard
                    </NavLink>
                  </li>
                  <li className=" flex flex-col justify-center items-start cursor-pointer">
                    <NavLink
                      to={"/profile/transaksi"}
                      onClick={() => setTOggleProfile(false)}
                      className={"w-full px-[24px] py-[12px]"}
                      style={NavlinkStyles}
                    >
                      Transaksi
                    </NavLink>
                  </li>
                  <li
                    onClick={logOut}
                    className="px-[24px] py-[12px] flex flex-col justify-center items-start cursor-pointer"
                  >
                    Keluar
                  </li>
                </ul>
              </div>
            </div>
          ) : (
            <>
              <div onClick={() => navigate("/login")}>
                <ButtonBlack500
                  WIDTH={"w-[160px]"}
                  TEXT_BUTTON={"Login/Daftar"}
                />
              </div>
            </>
          )}
        </div>
        {/* end of desktop responsif */}

        <div className="flex lg:hidden justify-center items-center gap-3">
          {user ? (
            <ProfileDrawer
              logOut={logOut}
              setTOggleProfile={setTOggleProfile}
              user={user}
            />
          ) : (
            <div onClick={() => navigate("/login")}>
              <button
                className={`flex mx-[5px] sm:mx-0 w-[103px] px-[64px] py-[8px] justify-center items-center bg-black500 hover:bg-whiteSmoke800 rounded-[10px]`}
              >
                <p className="text-whiteSmoke500 shrink-0 font-medium text-[12px] leading-[24px]">
                  Login/Daftar
                </p>
              </button>
            </div>
          )}

          <MenuDrawer
            handleChangeNavi={handleChangeNavi}
            handleClick={handleClick}
            dropMenu={dropMenu}
            isActive={isActive}
          />
        </div>
      </div>
    </div>
  );
}

export default Navbar;
