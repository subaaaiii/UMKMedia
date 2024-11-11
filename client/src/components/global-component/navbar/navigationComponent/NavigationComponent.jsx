import React from "react";
import { useNavigate } from "react-router-dom";

function NavigationComponent({
  DATA,
  BUTTON_TEXT,
  icon,
  isActive,
  setIsActive,
  toggle,
  setToggle,
  handleClick,
  handleChangeNavi,
  navi,
}) {
  const navigate = useNavigate();

  return (
    <>
      {DATA ? (
        <li
          className={`font-medium relative flex py-[4px] px-[8px] items-center cursor-pointer `}
        >
          <button
            onClick={() => {
              // setToggle((prev) => ({
              //   layanan: BUTTON_TEXT === "Layanan" ? !prev.layanan : false,
              //   komunitas:
              //     BUTTON_TEXT === "Komunitas" ? !prev.komunitas : false,
              // }));
              handleClick(BUTTON_TEXT);
              handleChangeNavi(BUTTON_TEXT);
              // setIsActive(BUTTON_TEXT);
            }}
            className={`${
              isActive === BUTTON_TEXT ? "font-bold" : "font-medium"
            } flex items-center gap-[4px]`}
          >
            <p className=" ">{BUTTON_TEXT}</p>

            {BUTTON_TEXT === "Layanan" ? (
              <img
                className={`${
                  toggle.layanan ? "-rotate-180" : "rotate-0"
                } w-[20px] h-[20px] duration-300`}
                src={icon.chevronSmallDownLight}
                alt="chev"
              />
            ) : BUTTON_TEXT === "Komunitas" ? (
              <img
                className={`${
                  toggle.komunitas ? "-rotate-180" : "rotate-0"
                } w-[20px] h-[20px] duration-300`}
                src={icon.chevronSmallDownLight}
                alt="chev"
              />
            ) : null}
          </button>
          {BUTTON_TEXT === "Layanan" ? (
            <div
              className={`${
                toggle.layanan
                  ? "opacity-100 pointer-events-auto"
                  : "opacity-0 pointer-events-none"
              } duration-300 absolute rounded-[10px] -left-[16px] top-[44px] shadow-customSm z-50`}
            >
              <div
                className={`${
                  toggle.layanan
                    ? " translate-y-0  pointer-events-auto "
                    : "-translate-y-full  pointer-events-none "
                }  relative duration-300 w-[268px] overflow-hidden rounded-[10px] `}
              >
                <div
                  className={`${
                    toggle.layanan ? "translate-y-0" : "translate-y-full"
                  } relative duration-300 bg-whiteSmoke500 py-[16px]  flex-col   `}
                >
                  {DATA.map((el, index) => (
                    <div
                      onClick={() => {
                        if (el.navi !== "#") {
                          navigate(el.navi);
                          setToggle(() => ({
                            layanan: false,
                            komunitas: false,
                          }));
                        }
                      }}
                      key={index}
                      className={`${
                        el.navi === "#"
                          ? "text-whiteSmoke600 "
                          : "cursor-pointer hover:bg-black50"
                      }  px-[24px] py-[12px] items-center `}
                    >
                      <p className="shrink-0  ">{el.title}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ) : BUTTON_TEXT === "Komunitas" ? (
            <div
              className={`${
                toggle.komunitas
                  ? "opacity-100 pointer-events-auto"
                  : "opacity-0 pointer-events-none"
              } duration-300 absolute rounded-[10px] -left-[16px] top-[44px] shadow-customSm z-50`}
            >
              <div
                className={`${
                  toggle.komunitas
                    ? " translate-y-0  pointer-events-auto "
                    : "-translate-y-full  pointer-events-none "
                }  relative duration-300 w-[268px] overflow-hidden rounded-[10px] `}
              >
                <div
                  className={`${
                    toggle.komunitas ? "translate-y-0" : "translate-y-full"
                  } relative duration-300 bg-whiteSmoke500 py-[16px]  flex-col   `}
                >
                  {DATA.map((el, index) => (
                    <div
                      onClick={() => {
                        if (el.navi !== "#") {
                          navigate(el.navi);
                          setToggle(() => ({
                            layanan: false,
                            komunitas: false,
                          }));
                        }
                      }}
                      key={index}
                      // className={`cursor-pointer px-[24px] py-[12px] items-center hover:bg-black50`}
                      className={`${
                        el.navi === "#"
                          ? "text-whiteSmoke600 "
                          : "cursor-pointer hover:bg-black50"
                      }  px-[24px] py-[12px] items-center `}
                    >
                      <p className="shrink-0  ">{el.title}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ) : null}
        </li>
      ) : (
        <li
          onClick={() => {
            handleClick(BUTTON_TEXT);
            // setIsActive(BUTTON_TEXT);
            handleChangeNavi(BUTTON_TEXT);

            navigate(navi);
          }}
        >
          <button
            className={`${
              isActive === BUTTON_TEXT ? "font-bold" : "font-medium"
            } flex py-[4px] px-[8px] items-center cursor-pointer`}
          >
            <p className=" ">{BUTTON_TEXT}</p>
          </button>
        </li>
      )}
    </>
  );
}

export default NavigationComponent;
