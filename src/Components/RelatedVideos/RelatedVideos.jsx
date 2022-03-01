import React, { useEffect, useState } from "react";

const RelatedVideos = (props) => {
  // useEffect(() => {}, [...videos]);

  // useEffect(() => {
  //   props.getRelatedVideos()
  // }, []);

  function handleSubmit(videoId) {
    console.log(videoId);
    props.setVideoId(videoId);
    props.getRelatedVideos();
  }

  // console.log(props.listRelatedVideos);

  return (
    <div>
      <ul>
        {props.listRelatedVideos.map((video, index) => {
          return (
            <li>
              <button
                type="button"
                onClick={() => handleSubmit(video.id.videoId)}
              >
                {console.log("Video inside map", video)}
                <img src={video.thumbnails.default.url} alt="thumbnails" />
              </button>
            </li>
          );
        })}
      </ul>
      {/* return (
      <div>
        <iframe
          title="main-player"
          id="ytplayer"
          type="text/html"
          width="360"
          height="202"
          src={`https://www.youtube.com/embed/${video.id.videoId}?autoplay=0`}
          frameBorder="0"
        ></iframe>
      </div> */}
    </div>
  );
};

export default RelatedVideos;

{
  /* <button
type="submit"
onClick={props.setVideoId(video.id.videoId)}
// href={`https://www.youtube.com/embed/${video.id.videoId}?autoplay=1`}
>
<img src={video.snippet.thumbnails.default.url} />
</button> */
}
