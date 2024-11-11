import teamPic from "../../../constants/teamPic";
import { icon } from "../../../constants";
import wave_accent from "../../../assets/images/wave_accent.png";

export default function MentorSection() {
  return (
    <div className="bg-black500 w-full max-w-screen-2xl h-fit lg:h-[1730px] py-[40px] text-whiteSmoke500">
      <div
        className="w-full h-full bg-cover items-center justify-center flex flex-col"
        style={{ backgroundImage: `url(${wave_accent})` }}
      >
        <p className="text-[14px] md:text-[40px] font-bold font-[Heebo] leading-[20px] md:leading-[72px] w-[206px] md:w-[601px] mb-[70px] md:mb-[103px] text-center gap-[10px] md:p-[10px]">
          Kamu akan dibimbing langsung dari ahlinya
        </p>

        <div className="flex flex-wrap-reverse gap-[20px] lg:gap-[117px] h-max-[424px] mb-[60px] md:mb-[200px] flex-shrink items-center justify-center">
          <div className="w-[221px] md:w-[307px] h-[331px] md:h-[460px]">
            <img
              src={teamPic.team1}
              alt="Oraldo Emeraldi Anggoro Pic"
              className="w-full h-full object-cover rounded-[10px]"
            />
          </div>
          <div className="w-[316px] md:w-[512px] h-fit mb-[50px]">
            <div className="mb-[24px]">
              <p className="text-[14px] md:text-[40px] font-bold leading-[20px] md:leading-[72px] mb-[12px]">
                Oraldo Emeraldi Anggoro
              </p>
              <p className="text-[12px] md:text-[32px] font-normal leading-[20px] md:leading-[72px]">
                Digital Marketer
              </p>
            </div>
            <p className="text-[12px] md:text-[18px] font-light leading-[20px] md:leading-[50px] text-justify">
              CEO & Co-Founder dari Growlab ini sudah berpengalaman dalam bidang
              digital marketing sejak 2018, telah berkolaborasi dengan berbagai
              perusahaan nasional dan membantu lebih dari 50 UMKM dalam
              mengembangkan bisnis di dunia digital.
            </p>

            <div className="flex gap-[1px] items-center">
              <button onClick={() => window.open("link", "_blank")}>
                <img
                  src={icon.instaProfile}
                  alt="icon-insta"
                  className="w-[20px] h-[20px] md:w-[48px] md:h-[48px]"
                />
              </button>
              <button onClick={() => window.open("link", "_blank")}>
                <img
                  src={icon.linkedinProfile}
                  alt="icon-linkedin"
                  className="w-[20px] h-[20px] md:w-[48px] md:h-[48px]"
                />
              </button>
            </div>
          </div>
        </div>
        <div className="flex flex-wrap gap-[20px] lg:gap-[117px] h-max-[424px] mt-[30px] md:mt-0 items-center justify-center flex-shrink">
          <div className="w-[316px] md:w-[512px] h-fit mb-[50px]">
            <div className="mb-[24px]">
              <p className="text-[14px] md:text-[40px] font-bold leading-[20px] md:leading-[72px] mb-[12px]">
                Sandy Christofer Setyono
              </p>
              <p className="text-[12px] md:text-[32px] font-normal leading-[20px] md:leading-[72px]">
                Business Analyst
              </p>
            </div>
            <p className="text-[12px] md:text-[18px] font-light leading-[20px] md:leading-[50px] text-justify">
              COO & Co-Founder dari Growlab ini telah berpengalaman sejak 2018
              di berbagai industri seperti E-commerce hingga industri Fast
              Moving Consumer Goods (FMCG) dan membantu banyak perusahaan
              start-up raksasa seperti Tokopedia, Gojek, Blibli dan lainnya.
            </p>
            <div className="flex gap-[1px] items-center">
              <button onClick={() => window.open("link", "_blank")}>
                <img
                  src={icon.instaProfile}
                  alt="icon-insta"
                  className="w-[20px] h-[20px] md:w-[48px] md:h-[48px]"
                />
              </button>
              <button onClick={() => window.open("link", "_blank")}>
                <img
                  src={icon.linkedinProfile}
                  alt="icon-linkedin"
                  className="w-[20px] h-[20px] md:w-[48px] md:h-[48px]"
                />
              </button>
            </div>
          </div>
          <div className="w-[221px] md:w-[307px] h-[331px] md:h-[460px]">
            <img
              src={teamPic.team2}
              alt="Shandy Christofer Setyono Pic"
              className="w-full h-full object-cover  rounded-[10px]"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
