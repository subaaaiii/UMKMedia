import React, { useState, useEffect } from "react";
import { Outlet, NavLink, useLocation, useNavigate } from "react-router-dom";
import { icon } from "../../../constants";
import { faChevronDown, faChevronUp } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useSelector } from "react-redux";

export default function SidebarProfile() {
  const navigate = useNavigate();
  const parentPath = useLocation().pathname;
  const [dropdownShow, setDropdownShow] = useState(false);
  const [toggle, setToggle] = useState(true);
  const { user } = useSelector((state) => state.userSlice);
  const [useuser, setUser] = useState();

  const NavlinkStyles = ({ isActive }) => {
    return {
      fontWeight: isActive ? "bold" : "normal",
      color: isActive ? "#0F1011" : "#666666",
      backgroundColor: "#F4F4F4",
      boxShadow: isActive ? "3px 3px 7px rgba(128,128,128,0.3)" : "",
    };
  };

  const menuItems = [
    {
      title: "Dashboard",
      icon: icon.iconHome,
      activeIcon: icon.iconHome1,
      url: "/profile/dashboard",
    },
    {
      title: "Kelas Saya",
      icon: icon.iconCourse,
      activeIcon: icon.iconCourse1,
      url: "/profile/kelas-saya/",
    },
    {
      title: "Wishlist",
      icon: icon.iconWishlist,
      activeIcon: icon.iconWishlist1,
      url: "/profile/wishlist",
    },
    {
      title: "Event",
      icon: icon.iconEvent,
      activeIcon: icon.iconEvent1,
      url: "/profile/event",
    },
    {
      title: "Transaksi",
      icon: icon.iconTransaksi,
      activeIcon: icon.iconTransaksi1,
      url: "/profile/transaksi",
    },
  ];

  const toggleDropDown = () => {
    setDropdownShow(!dropdownShow);
    if (dropdownShow) {
      setToggle(true);
    } else {
      setToggle(false);
    }
  };

  const statusOption = menuItems.filter((items) =>
    parentPath.split("/")[2] === items.url.split("/")[2] ? items.title : ""
  );
  // console.log(user);
  // useEffect(() => {
  //   setUser(user.username);
  // }, [user, useuser]);

  // const [showNavBar, setShowNavBar] = useState(false);

  // useEffect(() => {
  //   const timer = setTimeout(() => {
  //     setShowNavBar(true);
  //     return user.username;
  //   }, 5000);
  //   return () => clearTimeout(timer);
  // }, []);

  return (
    <div className="flex flex-col lg:flex-row justify-center items-center lg:justify-start lg:items-start max-w-screen-2xl mt-[12px] lg:px-0 w-full lg:w-[100%] h-full lg:max-h-fit gap-[22px] flex-shrink-0 mb-[50px]">
      {/* Left Side - Menu Box */}
      <div
        className="hidden lg:flex flex-col items-center w-[395px] min-h-[1000px] bg-white-200 border border-grey"
        style={{ boxShadow: "1px 1px 3px rgba(128, 128, 128, 0.3)" }}
      >
        <img
          onClick={() => navigate("/profile/coba")}
          src={icon.iconEdit}
          alt="Career Momen 1"
          className="object-cover w-[40px] h-[40px] ml-[180px] mt-[60px] cursor-pointer"
          style={{ borderRadius: "10px" }}
        />
        <img
          src={
            `${process.env.REACT_APP_SERVER_URL}images/user/${user?.profile_picture}` ||
            "No Data"
          }
          alt="Career Momen 1"
          className="object-cover w-[178px] h-[178px] rounded-[100px]"
        />
        <h1 className="font-medium mt-3 text-[32px]">
          {user?.username || "No Data"}
        </h1>
        <div className="flex flex-col lg:mt-[35px] font-bold gap-2 ">
          {menuItems.map(({ title, icon, activeIcon, url }, index) => (
            <NavLink
              key={index}
              to={url}
              style={NavlinkStyles}
              className="flex items-center w-[307px] h-[57px] ml-2 rounded-[5px] text-[#666666] hover:text-black500 hover:font-bold text-[24px]"
            >
              {({ isActive }) => {
                return (
                  <>
                    <img
                      src={isActive ? activeIcon : icon}
                      alt={title}
                      className="mr-5 ml-5"
                    />
                    {title}
                  </>
                );
              }}
            </NavLink>
          ))}
        </div>
      </div>

      {/* Dropdown Menu - Mobile */}
      <div className="relative inline-block lg:hidden text-left w-full h-[40px] sm:w-[500px] mb-[5px]">
        <div>
          <button
            type="button"
            className="inline-flex justify-between items-center w-full h-[40px] sm:w-[500px] gap-x-1.5 bg-[#CCCCCC33] px-3 py-2 text-[14px] font-normal text-black500 leading-[30px] hover:bg-[#CCCCCC33]"
            onClick={toggleDropDown}
          >
            {parentPath === "/profile/" || parentPath === "/profile" ? (
              <div className="flex items-center">
                <img
                  src={menuItems[0].activeIcon}
                  alt={menuItems[0].title}
                  className="mr-5 ml-2 w-[18px] h-[18px]"
                />
                <p>{menuItems[0].title}</p>
              </div>
            ) : (
              <div className="flex items-center">
                <img
                  src={statusOption[0].activeIcon}
                  alt={statusOption[0].title}
                  className="mr-5 ml-2 w-[18px] h-[18px]"
                />
                <p>{statusOption[0].title}</p>
              </div>
            )}
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
            {menuItems.map(({ title, icon, activeIcon, url }, index) => (
              <NavLink
                key={index}
                to={url}
                style={NavlinkStyles}
                className="flex items-center w-full h-[40px] my-0 rounded-[5px] text-[#666666] text-[14px]"
                onClick={toggleDropDown}
              >
                {({ isActive }) => {
                  return (
                    <>
                      <img
                        src={isActive ? activeIcon : icon}
                        alt={title}
                        className="mr-5 ml-5 w-[18px] h-[18px]"
                      />
                      {title}
                    </>
                  );
                }}
              </NavLink>
            ))}
          </div>
        ) : null}
      </div>

      <Outlet />
    </div>
  );
}
