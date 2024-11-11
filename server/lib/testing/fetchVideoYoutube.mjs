// testingControllesrs.mjs
import fetch from "node-fetch";
import { URL, URLSearchParams } from "url";
import settings from "./settings";

const getDuration = (durationString = "") => {
  // We'll handle conversion of the duration string for each video here...
};

export default async (youtubeVideoId = "") => {
  const url = new URL("https://www.googleapis.com/youtube/v3/videos");
  url.search = new URLSearchParams({
    key: "AIzaSyCFooXe65PbUXzfZNy-G8ZuT64HzE9BsgY",
    part: "contentDetails",
    id: youtubeVideoId,
  }).toString();

  try {
    const response = await fetch(url);
    const data = await response.json();
    const videos = data?.items || [];

    return videos.map((video) => {
      return {
        id: video?.id,
        duration: getDuration(video?.contentDetails?.duration),
      };
    });
  } catch (error) {
    console.warn(error);
  }
};
