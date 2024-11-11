import React, { useEffect, useMemo, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
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

function MenuDrawer({ isActive, dropMenu, handleClick, handleChangeNavi }) {
  const [toggleMobile, setToggleMobile] = useState(false);
  const { isOpen, onOpen, onClose } = useDisclosure();
  const btnRef = React.useRef();

  return (
    <div className="block lg:hidden">
      <button
        ref={btnRef}
        onClick={onOpen}
        className=" flex  p-[4px]  justify-center items-center  bg-whiteSmoke500"
      >
        <img src={icon.line3solid} alt="line3" />
      </button>
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
          className="mt-[64px] "
        >
          <DrawerBody
            width={"100%"}
            paddingX={0}
            overflowY={"scroll"}
            paddingBottom={"20px"}
            height={"100%"}
            className="scrollbar-hide bg-whiteSmoke500"
          >
            <Accordion allowMultiple width={"100%"}>
              {data.navigationData.map((el, index) => {
                return (
                  <>
                    {el.data ? (
                      <AccordionItem key={index} border={"none"} width={"100%"}>
                        <h2>
                          <AccordionButton
                            width={"100%"}
                            _focus={{ backgroundColor: "transparent" }}
                          >
                            <Box
                              as="span"
                              flex="1"
                              textAlign="left"
                              fontWeight={"medium"}
                              onClick={() => {
                                // handleClick(el.BUTTON_TEXT);
                                // handleChangeNavi(el.BUTTON_TEXT);
                              }}
                            >
                              {el.BUTTON_TEXT}
                            </Box>
                            <AccordionIcon />
                          </AccordionButton>
                        </h2>
                        <AccordionPanel pb={4} width={"100%"} px={0}>
                          <ul className="w-full ">
                            {el.data.map((but) => {
                              return (
                                <li className="w-full">
                                  <Link
                                    to={but.navi}
                                    onClick={() => {
                                      handleClick(el.BUTTON_TEXT);
                                      handleChangeNavi(el.BUTTON_TEXT);
                                      onClose();
                                    }}
                                    className={`${
                                      dropMenu === but.title
                                        ? "font-bold bg-black400 bg-opacity-10"
                                        : "font-medium"
                                    } py-[12px] px-[32px] w-full  flex justify-start`}
                                  >
                                    <p>{but.title}</p>
                                  </Link>
                                </li>
                              );
                            })}
                          </ul>
                        </AccordionPanel>
                      </AccordionItem>
                    ) : (
                      <div
                        key={index}
                        className={`${
                          isActive === el.BUTTON_TEXT
                            ? "font-bold bg-black400 bg-opacity-10"
                            : "font-medium "
                        } px-[20px] w-full h-full  py-[12px]`}
                      >
                        <Link
                          to={el.navi}
                          onClick={() => {
                            handleClick(el.BUTTON_TEXT);
                            // setIsActive(BUTTON_TEXT);
                            handleChangeNavi(el.BUTTON_TEXT);
                            onClose();
                          }}
                        >
                          {el.BUTTON_TEXT}
                        </Link>
                      </div>
                    )}
                  </>
                );
              })}
            </Accordion>
            {/* {listItems} */}
          </DrawerBody>
        </DrawerContent>
      </Drawer>

      {/* end of mobile responsif */}
    </div>
  );
}

export default MenuDrawer;
