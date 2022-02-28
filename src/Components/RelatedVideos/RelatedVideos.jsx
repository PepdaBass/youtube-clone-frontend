import React, { useEffect, useState } from "react";

const RelatedVideos = (props) => {
  // useEffect(() => {}, [...videos]);

  console.log(props.listRelatedVideos);

  return (
    <div>
      <ul>
        {props.listRelatedVideos.map((video, index) => {
          return (
            <a
              href={`https://www.youtube.com/embed/${video.id.videoId}?autoplay=1`}
            >
              <img src={video.snippet.thumbnails.default.url} />
            </a>
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
