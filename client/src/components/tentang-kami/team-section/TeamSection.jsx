import React from "react";
import teamPic from "../../../constants/teamPic";

function HeroSection() {
  return (
    <div className="px-[16px] md:px-[100px] max-w-screen-2xl max-h-fit flex flex-col items-center my-[50px] md:my-[100px] ">
      <p className="text-[24px] lg:text-[40px] font-bold font-[Heebo] leading-[36px] lg:leading-[60px] max-w-[250px] mb-[42px]">
        Tim Kami
      </p>

      <div className="flex flex-wrap-reverse gap-[52px] h-max-[424px] items-center justify-center mb-[30px] flex-shrink">
        <div className="w-[316px] md:w-[516px] h-[242px] md:h-[424px] relative">
          <div className="bg-indigoDye500 w-[292px] md:w-[492px] h-[238px] md:h-[400px] top-[24px] absolute"></div>
          <img
            src={teamPic.team1}
            alt="Oraldo Emeraldi Anggoro Pic"
            className="w-[292px] md:w-[492px] h-[238px] md:h-[400px] absolute left-[24px] object-cover"
          />
        </div>
        <div className="w-[316px] md:w-[512px] h-fit">
          <div className="mb-[24px]">
            <p className="text-[20px] md:text-[24px] font-bold leading-[36px] mb-[12px]">
              Oraldo Emeraldi Anggoro
            </p>
            <p className="text-[16px] md:text-[18px] font-medium leading-[28px] text-indigoDye500">
              CEO & Co-Founder
            </p>
          </div>
          <p className="text-[16px] md:text-[18px] font-light leading-[28px]">
            Aldo biasa dipanggil, merupakan lulusan dari Universitas Surabaya
            dengan predikat cumlaude serta mahasiswa berprestasi tahun 2019.
            Sejak tahun 2018, Aldo sudah memiliki banyak pengalaman dalam dunia
            Digital Marketing dan hal tersebut membuatnya terjun dengan
            membangun usaha dibidang digital untuk membantu para pebisnis UMKM
            agar dapat mengembangkan usahanya melalui dunia digital.
          </p>
        </div>
      </div>
      <div className="flex flex-wrap gap-[52px] h-max-[424px] mt-[30px] md:mt-0 items-center justify-center flex-shrink">
        <div className="w-[316px] md:w-[512px] h-fit">
          <div className="mb-[24px]">
            <p className="text-[20px] md:text-[24px] font-bold leading-[36px] mb-[12px]">
              Sandy Christofer Setyono
            </p>
            <p className="text-[16px] md:text-[18px] font-medium leading-[28px] text-indigoDye500">
              COO & Co-Founder
            </p>
          </div>
          <p className="text-[16px] md:text-[18px] font-light leading-[28px]">
            Sandy merupakan lulusan dari Universitas Parahyangan pada tahun
            2019 dengan predikat cumlaude. Sejak tahun 2018 Sandy telah
            memiliki pengalaman dalam bidang data dan pengembangan bisnis serta
            telah membantu banyak perusahaan start-up ternama seperti Tokopedia,
            Gojek, Blibli, dan lainnya.
          </p>
        </div>
        <div className="w-[316px] md:w-[516px] h-[242px] md:h-[424px] relative">
          <div className=" bg-indigoDye500 w-[292px] md:w-[492px] h-[238px] md:h-[400px] top-[24px] left-[24px] absolute">
            
          </div>
          <img 
            src={teamPic.team2}
            alt="Shandy Christofer Setyono Pic"
            className="w-[292px] md:w-[492px] h-[238px] md:h-[400px] absolute object-cover"
          />
        </div>
      </div>
    </div>
  );
}

export default HeroSection;
