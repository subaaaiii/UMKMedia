import React, { useEffect, useState } from "react";
import { NavLink, Outlet, useNavigate, useLocation } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faHome,
  faBook,
  faHeart,
  faVideo,
  faWallet,
  faChevronDown,
  faChevronUp,
} from "@fortawesome/free-solid-svg-icons"; // Add other icons as needed
import { icon } from "../../../constants";
import { useSelector } from "react-redux";

export default function SidebarDetailprofile() {
  const { user } = useSelector((state) => state.userSlice);
  const navigate = useNavigate();
  const parentPath = useLocation().pathname;
  const [dropdownShow, setDropdownShow] = useState(false);
  const [toggle, setToggle] = useState(true);

  const NavlinkStyles = ({ isActive }) => {
    return {
      fontWeight: isActive ? "bold" : "normal",
      color: isActive ? "#0F1011" : "#666",
      backgroundColor: "#F4F4F4",
      boxShadow: isActive ? "3px 3px 7px rgba(128,128,128,0.3)" : "",
    };
  };
  const NavlinkStylesDisable = ({ isActive }) => {
    return {
      fontWeight: "normal",
      color: "#DEDEDE",
      backgroundColor: "#F4F4F4",
      boxShadow: "",
      opacity: 10,
    };
  };

  const menuEdit = [
    ["Detail Profil", `/profile/${user?.username || ""}`],
    ["Data Pribadi", null],
    ["Informasi Lainnya", "/profile/info-lain"],
    ["Ubah Password", "/profile/password"],
  ];

  const toggleDropDown = () => {
    setDropdownShow(!dropdownShow);
    if (dropdownShow) {
      setToggle(true);
    } else {
      setToggle(false);
    }
  };

  useEffect(() => {
    if (!user || !user.username) navigate("/");
  }, [user]);

  return (
    <div className="flex flex-col lg:flex-row justify-center items-center lg:items-start lg:justify-start lg:mt-[12px] lg:px-0  w-full  lg:min-h-screen">
      <div className="w-[411px] lg:flex hidden  flex-col items-start ">
        <h1 className="pl-[66px] ml-2 mb-[18px] text-[32px] font-bold leading-[72px]">
          Ubah Profil
        </h1>
        <div
          className="flex flex-col items-start pl-[66px] pr-[32px] w-full h-fit bg-white-200 border border-grey"
          style={{ boxShadow: "1px 1px 3px rgba(128, 128, 128, 0.3)" }}
        >
          <div className="flex flex-col lg:mt-[35px] font-bold gap-2 ">
            {menuEdit.map(([title, url]) => (
              <NavLink
                to={url}
                style={url ? NavlinkStyles : NavlinkStylesDisable}
                className="flex items-center w-[307px] h-[57px] ml-2 rounded-[10px] text-[#666666] hover:text-black500 hover:font-bold text-[24px]"
              >
                {title}
              </NavLink>
            ))}
          </div>
        </div>
      </div>

      {/* Dropdown Menu - Mobile */}
      <div className="relative inline-block lg:hidden text-left w-full h-[40px] sm:w-[500px] mb-[5px] mt-[12px]">
        <div>
          <button
            type="button"
            className="inline-flex justify-between items-center w-full h-[40px] sm:w-[500px] gap-x-1.5 bg-[#CCCCCC33] px-3 py-2 text-[14px] font-normal text-black500 leading-[30px] hover:bg-[#CCCCCC33]"
            onClick={toggleDropDown}
          >
            <div className="flex items-center">
              <p>
                {menuEdit.map(([title, url]) =>
                  url === parentPath ? title : ""
                )}
              </p>
            </div>
            <div className="flex items-center">
              <hr className="rotate-90 w-[16px] bg-[rgba(102,102,102,0.5)] border-1" />
              <FontAwesomeIcon
                icon={toggle === true ? faChevronDown : faChevronUp}
                className="w-[18px] h-[18px] text-slate-600"
              />
            </div>
          </button>
        </div>

        {dropdownShow ? (
          <div className="absolute z-20 mt-2 w-full sm:w-[500px] h-[200px] flex flex-col justify-between lg:mt-[35px] font-bold gap-2 bg-whiteSmoke500 origin-top-right rounded-[5px] ring-1 ring-black ring-opacity-5 focus:outline-none shadow-lg shadow-gray-300">
            {menuEdit.map(([title, url], index) => (
              <NavLink
                key={index}
                to={url}
                style={url ? NavlinkStyles : NavlinkStylesDisable}
                className="flex items-center w-full h-[40px] my-0 rounded-[5px] text-[#666666] text-[14px] px-[15px]"
                onClick={toggleDropDown}
              >
                {title}
              </NavLink>
            ))}
          </div>
        ) : null}
      </div>
      <div className=" w-full flex justify-center p-[10px] lg:p-0">
        <Outlet />
      </div>
    </div>
  );
}
