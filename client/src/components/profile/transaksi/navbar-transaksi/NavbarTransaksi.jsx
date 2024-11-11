import React, { useState } from "react";
import { Outlet, NavLink, useLocation } from "react-router-dom";
import { faChevronDown, faChevronUp } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function NavbarTransaksi() {
  const parentPath = useLocation().pathname;
  const [dropdownShow, setDropdownShow] = useState(false);
  const [toggle, setToggle] = useState(true);
  const statusTransaksi = [
    ["Semua Transaksi", "/profile/transaksi/semua-transaksi"],
    ["Berhasil", "/profile/transaksi/transaksi-berhasil"],
    ["Menunggu", "/profile/transaksi/transaksi-menunggu"],
    ["Dibatalkan", "/profile/transaksi/transaksi-dibatalkan"],
  ];

  const toggleDropDown = () => {
    setDropdownShow(!dropdownShow);
    if (dropdownShow) {
      setToggle(true);
    } else {
      setToggle(false);
    }
  };

  const statusOption = statusTransaksi.filter((items) =>
    parentPath === items[1] ? items[0] : ""
  );

  return (
    <div className="flex flex-col">
      <div className="flex-initial">
        {/* lg:Submenu */}
        <nav className="hidden lg:flex gap-[27px] mb-[54px]">
        {statusTransaksi.map(([title, url]) => (
          <NavLink
            to={url}
            className={({ isActive }) =>
              (isActive
                ? "font-medium items-center justify-center flex flex-col text-[24px]"
                : "font-normal text-[24px]")
            }
            key={title}
          >
            {({ isActive }) => {
              return (
                <>
                  {title}
                  {isActive ? (
                    <hr className="w-[39px] h-[5px] bg-black500 border-3 rounded-[50px] mt-[3px]"></hr>
                  ) : (
                    ""
                  )}
                </>
              );
            }}
          </NavLink>
        ))}
      </nav>

        {/* mobile:Submenu */}
        <div className="relative inline-block lg:hidden text-left w-[358px] h-[36px] md:w-[500px] mb-[54px]">
          <div>
            <button
              type="button"
              className="inline-flex justify-between items-center w-[358px] h-[36px] gap-x-1.5 rounded-[5px] bg-white px-3 py-2 text-[12px] font-normal text-black500 leading-[30px] shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50"
              id="menu-button"
              onClick={toggleDropDown}
            >
              <p>
                {parentPath === "/profile/transaksi/" ||
                parentPath === "/profile/transaksi"
                  ? "Semua Transaksi"
                  : statusOption[0][0]}
              </p>
              <div className="flex items-center">
                <hr className="rotate-90 w-[16px] bg-[rgba(102,102,102,0.5)] border-[1px]" />
                <FontAwesomeIcon
                  icon={toggle === true ? faChevronDown : faChevronUp}
                  className="w-[18px] h-[18px] text-slate-600"
                />
              </div>
            </button>
          </div>

          {dropdownShow ? (
            <div className="absolute right-0 z-10 mt-2 w-[358px] md:w-[500px] origin-top-right rounded-[5px] bg-white ring-1 ring-black ring-opacity-5 focus:outline-none shadow-lg shadow-gray-300">
              {statusTransaksi.map(([title, url]) => (
                <NavLink
                  to={url}
                  className={({ isActive }) =>
                    isActive
                      ? "text-black500 text-[12px] leading-[30px] block px-4 py-2 font-normal border-[1px] rounded-[5px] border-whiteSmoke600 shadow-lg shadow-gray-300"
                      : "text-whiteSmoke800 text-[12px] leading-[30px] block px-4 py-2"
                  }
                  onClick={toggleDropDown}
                  key={title}
                >
                  {title}
                </NavLink>
              ))}
            </div>
          ) : null}
        </div>

        <Outlet />
      </div>
    </div>
  );
}
