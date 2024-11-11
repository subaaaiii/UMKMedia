const db = require("../models");
const kelasBisnis = db.kelas_bisnis;
const kelasMateri = db.kelas_materi;
const kelasDetail = db.kelas_detail;
// Import the 'fetch' function directly
const { URL, URLSearchParams } = require("url");

module.exports = {
  getVideoDuration: async (req, res) => {
    try {
      const getOneClass = await kelasBisnis.findOne({
        where: {
          id: 1,
        },
        include: [{ model: kelasDetail, include: [kelasMateri] }],
      });

      const getVideo = getOneClass.kelas_detail.kelas_materis.map((el) => {
        let videoCode;
        if (el.link.includes("youtu.be")) {
          videoCode = el.link.split("/").pop().split("?")[0];
        } else if (el.link.includes("youtube.com")) {
          videoCode = el.link.split("v=")[1].split("&")[0];
        }
        return videoCode;
      });

      const finalResult = (durationString = "") => {
        const duration = { hours: 0, minutes: 0, seconds: 0 };
        const durationParts = durationString
          .replace("PT", "")
          .replace("H", ":")
          .replace("M", ":")
          .replace("S", "")
          .split(":");

        if (durationParts.length === 3) {
          duration["hours"] = durationParts[0];
          duration["minutes"] = durationParts[1];
          duration["seconds"] = durationParts[2];
        }

        if (durationParts.length === 2) {
          duration["minutes"] = durationParts[0];
          duration["seconds"] = durationParts[1];
        }

        if (durationParts.length === 1) {
          duration["seconds"] = durationParts[0];
        }

        return {
          ...duration,
          string: `${duration.hours}h${duration.minutes}m${duration.seconds}s`,
        };
      };

      const getDuration = async (youtubeVideoId) => {
        const { default: fetch } = await import("node-fetch");
        const url = new URL("https://www.googleapis.com/youtube/v3/videos");
        url.search = new URLSearchParams({
          key: "AIzaSyCMN9d66xvLcD_ehsOZTGr729FAFkpI_NE",
          part: "contentDetails",
          id: youtubeVideoId,
        }).toString();

        try {
          const response = await fetch(url);
          const data = await response.json();
          const video = data?.items[0];

          if (video) {
            return {
              id: video.id,
              duration: finalResult(video.contentDetails?.duration),
            };
          } else {
            return null;
          }
        } catch (error) {
          console.warn(error);
          return null;
        }
      };

      const getVideoDuration = await Promise.all(
        getVideo.map((el) => getDuration(el))
      );

      res.status(200).send({
        getOneClass,
        getVideo,
        getVideoDuration,
      });
    } catch (error) {
      res.status(400).send(error);
    }
  },
};
