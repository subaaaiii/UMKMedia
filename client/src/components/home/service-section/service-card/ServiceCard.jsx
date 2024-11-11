import React from "react";

function ServiceCard({ setOnHover, service, onHover }) {
  return (
    <>
      <div
        onMouseEnter={() => setOnHover(service.title)}
        onMouseLeave={() => setOnHover("")}
        className="relative max-w-[358px] sm:w-[358px] lg:w-[344px] h-[268px] lg:h-[516px] shrink-0 rounded-[10px] overflow-hidden cursor-pointer"
      >
        <div
          className={`${
            onHover === service.title
              ? "bg-black bg-opacity-50"
              : "bg-black bg-opacity-0"
          } absolute top-0 left-0 w-full h-[268px] lg:h-full rounded-[10px] z-20`}
        ></div>
        <img
          src={service.pic}
          alt="service"
          className={` relative h-full w-full object-cover rounded-[10px]`}
        />
        <div className="absolute bottom-0  w-[358px] lg:w-[344px] h-[136px] rounded-b-[10px] z-30 overflow-hidden">
          <div
            className={`${
              onHover === service.title ? "translate-y-0" : "translate-y-[64px]"
            } absolute   w-full bg-black400 p-[20px]   duration-300 z-40`}
          >
            <p className="text-[22px] font-medium leading-[32px] mb-[16px] text-whiteSmoke500">
              {service.title}
            </p>

            <p
              className={`${
                onHover === service.title ? "opacity-100" : "opacity-0"
              } text-[16px] font-light leading-[24px] text-whiteSmoke600`}
            >
              {service.deskripsi}
            </p>
          </div>
        </div>
      </div>
    </>
  );
}

export default ServiceCard;
