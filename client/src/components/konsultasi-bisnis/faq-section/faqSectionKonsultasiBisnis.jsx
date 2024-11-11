import React, { useEffect, useState } from "react";
import {
  Accordion,
  AccordionItem,
  AccordionButton,
  AccordionPanel,
  AccordionIcon,
  Box,
} from "@chakra-ui/react";
import AOS from "aos";
import "aos/dist/aos";

function FaqSectionKonsultasiBisnis() {
  const [dataFaq, setDataFaq] = useState([
    {
      title: "Seperti apa bentuk konsultasi di growlab?",
      answer:
        "Program berbentuk live class yang akan diadakan via online menggunakan google meet untuk membedah bisnis dan menyajikan hasil evaluasi dan riset pasar yang bermanfaat untuk pengembangan bisnis Anda kedepannya.",
      link: null,
    },
    {
      title: "Berapa biaya yang diperlukan untuk konsultasi di growlab?",
      answer: [
        "Biaya konsultasi tergantung dengan seberapa banyak sesi yang diikuti, Anda dapat bertanya kepada admin untuk lebih tau mengenai biaya lebih detail."
      ],
      link: null,
    },
    {
      title:
        "Keuntungan apa saja yang akan Saya dapatkan jika mengikuti program konsultasi di growlab?",
      answer:
        "Anda dapat bergabung ke dalam komunitas bisnis growlab yang tersebar dari seluruh Indonesia serta dapat berkolaborasi dengan tim Growlab di dalam hal digital marketing untuk membantu meningkatkan omset penjualan bisnis Anda.",
      link: null,
    },
    {
      title: "Saya tertarik, lalu apa yang harus Saya lakukan?",
      answer:
        "Anda dapat mengikuti prosedur diatas atau dapat menghubungi admin Kami disini: ",
      link: "https://wa.me/85236455624",
    },
  ]);

  useEffect(() => {
    AOS.init();
  }, []);

  return (
    <div className=" flex flex-col justify-start items-center mt-[60px] lg:mt-[160px] px-[10px] lg:px-0 w-full lg:w-[900px] gap-[52px]">
      <h1
        data-aos="fade-up"
        data-aos-duration="1000"
        className="text-[22px] lg:text-[40px] w-[208px] lg:w-auto  font-bold leading-[32px] lg:leading-[60px] text-black500 text-center"
      >
        Pertanyaan Seputar Konsultasi Bisnis
      </h1>
      <Accordion defaultIndex={[0]} allowMultiple className="w-full">
        {dataFaq.map((faq, index) => (
          <AccordionItem key={index}>
            <h2>
              <AccordionButton>
                <Box
                  as="span"
                  flex="1"
                  textAlign="left"
                  className=" text-[16px] lg:text-[22px] font-medium leading-[24px] lg:leading-[32px] text-black400 p-[24px]"
                >
                  {faq.title}
                </Box>
                <AccordionIcon />
              </AccordionButton>
            </h2>
            <AccordionPanel pb={4}>
              <p className="p-[24px] text-[14px] lg:text-[16px] font-light leading-[24px] text-black400">
                {typeof faq.answer == "object" ? (
                  <ol>
                    {faq.answer.map((index) => (
                      <li key={index}>{index}</li>
                    ))}
                  </ol>
                ) : (
                  faq.answer
                )}
                {faq.link === null ? (
                  ""
                ) : (
                  <a
                    href={faq.link}
                    target="_blank"
                    rel="noreferrer"
                    className="hover:text-blue-700 hover:underline underline"
                  >
                    0852-3645-5624
                  </a>
                )}
              </p>
            </AccordionPanel>
          </AccordionItem>
        ))}
      </Accordion>
    </div>
  );
}

export default FaqSectionKonsultasiBisnis;
