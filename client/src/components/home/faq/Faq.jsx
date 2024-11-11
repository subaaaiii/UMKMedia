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

function Faq() {
  const [dataFaq, setDataFaq] = useState([
    {
      title: "Apa itu Growlab?",
      answer:
        "Growlab adalah end to end platform yang berfungsi sebagai wadah pebisnis UMKM dari seluruh Indonesia.",
      link: null,
    },
    {
      title: "Apa program yang dimiliki oleh Growlab?",
      answer: [
        "A. pembelajaran -> program yang membantu pebisnis UMKM di Indonesia untuk dapat menumbuhkan bisnis mereka melalui komunitas pembelajaran, online course, webinar, seminar dan bootcamp.",
        "B. pendampingan -> program yang membantu pebisnis UMKM di Indonesia untuk meningkatkan penjualannya melalui program akselerator dan perfomance marketing dari Growlab.",
        "C. pendanaan -> program yang membantu pebisnis UMKM di Indonesia untuk scaling up usahanya melalui program pendanaan dalam bentuk pinjaman dan investasi.",
      ],
      link: null,
    },
    {
      title:
        "Apa yang bisa saya harapkan setelah bergabung menjadi bagian dari ekosistem Growlab?",
      answer:
        "Jika mengikuti dengan baik, kamu berkesempatan untuk dapat mengembangkan bisnismu lebih baik melalui aspek operasional yang terstruktur, marketing dan finance.",
      link: null,
    },
    {
      title: "Apakah ada biaya untuk bergabung ke dalam ekosistem Growlab?",
      answer:
        "Saat ini untuk bergabung ke dalam ekosistem masih GRATIS, kamu dapat mengisi form pendaftaran disini: ",
      link: "https://docs.google.com/forms/d/e/1FAIpQLSdtiVnJeZjVb6-tWc_HKKZZvi_ZppZeSYzgRcQCygOL7sp-5w/viewform",
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
        Pertanyaan Seputar Growlab
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
                    {faq.link}
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

export default Faq;
