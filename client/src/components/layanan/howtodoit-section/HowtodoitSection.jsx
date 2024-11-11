import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import { useParams } from "react-router-dom";
import { icon } from "../../../constants";

const HowtodoitSection = () => {
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
      titleService = 1;
  }

  useEffect(() => {
    AOS.init();
  }, []);

  const works = [
    [
      {
        title: "Research",
        deskripsi:
          "Kami memulai dengan mendengarkan kebutuhan unik Anda. Analisis mendalam terhadap target audiens dan tujuan bisnis memandu perencanaan kami. Rencana ini menjadi dasar strategi desain yang akan memberikan pengalaman pengguna yang luar biasa.",
        pic: icon.puzzle,
        num: 1,
      },
      {
        title: "Designing",
        deskripsi:
          "Dengan perencanaan sebagai landasan, kami merancang antarmuka yang estetis dan intuitif. Setiap elemen dipertimbangkan dengan cermat untuk memastikan keindahan dan fungsionalitas optimal. Desain kami bukan hanya sekedar visual, tetapi juga menceritakan cerita yang kuat melalui penggunaan UX writing yang tepat.",
        pic: icon.design,
        num: 2,
      },
      {
        title: "Development",
        deskripsi:
          "Tim pengembangan kami mengambil alih, menghidupkan desain menjadi kenyataan. Proses ini melibatkan pengodean yang presisi dan fokus pada kinerja. Kami memastikan setiap fitur berfungsi mulus dan memberikan pengalaman pengguna yang responsif dan efisien.",
        pic: icon.code,
        num: 3,
      },
      {
        title: "Maintenance",
        deskripsi:
          "Kami berkomitmen untuk menjaga performa optimal. Pemeliharaan berkala dan pembaruan teknologi terbaru memastikan bahwa website atau aplikasi Anda selalu siap beradaptasi dengan perubahan. Tim kami tetap siaga untuk memastikan kesinambungan kesuksesan proyek Anda.",
        pic: icon.gear,
        num: 4,
      },
    ],
    [
      {
        title: "Research",
        deskripsi:
          "Kami memulai dengan mendengarkan kebutuhan unik Anda. Analisis mendalam terhadap target audiens dan tujuan bisnis memandu perencanaan kami. Rencana ini menjadi dasar strategi desain yang akan memberikan pengalaman pengguna yang luar biasa.",
        pic: icon.puzzle,
        num: 1,
      },
      {
        title: "Concepting",
        deskripsi:
          "Tim kami mengembangkan konsep konten yang relevan dan menarik. Dengan memahami brand identity, kami merancang kampanye visual dan naratif yang memikat, memastikan setiap postingan mencerminkan pesan yang ingin disampaikan",
        pic: icon.design,
        num: 2,
      },
      {
        title: "Scheduling",
        deskripsi:
          "Efisiensi dan konsistensi adalah kunci kesuksesan. Kami menggunakan alat manajemen jadwal untuk menyusun konten secara terstruktur. Dengan penjadwalan yang tepat, kami memastikan bahwa konten dipublikasikan pada waktu yang optimal untuk mencapai audiens target dan memaksimalkan interaksi.",
        pic: icon.schedule,
        num: 3,
      },
      {
        title: "Analyzing",
        deskripsi:
          "Setelah konten diunggah, kami terus memonitor kinerja kampanye. Melalui analisis data dan statistik, kami mengukur engagement, pertumbuhan pengikut, dan konversi. Hasil ini membantu kami menyesuaikan strategi, memaksimalkan efektivitas kampanye, dan memberikan laporan berkala kepada klien untuk transparansi dan evaluasi bersama",
        pic: icon.analyze,
        num: 4,
      },
    ],
    [
      {
        title: "Research",
        deskripsi:
          "Kami memulai dengan melakukan explorasi terhadap  nilai, visi, dan kepribadian merek brand kamu melalui dengan riset mendalam. Dengan memahami basis merek, desain logo dapat memberikan refleksi yang akurat dan kuat terhadap identitas perusahaan",
        pic: icon.puzzle,
        num: 1,
      },
      {
        title: "Designing",
        deskripsi:
          "Kami mengembangkan konsep logo berdasarkan hasil riset. Melalui iterasi yang cermat, kami selalu memastikan bahwa desain yang kami ciptakan dapat mencerminkan esensi merek dan memenuhi kebutuhan bisnismu. Proses ini memastikan logo yang dirancang sesuai dengan visi & misi bisnismu",
        pic: icon.design,
        num: 2,
      },
      {
        title: "Simplify",
        deskripsi:
          "Kami menyederhanakan elemen-elemen desain untuk meningkatkan daya ingat dan identifikasi terhadap brand kamu. Berfokus pada elemen inti yang kuat dan jelas agar logo dapat dengan mudah berkomunikasi dengan audiens target, serta menciptakan kesan yang terbaik dari bisnismu",
        pic: icon.drawerDone,
        num: 3,
      },
      {
        title: "Finishing",
        deskripsi:
          "Berdasarkan umpan balik, kami melakukan revisi dan penyempurnaan pada desain logo untuk memastikan desain akhir yang kami ciptakan mencapai kesempurnaan estetika dan efektivitas. Setelah itu, kami akan melakukan penyerahan logo beserta dokumen panduan penggunaan logo yang konsisten & efektif",
        pic: icon.designIdeas,
        num: 4,
      },
    ],
  ];

  return (
    <div className="mt-[60px] lg:mt-[160px] flex flex-col items-center max-w-[1080px] px-4">
      <div className="flex flex-col gap-8 lg:gap-[52px]">
        <div className="flex justify-center max-w-[1080px]">
          <h1
            className="font-heebo font-bold text-[22px] leading-[32px] lg:text-[40px] lg:leading-[60px] text-center lg:w-[564px]"
            data-aos="fade-up"
            data-aos-duration="1000"
          >
            Bagaimana Cara Kami Melakukannya?
          </h1>
        </div>

        <div className="flex flex-col">
          {works[index].map((work, id) => {
            return (
              // <img src={work.pic} alt="" />
              <div className="flex group" tabIndex={"0"} key={id}>
                <div className={`${id === 0 ? "mt-6" : ""} flex flex-col mr-6`}>
                  <div key={id} className="flex flex-col items-center">
                    <h2 className="text-[22px] font-medium text-[#d9d9d9] group-focus:text-black">
                      0{work.num}
                    </h2>
                    {id === 3 ? (
                      <></>
                    ) : (
                      <>
                        <span className="h-[300px] lg:h-[160px] w-1 bg-[#d9d9d9] group-focus:bg-gradient-to-b group-focus:from-black group-focus:from-[180px] lg:group-focus:from-[96px] group-focus:to-[#d9d9d9] group-focus:to-[120px] lg:group-focus:to-[64px]"></span>
                      </>
                    )}
                  </div>
                </div>

                <div
                  className={`opacity-40 group-focus:opacity-100 flex flex-col lg:flex-row justify-center max-w-[1024px] shadow-customSm p-4 lg:p-6 mb-5 lg:mb-8 cursor-pointer`}
                >
                  <img
                    src={work.pic}
                    alt={work.title}
                    className="mr-6 h-[54px] w-[54px] lg:w-[120px] lg:h-[120px]"
                  />
                  <div className="flex flex-col">
                    <h1 className="mb-4 font-heebo text-base mt-4 lg:mt-0 lg:text-[22px] font-bold">
                      {work.title}
                    </h1>
                    <p className="font-heebo font-light text-sm lg:text-base ">
                      {work.deskripsi}
                    </p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* <div className="flex">
          <div className="mt-6 mr-6">
            {works.map((work, id) => {
              return (
                <div
                  for={work.title}
                  key={id}
                  className="flex flex-col items-center"
                >
                  <h2 className="text-[22px] font-medium text-[#d9d9d9] hover:text-black">
                    0{work.num}
                  </h2>
                  {id === 3 ? (
                    <></>
                  ) : (
                    <>
                      <span className="h-[160px] w-1 bg-[#d9d9d9] hover:bg-gradient-to-b hover:from-black hover:from-50% hover:to-[#d9d9d9] hover:to-50%"></span>
                    </>
                  )}
                </div>
              );
            })}
          </div>

          <div className="flex flex-col">
            {works.map((work, id) => {
              return (
                <div
                  key={id}
                  id={work.title}
                  className="opacity-40 hover:opacity-100  flex justify-center w-[1024px] shadow-customSm p-6 mb-8 cursor-pointer"
                >
                  <img src={work.pic} alt={work.title} className="mr-6" />
                  <div className="flex flex-col">
                    <h1 className="mb-4 font-heebo text-[22px] font-bold">
                      {work.title}
                    </h1>
                    <p className="font-heebo font-light leading-6">
                      {work.deskripsi}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div> */}
      </div>
    </div>
  );
};

export default HowtodoitSection;
