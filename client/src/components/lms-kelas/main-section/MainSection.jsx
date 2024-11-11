import {
  Box,
  Progress,
  Skeleton,
  Spinner,
  Step,
  StepDescription,
  StepIcon,
  StepIndicator,
  StepNumber,
  StepSeparator,
  StepStatus,
  StepTitle,
  Stepper,
  useQuery,
  useSteps,
} from "@chakra-ui/react";
import React, { useEffect, useRef, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { api } from "../../../api/api";
import { HiChevronRight } from "react-icons/hi";
import Swal from "sweetalert2";
import YouTube from "react-youtube";
import VideoPlayer from "./video-player/VideoPlayer";
const steps = [
  { title: "First", description: "Contact Info" },
  { title: "Second", description: "Date & Time" },
  { title: "Third", description: "Select Rooms" },
];

function MainSection({ isFull, setIsFull }) {
  // console.log({ coba });
  // const { id } = useParams();
  const [materiId, setMateriId] = useState(1);
  const [title, setTitle] = useState("");
  const [userProgres, setUserProgres] = useState(null);
  const [kelasModul, setKelasModul] = useState([]);
  const [subModul, setSubModul] = useState([]);
  const [kelasSite, setKelasSite] = useState("");
  const [materiSite, setMateriSite] = useState("");
  const [toggle, setToggle] = useState(false);
  const [materiNow, setMateriNow] = useState([]);
  const [moduleTitle, setModuleTitle] = useState("");
  const [urutan, setUrutan] = useState("no data");
  const [isLoading, setIsLoading] = useState(false);
  const timeoutRef = useRef(null);
  const timeoutFetchRef = useRef(null);
  const playerRef = useRef();
  const [isPLay, setIsPlay] = useState(0);
  const [nextMateri, setNextMateri] = useState(null);

  const coba = [
    {
      link: "https://youtu.be/6pRGiE55dYo?si=VeunatEd-LT9akVY",
    },
    {
      link: "https://youtu.be/6pRGiE55dYo?si=VeunatEd-LT9akVY",
    },
    {
      link: "https://youtu.be/6pRGiE55dYo?si=VeunatEd-LT9akVY",
    },
    {
      link: "https://youtu.be/6pRGiE55dYo?si=VeunatEd-LT9akVY",
    },
  ];

  const { activeStep, goToNext, goToPrevious, setActiveStep, isCompleteStep } =
    useSteps({
      index: 1,
      count: kelasModul.length,
    });

  const navigate = useNavigate();

  // Fungsi untuk mengubah indeks langkah yang aktif

  // const { activeStep } = useSteps({
  //   index: 1,
  //   count: steps.length,
  // });

  const fetchMateri = async () => {
    // const meteriID = JSON.parse(localStorage.getItem("materi")) || 7;
    setIsLoading(true);
    const currentUrl = window.location.href;

    const url = new URL(currentUrl);

    const queryParams = new URLSearchParams(url.search);

    const materi = queryParams.get("materi");
    const kelas = queryParams.get("kelas");
    setKelasSite(kelas);
    setMateriSite(materi);

    console.log({ materi, kelas });
    // let idMateriClick;
    // if (userProgres)
    //   idMateriClick = Number(userProgres?.kelas_regists[0]?.progress);
    // else idMateriClick = 1;

    // alert(idMateriClick);
    const token = JSON.parse(localStorage.getItem("auth"));
    if (timeoutFetchRef.current) {
      clearTimeout(timeoutFetchRef.current);
    }

    timeoutFetchRef.current = setTimeout(async () => {
      try {
        const response = await api.post(
          `${process.env.REACT_APP_API_BASE_URL}/userKelas/materi/mulai`,
          {
            materiID: Number(materi),
            kelasID: Number(kelas),
          },
          {
            headers: {
              Accept: "application/json",
              "Content-Type": "application/json",
              Authorization: token,
            },
          }
        );

        const progressSave = response.data.data.progress_user;
        if (!response.data.result) {
          Swal.fire({
            title: "Warning",
            text: "Permintaan anda tidak dapat diproses!",
            icon: "warning",
            confirmButtonColor: "#0F1011",
          });
          navigate("/profile/kelas-saya/semua-kelas");
        } else {
          console.log(progressSave.kelas_regists[0].progress);
          setTitle(response.data.data.progress_user.nama);
          setUserProgres(progressSave);
          setKelasModul(response.data.data.modul.kelas_materis);
          setSubModul(response.data.data.materi.sub_materi_kelas);
          setModuleTitle(response.data.data.materi.materi);
          setUrutan(response.data.data.materi.urutan);
          setNextMateri(response.data.data.progress_user.next_kelas_materi_id);
          // setMateriNow(response.data.data.)
          if (
            progressSave.kelas_regists[0].progress > 0 ||
            progressSave.kelas_regists[0].progress <= kelasModul.length
          ) {
            // Metode onNext akan memperbarui indeks langkah yang aktif
            console.log({ progres: progressSave.kelas_regists[0].progress });
            setActiveStep(progressSave.kelas_regists[0].progress);
            // setActiveStep(2);
          }
        }
      } catch (error) {
        console.log(error);
      } finally {
        setIsLoading(false);
      }
    }, 2000);
  };

  useEffect(() => {
    fetchMateri();
  }, [window.location.href]);

  useEffect(() => {
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
    }

    if (toggle) {
      timeoutRef.current = setTimeout(async () => {
        setToggle(false);
      }, 10000);
    }
  }, [toggle]);
  const iframeRef = useRef(null);
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  // useEffect(() => {
  //   window.scrollTo(0, 0);
  //   const iframeElement = document.getElementById("iframeid");
  //   console.log(iframeElement);
  //   if (iframeElement) {
  //     iframeElement.contentDocument.oncontextmenu = function () {
  //       return false;
  //     };
  //   }
  // }, [subModul]);

  return (
    <div
      className={`bg-whiteSmoke500  bg-opacity-50  relative flex  h-full overflow-x-hidden  w-screen justify-center lg:justify-between items-start  `}
    >
      <div className="relative w-full max-w-[373px] overflow-x-clip  overflow-y-scroll bg-whiteSmoke550 scrollbar-hide  py-[24px] hidden xl:flex  flex-col flex-grow h-full max-h-[1400px]    items-center">
        <div className="w-full flex flex-col h-full min-h-[1352px] overflow-x-clip">
          <div className="w-full px-[24px]">
            <Skeleton
              isLoaded={!isLoading}
              fadeDuration={1}
              className="w-full "
            >
              <p className="text-[22px] font-medium leading-[32px]">
                {title || "no data"}
              </p>
            </Skeleton>
          </div>

          <div className="w-full max-w-[373px]  flex flex-col mt-[16px] mb-[48px] px-[24px]">
            <Skeleton isLoaded={!isLoading} fadeDuration={1} className="w-full">
              <Progress
                value={Number(
                  userProgres && userProgres.persentase
                    ? userProgres.persentase
                    : 0
                )}
                size="xs"
                colorScheme="blue"
                width={"100%"}
              />
            </Skeleton>

            <div className="mt-[16px] w-full flex flex-col items-start text-whiteSmoke800">
              <Skeleton
                isLoaded={!isLoading}
                fadeDuration={1}
                className="w-full"
              >
                <p className="text-[12px] font-bold leading-[20px]">
                  {userProgres?.persentase || 0}% selesai
                </p>
              </Skeleton>
              <Skeleton
                isLoaded={!isLoading}
                fadeDuration={1}
                className="w-full"
              >
                <p className="text-[12px] font-bold leading-[20px]">
                  Terakhir dipelajari
                </p>{" "}
              </Skeleton>
            </div>
          </div>

          <div className="flex flex-col flex-1 w-full h-full">
            <Skeleton
              isLoaded={!isLoading}
              fadeDuration={1}
              className="flex flex-col flex-1 w-full h-full"
            >
              <Stepper
                index={activeStep}
                orientation="vertical"
                className="h-full w-full"
                gap="0"
                size={"xs"}
                colorScheme="blue"
                paddingX={0}
                display={"flex"}
              >
                {kelasModul?.map((step, index) => (
                  <Box
                    width={"100%"}
                    key={index}
                    className=" flex flex-1 text-sky-700"
                  >
                    <StepStatus
                      complete={
                        <div className="relative w-full">
                          <Step className={`  ml-[24px] w-full`}>
                            <Box className=" w-full   gap-5  flex flex-1 ">
                              <StepIndicator>
                                <StepStatus complete={<StepIcon />} />
                              </StepIndicator>

                              <Box
                                flexShrink="0"
                                cursor={"pointer"}
                                onClick={() =>
                                  navigate(
                                    `/lms?kelas=${kelasSite}&materi=${Number(
                                      step.id
                                    )}`
                                  )
                                }
                              >
                                <StepStatus
                                  complete={
                                    <>
                                      <p className="opacity-0  w-[336px]  bg-black400  bg-opacity-10 py-[24px] text-[14px] font-bold hover:font-extrabold leading-[21px]">
                                        {step.title}
                                      </p>
                                      <p
                                        className={`${
                                          Number(materiSite) === step.id
                                            ? "bg-black400  bg-opacity-10 "
                                            : ""
                                        } absolute z-40  -left-[24px] right-0 -top-[26px] w-[380px] px-[48px] py-[24px] text-[14px] font-bold leading-[21px] `}
                                      >
                                        {step.title}
                                      </p>
                                    </>
                                  }
                                />
                              </Box>
                            </Box>
                            <StepSeparator />
                          </Step>
                        </div>
                      }
                      incomplete={
                        <div className="relative w-full">
                          <Step key={index} className={` ml-[24px] w-full`}>
                            <Box className=" w-full   gap-5  flex flex-1 ">
                              <StepIndicator>
                                <StepStatus complete={<StepIcon />} />
                              </StepIndicator>

                              <Box flexShrink="0" cursor={"pointer"}>
                                <StepStatus
                                  incomplete={
                                    <>
                                      <p className="opacity-0 line-clamp-2 w-[336px]   bg-opacity-10 py-[24px] text-[14px] font-bold hover:font-extrabold ">
                                        {step.title}
                                      </p>
                                      <p className="absolute line-clamp-2 opacity-10 -left-[20px] -top-[26px] w-[336px]   bg-opacity-10 px-[48px] py-[24px] text-[14px] font-bold hover:font-extrabold ">
                                        {step.title}
                                      </p>
                                    </>
                                  }
                                />
                              </Box>
                            </Box>
                            <StepSeparator />
                          </Step>
                        </div>
                      }
                      active={
                        <div className="relative w-full">
                          <Step key={index} className={` ml-[24px]  w-full`}>
                            <Box className=" w-full    gap-5  flex flex-1 ">
                              <StepIndicator className="">
                                <StepStatus complete={<StepIcon />} />
                              </StepIndicator>

                              <Box
                                flexShrink="0"
                                cursor={"pointer"}
                                onClick={() =>
                                  navigate(
                                    `/lms?kelas=${kelasSite}&materi=${Number(
                                      step.id
                                    )}`
                                  )
                                }
                              >
                                <StepStatus
                                  active={
                                    <>
                                      <p className="opacity-0  w-[336px]  bg-black400  bg-opacity-10 py-[24px] text-[14px] font-bold hover:font-extrabold leading-[21px]">
                                        {step.title}
                                      </p>
                                      <p
                                        className={`${
                                          Number(materiSite) === step.id
                                            ? "bg-black400  bg-opacity-10 "
                                            : ""
                                        } absolute z-40  -left-[24px] right-0 -top-[26px] w-[380px] px-[48px] py-[24px] text-[14px] font-bold leading-[21px] `}
                                      >
                                        {step.title}
                                      </p>
                                    </>
                                  }
                                />
                              </Box>
                            </Box>
                            <StepSeparator />
                          </Step>
                        </div>
                      }
                    />
                  </Box>
                ))}
              </Stepper>
            </Skeleton>
          </div>
        </div>
      </div>

      <div
        onClick={() => setToggle((prev) => !prev)}
        className={`${
          toggle ? "bg-opacity-80 " : "bg-opacity-0 pointer-events-none"
        } absolute  top-0 left-0  flex justify-start xl:hidden w-screen h-full bg-black  `}
      ></div>
      <div
        className={` ${
          toggle ? "translate-x-0" : "-translate-x-[373px]"
        } duration-300 absolute left-[373px] z-[40] h-full  `}
      >
        <div
          onClick={() => setToggle((prev) => !prev)}
          className={` sticky  bg-whiteSmoke550     rounded-r-[10px] top-[232px] flex xl:hidden justify-center items-center`}
        >
          <div
            className={` cursor-pointer  rounded-r-[10px]   w-[25px] h-[64px]  flex justify-center items-center bg-whiteSmoke550 `}
          >
            <HiChevronRight
              className={`${toggle ? "rotate-0" : "rotate-180"} duration-300`}
            />
          </div>
        </div>
      </div>

      <div
        className={`${
          toggle ? "translate-x-0" : "-translate-x-full"
        } duration-300 absolute left-0 top-0 bg-whiteSmoke550 z-[40] w-full max-w-[373px] h-[1400px]   overflow-x-clip overflow-y-scroll    flex xl:hidden flex-col justify-start items-center`}
      >
        <div className="w-full h-full flex flex-col justify-start items-center py-[24px]">
          <div className="w-full  h-full">
            <div className="w-full px-[24px]">
              <p className="text-[22px] font-medium leading-[32px]">
                {title || "no data"}
              </p>
            </div>

            <div className="w-full max-w-[373px]  flex flex-col mt-[16px] mb-[48px] px-[24px]">
              <Progress
                value={Number(
                  userProgres && userProgres.persentase
                    ? userProgres.persentase
                    : 0
                )}
                size="xs"
                colorScheme="blue"
                width={"100%"}
              />
              <div className="mt-[16px] w-full flex flex-col items-start text-whiteSmoke800">
                <p className="text-[12px] font-bold leading-[20px]">
                  {userProgres?.persentase || 0}% selesai
                </p>
                <p className="text-[12px] font-bold leading-[20px]">
                  Terakhir dipelajari
                </p>
              </div>
            </div>

            <div className="w-full">
              <Stepper
                index={activeStep}
                orientation="vertical"
                className="h-full w-full"
                gap="0"
                size={"xs"}
                colorScheme="blue"
                paddingX={0}
                display={"flex"}
              >
                {kelasModul?.map((step, index) => (
                  <Box
                    key={index}
                    width={"100%"}
                    className=" flex flex-1 text-sky-700"
                  >
                    <StepStatus
                      complete={
                        <div className="relative w-full">
                          <Step className={`  ml-[24px] w-full`}>
                            <Box className=" w-full   gap-5  flex flex-1 ">
                              <StepIndicator>
                                <StepStatus complete={<StepIcon />} />
                              </StepIndicator>

                              <Box flexShrink="0" cursor={"pointer"}>
                                <StepStatus
                                  complete={
                                    <>
                                      <p className="opacity-0  w-[336px]  bg-black400  bg-opacity-10 py-[24px] text-[14px] font-bold hover:font-extrabold leading-[21px]">
                                        {step.title}
                                      </p>
                                      <p
                                        className={`${
                                          Number(materiSite) === step.id
                                            ? "bg-black400  bg-opacity-10 "
                                            : ""
                                        } absolute z-40  -left-[24px] right-0 -top-[26px] w-[380px] px-[48px] py-[24px] text-[14px] font-bold leading-[21px] `}
                                      >
                                        {step.title}
                                      </p>
                                    </>
                                  }
                                />
                              </Box>
                            </Box>
                            <StepSeparator />
                          </Step>
                        </div>
                      }
                      incomplete={
                        <div className="relative w-full">
                          <Step key={index} className={` ml-[24px] w-full`}>
                            <Box className=" w-full   gap-5  flex flex-1 ">
                              <StepIndicator>
                                <StepStatus complete={<StepIcon />} />
                              </StepIndicator>

                              <Box flexShrink="0" cursor={"pointer"}>
                                <StepStatus
                                  incomplete={
                                    <>
                                      <p className="opacity-0 line-clamp-2 w-[336px]   bg-opacity-10 py-[24px] text-[14px] font-bold hover:font-extrabold ">
                                        {step.title}
                                      </p>
                                      <p className="absolute line-clamp-2 opacity-10 -left-[20px] -top-[26px] w-[336px]   bg-opacity-10 px-[48px] py-[24px] text-[14px] font-bold hover:font-extrabold ">
                                        {step.title}
                                      </p>
                                    </>
                                  }
                                />
                              </Box>
                            </Box>
                            <StepSeparator />
                          </Step>
                        </div>
                      }
                      active={
                        <div className="relative w-full">
                          <Step key={index} className={` ml-[24px]  w-full`}>
                            <Box className=" w-full    gap-5  flex flex-1 ">
                              <StepIndicator className="">
                                <StepStatus complete={<StepIcon />} />
                              </StepIndicator>

                              <Box flexShrink="0" cursor={"pointer"}>
                                <StepStatus
                                  active={
                                    <>
                                      <p className="opacity-0  w-[336px]  bg-black400  bg-opacity-10 py-[24px] text-[14px] font-bold hover:font-extrabold leading-[21px]">
                                        {step.title}
                                      </p>
                                      <p
                                        className={`${
                                          Number(materiSite) === step.id
                                            ? "bg-black400  bg-opacity-10 "
                                            : ""
                                        } absolute z-40  -left-[24px] right-0 -top-[26px] w-[380px] px-[48px] py-[24px] text-[14px] font-bold leading-[21px] `}
                                      >
                                        {step.title}
                                      </p>
                                    </>
                                  }
                                />
                              </Box>
                            </Box>
                            <StepSeparator />
                          </Step>
                        </div>
                      }
                    />
                  </Box>
                ))}
              </Stepper>
            </div>
          </div>
        </div>
      </div>

      <div className="w-full  px-5 lg:px-[100px] flex h-full max-h-[1400px] flex-1 flex-col overflow-y-scroll overflow-x-hidden  scrollbar-hide items-center pt-[32px]  gap-[32px] lg:gap-[52px]">
        <Skeleton
          isLoaded={!isLoading}
          fadeDuration={1}
          className="w-full  flex flex-col gap-[8px] justify-center items-start"
        >
          <p className="text-[12px] font-light leading-[20px]">
            Pelajaran {urutan || "0"} dari {kelasModul.length}
          </p>
          <p className="text-[22px] lg:text-[32px] font-bold leading-[40px]">
            {moduleTitle}
          </p>
        </Skeleton>
        <div className="w-full lg:w-[752px] 2xl:w-[1100px]  h-max  px-5  lg:px-[100px] flex flex-col flex-grow items-center justify-start ">
          {/* {isLoading ? (
            <Spinner size={"xl"} />
          ) : ( */}

          <Skeleton
            isLoaded={!isLoading}
            fadeDuration={1}
            className={`w-full  ${
              !isLoading ? " " : "h-full"
            }   flex flex-col gap-[52px] justify-start items-center`}
          >
            {subModul?.map((el, index) => {
              let videoCode;
              if (el.link.includes("youtu.be")) {
                videoCode = el.link.split("/").pop().split("?")[0];
              } else if (el.link.includes("youtube.com")) {
                videoCode = el.link.split("v=")[1].split("&")[0];
              }
              return (
                <div
                  key={index}
                  className="w-full flex flex-col justify-center items-center   "
                >
                  <VideoPlayer
                    videoCode={videoCode}
                    index={index}
                    ori={el.link}
                    isFull={isFull}
                    setIsFull={setIsFull}
                    setIsPlay={setIsPlay}
                    isPLay={isPLay}
                  />
                </div>
              );
            })}
          </Skeleton>
          {/* )} */}
        </div>
        <div className="w-full  flex items-center justify-center">
          <button
            onClick={() => {
              if ((nextMateri)) {
                navigate(
                  `/lms?kelas=${kelasSite}&materi=${Number(nextMateri)}`
                );
              } else {
                Swal.fire({
                  title: "Selamat",
                  text: "Anda telah menyelesaikan semua materi kelas!",
                  icon: "success",
                  confirmButtonColor: "#0F1011",
                }).then(() => {
                  navigate("/profile/kelas-saya/semua-kelas");
                });
              }
            }}
            className="px-[48px] py-[16px] gap-5 flex items-center justify-center bg-black500 rounded-[10px] mb-[52px]"
          >
            {isLoading && <Spinner size={"sm"} color="white" />}
            <p className="text-[16px] font-medium leading-[24px] text-white">
              Pelajaran Berikutnya
            </p>
          </button>
        </div>
      </div>
    </div>
  );
}

export default MainSection;
