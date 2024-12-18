import React from "react";

function ServiceCard({ setOnHover, service, onHover }) {
  console.log("aaaaaa", service)
  return (
    <div
      onMouseEnter={() => setOnHover(service.title)}
      onMouseLeave={() => setOnHover("")}
      className="relative w-full max-w-[220px] h-auto bg-white rounded-[15px] overflow-hidden shadow-lg cursor-pointer transition-all duration-300 border-white border-8 hover:scale-105 mb-7 lg:mx-0 md:mx-2 sm:mx-8"
    >
      <div
        className={`w-full h-[220px] overflow-hidden rounded-t-[15px] rounded-bl-[15px] rounded-br-[120px] bg-cover bg-center transition-all duration-300 ${
          onHover === service.title ? "scale-110" : "scale-100"
        }`}
        style={{ backgroundImage: `url(${service.pic})` }}
      ></div>

      <div className="p-4 flex flex-col items-center justify-center">
        <h3 className="flex items-center justify-center text-[22px] h-[100px] font-semibold text-black text-center leading-[26px]">
          {service.title}
        </h3>
        <p className="flex items-center text-[14px] h-[80px] font-light text-gray-600 mb-4 text-center">
          {service.deskripsi}
        </p>
      </div>

      <div className="m-4 p-3 items-center justify-center flex bg-blue-400 rounded-3xl">
        <a
          href={service.navi}
          className="text-[14px] font-medium text-white transition-colors"
        >
          Learn More
        </a>
      </div>
    </div>
  );
}

export default ServiceCard;
