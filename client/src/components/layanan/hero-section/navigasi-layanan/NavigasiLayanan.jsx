import { icon } from "../../../../constants";
import { dataLayanan } from "../../../../constants/data";

const NavigasiLayanan = ({ index }) => {
  return (
    <div className=" flex max-w-[358px] md:max-w-[1080px] px-[5px] xl:px-0  w-full justify-start items-center mt-[24px]">
      <nav className="gap-[8px]   flex justify-start items-center list-none">
        <li>
          <p className="text-[14px] text-whiteSmoke500 font-[Heebo] font-light leading-[20px] cursor-pointer">
            Layanan
          </p>
        </li>
        <li className=" w-[16px] h-[16px] flex justify-center items-center">
          <img src={icon.chevronSmallDownDark} alt="icon" />
        </li>
        <li>
          <p className="text-[14px] text-whiteSmoke500 font-[Heebo] font-medium leading-[20px] cursor-pointer">
            {dataLayanan[index].title}
          </p>
        </li>
      </nav>
    </div>
  );
};

export default NavigasiLayanan;
