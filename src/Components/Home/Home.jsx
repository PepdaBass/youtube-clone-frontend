import React, { useEffect } from "react";
import VideoPlayer from "../VideoPlayer/VideoPlayer";
import RelatedVideos from "../RelatedVideos/RelatedVideos";
import CommentForm from "../CommentForm/CommentForm";

const Home = (props) => {
  return (
    <div>
      <VideoPlayer videoId={props.videoId} />
      <RelatedVideos
        listRelatedVideos={props.listRelatedVideos}
        setVideoId={props.setVideoId}
        videoId={props.videoId}
      />
      <CommentForm user={props.user} videoId={props.videoId} setUser={props.setUser}/>
    </div>
  );
};

export default Home;
