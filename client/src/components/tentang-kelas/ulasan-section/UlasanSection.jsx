import React from "react";
import { images } from "../../../constants";

function UlasanSection({ ulasan }) {
  const tmpUlasan = [
    {
      pic: images.avatar2,
      nama: "nama",
      tanggal: new Date("2024-01-02"),
      message:
        "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Distinctio vel unde porro quo dolorum nostrum repudiandae. Totam accusantium ea maiores magnam dolorum enim pariatur praesentium, asperiores dolores at incidunt, fugit rem ad molestiae facere neque numquam officia voluptate officiis odio sunt delectus. Sapiente, porro soluta tempore deleniti voluptates magnam blanditiis.",
    },
    {
      pic: images.avatar2,
      nama: "nama",
      tanggal: new Date(),
      message:
        "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Distinctio vel unde porro quo dolorum nostrum repudiandae. Totam accusantium ea maiores magnam dolorum enim pariatur praesentium, asperiores dolores at incidunt, fugit rem ad molestiae facere neque numquam officia voluptate officiis odio sunt delectus. Sapiente, porro soluta tempore deleniti voluptates magnam blanditiis.",
    },
    {
      pic: images.avatar2,
      nama: "nama",
      tanggal: new Date("2024-01-02"),
      message:
        "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Distinctio vel unde porro quo dolorum nostrum repudiandae. Totam accusantium ea maiores magnam dolorum enim pariatur praesentium, asperiores dolores at incidunt, fugit rem ad molestiae facere neque numquam officia voluptate officiis odio sunt delectus. Sapiente, porro soluta tempore deleniti voluptates magnam blanditiis.",
    },
    {
      pic: images.avatar2,
      nama: "nama",
      tanggal: new Date("2024-01-02"),
      message:
        "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Distinctio vel unde porro quo dolorum nostrum repudiandae. Totam accusantium ea maiores magnam dolorum enim pariatur praesentium, asperiores dolores at incidunt, fugit rem ad molestiae facere neque numquam officia voluptate officiis odio sunt delectus. Sapiente, porro soluta tempore deleniti voluptates magnam blanditiis.",
    },
    {
      pic: images.avatar2,
      nama: "nama",
      tanggal: new Date("2024-01-02"),
      message:
        "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Distinctio vel unde porro quo dolorum nostrum repudiandae. Totam accusantium ea maiores magnam dolorum enim pariatur praesentium, asperiores dolores at incidunt, fugit rem ad molestiae facere neque numquam officia voluptate officiis odio sunt delectus. Sapiente, porro soluta tempore deleniti voluptates magnam blanditiis.",
    },
    {
      pic: images.avatar2,
      nama: "nama",
      tanggal: new Date("2024-01-02"),
      message:
        "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Distinctio vel unde porro quo dolorum nostrum repudiandae. Totam accusantium ea maiores magnam dolorum enim pariatur praesentium, asperiores dolores at incidunt, fugit rem ad molestiae facere neque numquam officia voluptate officiis odio sunt delectus. Sapiente, porro soluta tempore deleniti voluptates magnam blanditiis.",
    },
  ];

  return (
    <div className="flex flex-col max-w-[358px] md:max-w-[1080px]  w-full px-[5px] xl:px-0 justify-start items-center mt-[52px] mb-[57px]">
      <div className="w-full  flex flex-col justify-center items-start ">
        <h1 className="text-[16px] lg:text-[32px] font-medium leading-[30px] lg:leading-[72px] ">
          Ulasan
        </h1>

        <div className="w-full max-w-none lg:max-w-[695px] flex flex-col p-[28px]  border-[1px] rounded-[10px] border-black100">
          <div className="h-full max-h-[606px] overflow-y-scroll  w-full pr-[17px] space-y-[12px] lg:space-y-[22px]">
            {ulasan.map((el, index) => {
              const tanggalHariIni = new Date();

              const selisihMilisekon =
                new Date(el.createdAt).getTime() - tanggalHariIni;
              const selisihHari = Math.abs(
                Math.ceil(selisihMilisekon / (1000 * 60 * 60 * 24))
              );
              console.log({ date: selisihHari });
              return (
                <div
                  key={index}
                  className="gap-[27px] w-full rounded-[10px] p-[8px] lg:p-10 border-[1px] border-black100  h-[108px] lg:h-[165px] flex items-start justify-center"
                >
                  <div className="w-[30px] h-[30px] lg:w-[50px] lg:h-[50px] overflow-hidden border-[1px] border-black100 rounded-full  ">
                    <img
                      src={
                        el?.User?.profile_picture
                          ? `${process.env.REACT_APP_SERVER_URL}images/user/${el.User.profile_picture}`
                          : images.avatar2
                      }
                      alt={el.User.profile_picture}
                      className="w-full h-full object-cover"
                    />
                  </div>

                  {/* main */}
                  <div className=" flex flex-1 flex-col gap-[6px] lg:gap-[14px]">
                    <div className="w-full flex justify-between items-center">
                      <p className="text-[12px] lg:text-[18px] font-bold leading-[24px] w-[70px] overflow-hidden line-clamp-1">
                        {el.User.username}
                      </p>
                      <p className="hidden lg:block text-whiteSmoke800 text-[18px] leading-[24px]">
                        {selisihHari > 0 ? selisihHari : ""}{" "}
                        {selisihHari > 0 ? "hari yang lalu" : "baru saja"}
                      </p>
                    </div>
                    <div className="w-full max-w-[467px] line-clamp-3">
                      <p className="text-[12px] lg:text-[18px] leaing-[20px] lg:leading-[24px]">
                        "{el.komentar}"
                      </p>
                    </div>
                  </div>
                  {/* main */}
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
}

export default UlasanSection;
