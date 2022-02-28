import React from "react";
import VideoPlayer from "../VideoPlayer/VideoPlayer";
import RelatedVideos from "../RelatedVideos/RelatedVideos";

const Home = (props) => {
  return (
    <div>
      <VideoPlayer videoId={props.videoId} />
      <RelatedVideos
        listRelatedVideos={props.listRelatedVideos}
        setVideoId={props.setVideoId}
      />
    </div>
  );
};

export default Home;
