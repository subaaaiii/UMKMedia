import consultationBusinessPic from "../../../constants/consultationBusinessPic";
import { useNavigate } from "react-router-dom";

export default function HeroSection() {
  const navigate = useNavigate();

  return (
    <div
      className="bg-cover bg-no-repeat bg-[center_top_-20px] px-[16px] sm:px-[100px] w-full max-w-screen-2xl h-[287px] md:h-[871px] flex flex-col text-black500"
      style={{ backgroundImage: `url(${consultationBusinessPic.CB_Hero})` }}
    >
      <p className="w-[281px] md:w-[756px] text-[16px] md:text-[48px] font-extrabold leading-[20px] md:leading-[72px] mt-[20px] md:mt-[58px]">
        HELP YOUR BUSINESS GROW FASTER AND MORE SUSTAINABLY
      </p>
      <p className="w-[240px] md:w-[551px] text-[12px] md:text-[30px] font-medium leading-[20px] md:leading-[45px] mt-[12px] md:mt-[68px]">
        Mengembangkan bisnis merupakan sebuah perjalanan yang panjang, bagaimana
        memastikan bahwa bisnis yang anda jalankan telah berada di jalur yang
        tepat dan terus berkembang.
      </p>
      <button
        onClick={() => navigate("/konsultasi-bisnis/deskripsi")}
        className="w-full sm:w-[260px] px-[64px] py-[6px] md:py-[16px] mt-[15px] md:mt-[25px] rounded-[10px] bg-black500 text-whiteSmoke500 text-[12px] md:text-[16px] leading-[24px] font-normal hover:shadow-lg border-black500 border-2"
      >
        Selengkapnya
      </button>
    </div>
  );
}
