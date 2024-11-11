import { useParams } from "react-router-dom";
import NavigasiLayanan from "./navigasi-layanan/NavigasiLayanan";
import { dataLayanan } from "../../../constants/data";
import ButtonWhiteSmoke500 from "../../global-component/button/button-whitesmoke500/ButtonWhiteSmoke500";

const HeroSection = () => {
  const { title } = useParams();

  let index = 1;
  switch (title) {
    case "buat-website-dan-aplikasi":
      index = 2;
      break;
    case "social-media-management":
      index = 3;
      break;
    case "desain-logo":
      index = 4;
      break;
    default:
      index = 0;
  }
  
  const ButtonWhiteSmoke500 = ({ WIDTH, TEXT_BUTTON, extraStyles }) => {
    return (
      <button
        className={`bg-white text-gray-700 border border-gray-300 px-4 py-2 rounded ${WIDTH} ${extraStyles}`}
      >
        {TEXT_BUTTON}
      </button>
    );
  };

  return (
    <div
      className="relative bg-cover px-[16px] sm:px-[100px] w-full h-[780px] 2xl:max-w-[1280px] lg:h-[664px] flex flex-col"
      style={{ backgroundImage: `url(${dataLayanan[index].pic})` }}
    >
      <div className="bg-[rgba(15,16,17,0.95)] bg-cover px-[16px] sm:px-[100px] w-full 2xl:max-w-[1280px] h-[780px] lg:h-[664px] absolute left-0 z-0"></div>

      <div className="z-10">
        <div className="hidden lg:block mt-[24px] gap-[8px]">
          <NavigasiLayanan index={index} />
        </div>

        <div className="flex flex-col lg:flex-row gap-[80px] mt-[60px]">
          <div className="flex flex-col lg:overflow-hidden text-center">
            <div className="flex flex-col max-w-[568px] mb-[52px]">
              <h1 className="text-whiteSmoke500 text-[28px] mb-2 lg:mb-4 lg:text-[48px] text-center lg:text-start font-bold leading-[32px] lg:leading-[60px]">
                {dataLayanan[index].title}
              </h1>
              <p className="text-[16px] lg:text-[18px] font-light leading-[24px] lg:leading-[28px] text-whiteSmoke500 text-center lg:text-start">
                {dataLayanan[index].deskripsi}
              </p>
            </div>

            <div className="flex justify-center lg:justify-start">
              <a href="https://wa.me/85236455624" target="_blank" rel="noopener noreferrer">
                <ButtonWhiteSmoke500
                  WIDTH={"w-[260px]"}
                  TEXT_BUTTON={"Hubungi Kami"}
                  extraStyles="hover:bg-gray-300 active:bg-gray-400 transition duration-200 ease-in-out"
                />
              </a>
            </div>
          </div>

          <img
            src={dataLayanan[index].pic}
            alt="layanan"
            className="w-[358px] h-[358px] lg:w-[432px] lg:h-[472px] object-cover rounded-[10px]"
          />
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
