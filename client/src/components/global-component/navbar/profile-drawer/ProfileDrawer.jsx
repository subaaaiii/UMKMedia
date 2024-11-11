import React, { useEffect, useMemo, useState } from "react";
import { Link, NavLink, useNavigate } from "react-router-dom";
import { icon, logo, data } from "../../../../constants";
import {
  Accordion,
  AccordionButton,
  AccordionIcon,
  AccordionItem,
  AccordionPanel,
  Box,
  Button,
  Drawer,
  DrawerBody,
  DrawerCloseButton,
  DrawerContent,
  DrawerFooter,
  DrawerHeader,
  DrawerOverlay,
  Input,
  useDisclosure,
} from "@chakra-ui/react";

function ProfileDrawer({ user, setTOggleProfile, logOut }) {
  const [toggleMobile, setToggleMobile] = useState(false);
  const { isOpen, onOpen, onClose } = useDisclosure();
  const btnRef = React.useRef();

  const NavlinkStyles = ({ isActive }) => {
    return {
      fontWeight: isActive ? "bold" : "medium",
      backgroundColor: isActive ? "lightgrey" : "transparent",
      // color: isActive ? "#0F1011" : "#666",
    };
  };

  return (
    <>
      <div
        ref={btnRef}
        onClick={onOpen}
        className="w-[30px] h-[30px] rounded-full overflow-hidden "
      >
        <img
          src={`${process.env.REACT_APP_SERVER_URL}images/user/${user.profile_picture}`}
          alt="profile"
          className="h-full w-full object-cover"
        />
      </div>
      {/* start of mobile responsif */}
      <Drawer
        size={"xs"}
        isOpen={isOpen}
        placement="right"
        onClose={onClose}
        finalFocusRef={btnRef}
      >
        <DrawerOverlay
          display={{ base: "block", lg: "none" }}
          className="mt-[64px] "
        />
        <DrawerContent
          display={{ base: "block", lg: "none" }}
          className="mt-[64px] scrollbar-hide "
          paddingX={0}
        >
          <DrawerBody
            width={"100%"}
            paddingX={0}
            className="h-full  bg-whiteSmoke500"
          >
            <Accordion
              allowMultiple
              width={"100%"}
              alignItems={"baseline"}
              height={"100%"}
              paddingX={0}
              className="flex flex-col justify-between"
            >
              <ul className="w-full gap-[4px] text-[16px]  font-medium">
                <li className="px-[24px] py-[12px] flex flex-col justify-center items-start ">
                  <h1 className="text-[14px] font-bold leading-[20px]">
                    {user.nama_lengkap}
                  </h1>
                  <p className="text-[14px] font-light leading-[20px]">
                    {user.email}
                  </p>
                </li>
                <li className="  w-full flex flex-col justify-center items-start cursor-pointer">
                  <NavLink
                    to={`/profile/${user.username}`}
                    onClick={() => {
                      onClose();
                    }}
                    style={NavlinkStyles}
                    className="h-full w-full px-[24px] py-[12px] "
                  >
                    Profil Saya
                  </NavLink>
                </li>
                <li className="  flex flex-col justify-center items-start cursor-pointer ">
                  <NavLink
                    to={"/profile/dashboard"}
                    onClick={() => {
                      onClose();
                    }}
                    style={NavlinkStyles}
                    className="h-full w-full px-[24px] py-[12px]"
                  >
                    Dashboard
                  </NavLink>
                </li>
                <li className=" flex flex-col justify-center items-start cursor-pointer">
                  <NavLink
                    to={"/profile/transaksi"}
                    className="h-full w-full px-[24px] py-[12px]"
                    onClick={() => {
                      onClose();
                    }}
                    style={NavlinkStyles}
                  >
                    Transaksi
                  </NavLink>
                </li>
              </ul>
              <div className=" mb-[54px] left-0 flex justify-center   w-full">
                <button
                  onClick={() => {
                    logOut();
                    onClose();
                  }}
                  className="border-[1px] border-black500 py-[12px] flex flex-col justify-center items-center cursor-pointer w-[232px] rounded-[10px]"
                >
                  <p className="text-[16px] font-bold leading-[24px]">
                    {" "}
                    Keluar
                  </p>
                </button>
              </div>
            </Accordion>
          </DrawerBody>
        </DrawerContent>
      </Drawer>

      {/* end of mobile responsif */}
    </>
  );
}

export default ProfileDrawer;
