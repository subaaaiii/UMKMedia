import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import { useParams } from "react-router-dom";
import { dataService } from "../../../constants/data";
import layananPic from "../../../constants/layananPic";

const ServiceSection = () => {
  const { title } = useParams();

  let index = 1;
  let titleService = 1;
  switch (title) {
    case "buat-website-dan-aplikasi":
      titleService = 2;
      index = 0;
      break;
    case "social-media-management":
      index = 1;
      titleService = 3;
      break;
    case "desain-logo":
      index = 2;
      titleService = 4;
      break;
    default:
      index = 0;
  }

  useEffect(() => {
    AOS.init();
  }, []);
  const dataServiceCard = [
    [
      //data service
      {
        title: "UI/UX Design",
        deskripsi:
          "Kami menciptakan design yang sesuai dengan tujuan bisnismu, menarik secara visual, dan mudah untuk digunakan",
        pic: layananPic.uiuxDesign,
      },
      {
        title: "Website Development",
        deskripsi:
          "Kami menciptakan website yang memiliki performa terbaik dan tentunya menghadirkan solusi untuk bisnismu",
        pic: layananPic.websiteDevelopment,
      },
      {
        title: "Mobile Apps Development",
        deskripsi:
          "Kami menciptakan mobile apps yang memiliki performa terbaik dan tentunya menghadirkan solusi untuk bisnismu",
        pic: layananPic.mobileAppDevelopment,
      },
      {
        title: "CMS Website",
        deskripsi:
          "Layanan CMS Website memungkinkan kamu untuk mengelola dan membarui konten website dengan mudah",
        pic: layananPic.cmsWebsite,
      },
    ],
    [
      {
        title: "Consumer Insight",
        deskripsi:
          "Kami merancang strategi berdasarkan wawasan yang paling sesuai dengan target audiens kamu",
        pic: layananPic.consumerInsight,
      },
      {
        title: "Creative Campaign",
        deskripsi:
          "Kami bukan hanya membuat konten yang menarik, namun juga memastikan seluruh pesan tersampaikan kepada audiens",
        pic: layananPic.creativeCampaign,
      },
      {
        title: "Calender Editorial",
        deskripsi:
          "Kami akan memastikan bahwa content social media diselesaikan tepat waktu serta diposting pada jam yang tepat",
        pic: layananPic.calenderEditorial,
      },
      {
        title: "Peformance Monitoring",
        deskripsi:
          "Melalui pemantauan kinerja real-time, kami menyesuaikan strategi terbaik untuk bisnis kamu",
        pic: layananPic.peformanceMonitoring,
      },
    ],
    [
      {
        title: "Brand Personality",
        deskripsi:
          "Kami bukan hanya menciptakan desain yang menarik secara visual, namun juga sesuai dengan visi & misi bisnismu",
        pic: layananPic.brandPersonality,
      },
      {
        title: "Pixel Perfect",
        deskripsi:
          "Setiap design yang kami ciptakan memiliki kualitas dan resolusi terbaik, dan tentunya dapat disesuaikan ke berbagai ukuran",
        pic: layananPic.pixelPerfect,
      },
      {
        title: "Mockup Design",
        deskripsi:
          "Kamu bisa melihat hasil desain yang sudah diimplementasikan ke dalam berbagai jenis produk bisnismu",
        pic: layananPic.mockupDesign,
      },
      {
        title: "Hak Kekayaan Intelektual",
        deskripsi:
          "Setiap design yang kami ciptakan terjamin keasliannya, dan tentunya akan menjadi hak milik kamu sepenuhnya",
        pic: layananPic.Haki,
      },
    ],
  ];

  return (
    <div className="mt-[60px] lg:mt-[160px] w-fit flex flex-col items-center px-4">
      <div className="flex flex-col gap-[32px] lg:gap-[52px]">
        <div className="flex justify-center max-w-[1080px]">
          <h1
            className=" font-heebo font-bold text-[22px] lg:text-[40px] leading-[32px] lg:leading-[60px] text-center max-w-[604px] lg:mb-[52px]"
            data-aos="fade-up"
            data-aos-duration="1000"
          >
            {dataService[titleService].deskripsi}
          </h1>
        </div>

        <div
          className="max-w-[1080px] flex flex-wrap justify-center lg:justify-normal gap-8 lg:gap-[80px]"
          data-aos="fade-up"
          data-aos-duration="1000"
        >
          {/* Service Card */}
          {dataServiceCard[index].map((item, id) => {
            return (
              <div key={id} className={`${id % 2 !== 0 ? "md:mt-[80px]" : ""}`}>
                <img
                  src={item.pic}
                  alt={item.title}
                  className="w-[314px] h-[412px] lg:h-[524px] lg:w-full"
                />
                <div className="max-w-[348px]">
                  <h1
                    className={`text-[18px] lg:text-[24px] font-bold font-heebo leading-[28px] lg:leading-[36px] mt-4 mb-2 lg:mt-6 lg:mb-4`}
                  >
                    {item.title}
                  </h1>
                  <p className="font-heebo font-light text-base lg:text-lg leading-6 lg:leading-7">
                    {item.deskripsi}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default ServiceSection;
