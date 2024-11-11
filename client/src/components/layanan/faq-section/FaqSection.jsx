import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
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

// function FaqSection() {
const FaqSection = () => {
    const {title} = useParams();

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
  const dataFaq = [
    [      
      {
        title:
          "Bagaimana growlab dapat membantu bisnis Kalian melalui website dan aplikasi?",
        answer:
          "Tim growlab merupakan spesialisasi digital marketing yang telah berpengalaman lebih dari 3 tahun. Setelah proses diskusi, Kami akan mulai mengerjakan perencanaan sesuai data yang Anda isi pada Form. Kami akan selalu berkomunikasi sampai mendapatkan hasil yang diinginkan.",
        link: null
      },
      {
        title:
          "Berapa lama waktu pengerjaannya?",
        answer:
          "Pengerjaan website dan aplikasi Anda sangat bergantung pada tingkat kompleksitas dari website atau aplikasi yang Anda inginkan, Anda dapat berkonsultasi dengan admin Kami terlebih dahulu untuk mendapatkan detail waktu pengerjaan yang lebih spesifik.",
        link: null
      },
      {
        title:
          "Apakah growlab dapat membantu pembuatan segala jenis website dan aplikasi?",
        answer:
          "Ya, Kami dapat membantu segala jenis pembuatan website dan aplikasi selama tidak menyalahi aturan perundang-undangan (contoh: website pornografi, website judi online, dan lainnya).",
        link: null
      },
      {
        title:
          "Saya tertarik, lalu apa yang harus Saya lakukan?",
        answer:
          "Anda dapat mengikuti prosedur diatas atau dapat menghubungi admin Kami disini: ",
        link: "https://wa.me/85236455624"
      },
    ],
    [
      {
        title:
          "Bagaimana growlab dapat membantu bisnis Kalian melalui sosial media?",
        answer:
          "Tim growlab merupakan spesialisasi digital marketing yang telah berpengalaman lebih dari 3 tahun. Setelah proses diskusi, Kami akan mulai mengerjakan perencanaan sesuai data yang Anda isi pada Form. Kami akan selalu berkomunikasi sampai mendapatkan hasil yang diinginkan.",
        link: null
      },
      {
        title:
          "Berapa lama waktu pengerjaannya?",
        answer:
          "Setelah proses diskusi dan konfirmasi pembayaran, tim Kami akan langsung melakukan konsep dan pengiriman draft script maksimal 3 hari kerja.",
        link: null
      },
      {
        title:
          "Apakah growlab dapat membantu pembuatan segala jenis konten di sosial media?",
        answer:
          "Ya, Kami dapat membantu segala jenis pembuatan konten dan proses kreatif lainnya selama tidak menyalahi aturan perundang-undangan (contoh: pornografi, judi online, dan lainnya).",
        link: null
      },
      {
        title:
          "Saya tertarik, lalu apa yang harus Saya lakukan?",
        answer:
          "Anda dapat mengikuti prosedur diatas atau dapat menghubungi admin Kami disini: ",
        link: "https://wa.me/85236455624"
      },
    ],
    [
      {
        title:
          "Bagaimana growlab dapat membantu bisnis Kalian melalui pembuatan logo?",
        answer:
          "Tim growlab merupakan spesialisasi digital marketing yang telah berpengalaman lebih dari 3 tahun. Setelah proses diskusi, Kami akan mulai mengerjakan perencanaan sesuai data yang Anda isi pada Form. Kami akan selalu berkomunikasi sampai mendapatkan hasil yang diinginkan.",
        link: null
      },
      {
        title:
          "Berapa lama waktu pengerjaannya?",
        answer:
          "Setelah proses diskusi dan konfirmasi pembayaran, tim Kami akan langsung melakukan konsep dan pengiriman draft script maksimal 3 hari kerja.",
        link: null
      },
      {
        title:
          "Saya tertarik, lalu apa yang harus Saya lakukan?",
        answer:
          "Anda dapat mengikuti prosedur diatas atau dapat menghubungi admin Kami disini: ",
        link: "https://wa.me/85236455624"
      },
    ],
  ];

  return (
    <div className=" flex flex-col justify-start items-center mt-[60px] lg:mt-[160px] px-[10px] lg:px-0 w-full lg:w-[900px] gap-[52px]">
      <h1
        data-aos="fade-up"
        data-aos-duration="1000"
        className="text-[22px] lg:text-[40px] w-[208px] lg:w-auto  font-bold leading-[32px] lg:leading-[60px] text-black500 text-center"
      >
        Paling Sering Ditanyakan
      </h1>
      <Accordion defaultIndex={[0]} allowMultiple className="w-full">
        {dataFaq[index ].map((faq, index) => (
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
                {typeof faq.answer === "object" ? (
                  <ol>
                    {faq.answer.map((item, index) => (
                      <li key={index}>{item}</li>
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

export default FaqSection;
