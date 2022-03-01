import React, { useEffect, useState } from "react";
import axios from "axios";
import keys from "../../API_keys.json";

const RelatedVideos = (props) => {
  const [listRelatedVideos, setListRelatedVideos] = useState([]);

  async function getRelatedVideos() {
    console.log("Called getRelatedVideos successfully");
    if (props.videoId) {
      let response = await axios.get(
        `https://www.googleapis.com/youtube/v3/search?relatedToVideoId=${props.videoId}&type=video&key=${keys.googleAPIkey}&part=snippet`
      );
      setListRelatedVideos(response.data.items);
      console.log("related video list", response.data.items);
    } else {
      console.log("No current video ID");
    }
  }

  useEffect(() => {
    let mounted = true;
    if(mounted){
      getRelatedVideos();
    }
    return () => mounted = false;
  }, [])

  function handleSubmit(videoId) {
    console.log(videoId);
    props.setVideoId(videoId);
    getRelatedVideos();
  }

  return (
    <div>
      <ul>
        {listRelatedVideos.map((video, index) => {
          return (
            <li key={index}>
              <button
                type="button"
                onClick={() => handleSubmit(video.id.videoId)}
              >
                {console.log("Video inside map", video)}
                <img src={video.snippet.thumbnails.default.url} alt="thumbnails" />
              </button>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default RelatedVideos;
