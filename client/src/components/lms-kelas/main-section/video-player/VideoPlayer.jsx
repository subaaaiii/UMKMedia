import {
  Skeleton,
  Slider,
  SliderFilledTrack,
  SliderThumb,
  SliderTrack,
} from "@chakra-ui/react";
import React, { useEffect, useRef, useState } from "react";
import {
  HiChevronDoubleLeft,
  HiChevronDoubleRight,
  HiPause,
  HiPlay,
} from "react-icons/hi";
import {
  PiSpeakerSimpleHighFill,
  PiSpeakerSimpleSlashFill,
} from "react-icons/pi";
import { GoScreenFull } from "react-icons/go";
import { FaPause, FaPlay } from "react-icons/fa";
import { GrPowerReset } from "react-icons/gr";
import YouTube from "react-youtube";

import "./video-player.css";

function VideoPlayer({
  videoCode,
  index,
  isFull,
  setIsFull,
  isPLay,
  setIsPlay,
}) {
  const playerRef = useRef();
  const [isDragging, setIsDragging] = useState(false);
  const [initialMouseX, setInitialMouseX] = useState(0);
  const [initialVideoLeft, setInitialVideoLeft] = useState(0);
  const [volume, setVolume] = useState(50);
  const [isSound, setIsSound] = useState(false);
  const [isMute, setIsmute] = useState(false);
  const [timeNow, setTimeNow] = useState(0);
  const [isHover, setIsHover] = useState(false);
  const [fullscreen, setFullscreen] = useState(false);
  const containerRef = useRef();
  const opts = {
    height: "100%",
    width: "100%",
    playerVars: {
      autoplay: 0,
      controls: 0,
      rel: 0,
      showinfo: 1,
      modestbranding: 1,
    },
  };

  const [isPlaying, setIsPlaying] = useState(false);

  const handlePlayPause = () => {
    const player = playerRef.current;
    if (currentTime >= 98 && player && player.playVideoAt) {
      player.seekTo(0);
      setIsPlay(index + 1);
      setIsPlaying(true);
    } else if (player && player.playVideo && player.pauseVideo) {
      if (isPlaying) {
        player.pauseVideo();
      } else {
        setIsPlay(index + 1);
        player.playVideo();
      }
      setIsPlaying(!isPlaying);
    } else {
      console.error("Player is not initialized");
    }
  };

  const handleForward = ({ isFull, setIsFull }) => {
    const player = playerRef.current;
    if (player && player.seekTo) {
      const currentTime = player.getCurrentTime();
      player.seekTo(currentTime + 10, true);
    } else {
      console.error("Player is not initialized");
    }
  };

  const handleReverse = () => {
    const player = playerRef.current;
    if (player && player.seekTo) {
      const currentTime = player.getCurrentTime();
      player.seekTo(currentTime - 10, true);
    } else {
      console.error("Player is not initialized");
    }
  };

  // useEffect(() => {
  //   const handleContextMenu = (event) => {
  //     event.preventDefault();
  //   };

  //   // Attach the event listener when the component mounts
  //   document.addEventListener("contextmenu", handleContextMenu);

  //   // Detach the event listener when the component unmounts
  //   return () => {
  //     document.removeEventListener("contextmenu", handleContextMenu);
  //   };
  // }, []);
  const [player, setPlayer] = useState(null);
  const [currentTime, setCurrentTime] = useState(0);
  const [duration, setDuration] = useState(0);
  const onReady = (event) => {
    setPlayer(event.target);
  };

  const onSliderChange = (value) => {
    setCurrentTime(value);

    if (player) {
      console.log(player);
      player.seekTo(Math.abs((value / 100) * duration), true);
    }
  };

  const onStateChange = (event) => {
    if (event.data === window.YT.PlayerState.PLAYING) {
      // Get the duration when the video starts playing
      setDuration(player.getDuration());
    }
    if (
      event.data === window.YT.PlayerState.PLAYING ||
      event.data === window.YT.PlayerState.PAUSED
    ) {
      // Mendapatkan waktu video saat ini saat video diputar
      setCurrentTime(
        Math.ceil((player.getCurrentTime() / player.getDuration()) * 100)
      );
    }
  };

  const onVolumeChange = (value) => {
    console.log(value);
    setVolume(value);
    if (player) {
      player.setVolume(value);
    }
  };

  function formatDuration(seconds) {
    const minutes = Math.floor(seconds / 60);
    const remainingSeconds = Math.floor(seconds % 60);

    const formattedMinutes = String(minutes).padStart(2, "0");
    const formattedSeconds = String(remainingSeconds).padStart(2, "0");

    return `${formattedMinutes}:${formattedSeconds}`;
  }

  const setQuality = (resolution) => {
    alert(resolution);
    if (player) {
      // Set resolusi video menggunakan YouTube Iframe API
      player.setPlaybackQuality(resolution);
    }
  };

  const toggleFullscreen = () => {
    if (document.fullscreenElement || document.webkitFullscreenElement) {
      // Keluar dari layar penuh
      document.exitFullscreen
        ? document.exitFullscreen()
        : document.webkitExitFullscreen();
    } else {
      // Masuk ke layar penuh
      document.documentElement.requestFullscreen
        ? document.documentElement.requestFullscreen()
        : document.documentElement.webkitRequestFullscreen();
    }

    setFullscreen(!fullscreen);
    setIsFull(!isFull);

    // ... Logika lain yang mungkin diperlukan saat mode fullscreen diubah
  };

  useEffect(() => {
    // Memperbarui nilai slider setiap 1000 ms (1 detik)
    if (player) {
      setDuration(player.getDuration());
    }

    const intervalId = setInterval(() => {
      if (player && player.getPlayerState() === window.YT.PlayerState.PLAYING) {
        setCurrentTime(
          Math.ceil((player.getCurrentTime() / player.getDuration()) * 100)
        );
        setTimeNow(player.getCurrentTime());
      }
    }, 1000);

    return () => {
      // Membersihkan interval saat komponen dibongkar
      clearInterval(intervalId);
    };
  }, [player]);

  useEffect(() => {
    if (player) {
      player.setVolume(volume);
    }
    if (volume < 1) setIsmute(true);
    else if (volume > 1) setIsmute(false);
  }, [volume]);

  useEffect(() => {
    const handleKeyPress = (event) => {
      // Jika tombol yang ditekan adalah 'Esc' (kode 27)
      // alert("here");
      console.log(event);
      if (event.key === "ArrowRight") {
        const player = playerRef.current;
        if (player && player.seekTo) {
          const currentTime = player.getCurrentTime();
          player.seekTo(currentTime + 10, true);
        } else {
          console.error("Player is not initialized");
        }
      } else if (event.key === "ArrowLeft") {
        const player = playerRef.current;
        if (player && player.seekTo) {
          const currentTime = player.getCurrentTime();
          player.seekTo(currentTime - 10, true);
        } else {
          console.error("Player is not initialized");
        }
      }
      if (event.key === "Escape" || event.key === "Esc") {
        console.log(event.key);
        setFullscreen(false);
        setIsFull(false);
        // if (fullscreen) {
        //   setFullscreen(false);
        //   document.exitFullscreen();
        // }
      }
    };

    // Menambahkan listener ke peristiwa keydown pada seluruh dokumen
    document.addEventListener("keydown", handleKeyPress);

    // Membersihkan listener saat komponen dibongkar
    return () => {
      document.removeEventListener("keydown", handleKeyPress);
    };
  }, [fullscreen]);

  useEffect(() => {
    if (isPLay && Number(isPLay - 1) !== Number(index) && isPlaying) {
      const player = playerRef.current;
      player.pauseVideo();
    }
  }, [isPLay]);

  return (
    <div
      key={index}
      className={`${
        fullscreen ? "fullscreen-container " : ""
      }  w-full flex  flex-col justify-center items-center `}
    >
      <div
        className={`${
          fullscreen
            ? "fullscreen-video"
            : "w-[358px] md:w-[752px] 2xl:w-[1100px]  h-[204px] md:h-[424px] 2xl:h-[600px]"
        } relative  z-[30]  `}
      >
        <div
          onMouseEnter={() => setIsHover(true)}
          onMouseLeave={() => setIsHover(false)}
          className="absolute w-full pointer-events-auto h-full overflow-hidden  bg-transparant"
        >
          <div
            onClick={() => handlePlayPause()}
            className="absolute  bottom-[55px] cursor-pointer-auto w-full h-full  bg-transparant"
          ></div>
          <div
            className={`${
              isHover && currentTime > 0 ? "translate-y-0" : "translate-y-full"
            } duration-300 h-[60px]  w-full flex flex-col pb-[5px] items-center absolute  bottom-0`}
          >
            <Slider
              value={currentTime}
              onChange={onSliderChange}
              aria-label="slider-ex-1"
              colorScheme="red"
              width={"100%"}
              position={"absolute"}
              top={0}
              _hover={{ backgroundColor: "blue.200" }}
              size={"lg"}
              className="   px-[5px]"
            >
              <SliderTrack>
                <SliderFilledTrack />
              </SliderTrack>
              <SliderThumb />
            </Slider>
            <div className="w-full   h-full  flex justify-between">
              <div className="w-fit  flex justify-start">
                <div
                  className="px-[10px] flex  justify-center items-center w-[55px] h-[41px]  text-[20px]   text-white   cursor-pointer"
                  onClick={handlePlayPause}
                >
                  {currentTime >= 98 ? (
                    <GrPowerReset />
                  ) : isPlaying ? (
                    <FaPause />
                  ) : (
                    <FaPlay />
                  )}
                </div>
                <div
                  onMouseEnter={() => setIsSound(true)}
                  onMouseLeave={() => setIsSound(false)}
                  className="  w-[300px] h-[41px] px-[10px] flex justify-start items-center   text-white cursor-pointer"
                >
                  {isMute ? (
                    <PiSpeakerSimpleSlashFill className="text-[25px]" />
                  ) : (
                    <PiSpeakerSimpleHighFill className="text-[25px]" />
                  )}
                  <div
                    className={`${
                      isSound ? "w-[70px] px-[10px]" : "w-0  px-0"
                    } duration-300 flex h-[41px] justify-center items-center overflow-x-hidden`}
                  >
                    <Slider
                      // value={20}
                      onChange={onVolumeChange}
                      aria-label="slider-ex-1"
                      colorScheme="white"
                      className={` w-[50px] `}
                      size={"sm"}
                    >
                      <SliderTrack>
                        <SliderFilledTrack />
                      </SliderTrack>
                      <SliderThumb />
                    </Slider>
                  </div>
                  <div className="w-fit   flex  justify-center  items-center  px-5">
                    {formatDuration(timeNow) + "/" + formatDuration(duration)}
                  </div>
                  <div className="w-fit  ">
                    <GoScreenFull
                      onClick={() => toggleFullscreen()}
                      className="cursor-pointer text-[25px]"
                    />
                  </div>
                  {/* <div className="h-full ">
                    <button onClick={() => setQuality("small")}>
                      {" "}
                      resolution
                    </button>
                  </div> */}
                </div>
              </div>
              <div className="w-[400px] flex justify-end px-[10px] pb-[5px] items-center"></div>
            </div>
          </div>
        </div>

        <YouTube
          videoId={videoCode}
          opts={opts}
          onReady={(event) => {
            playerRef.current = event.target;
            onReady(event);
          }}
          onStateChange={onStateChange}
          className="w-full h-full rounded-[10px] overflow-hidden "
        />
        {/* <div
          onContextMenu={(e) => {
            e.preventDefault();
          }}
        >
          <video>
            <source
              src="https://www.youtube.com/embed/H2k2a1GnFQ8?si=HgQGoHZZXPpuDjvM"
              type="video/mp4"
            />
          </video>
        </div> */}
      </div>

      <div className="w-full flex  justify-center items-center  gap-2"></div>
    </div>
  );
}

export default VideoPlayer;
