import axios from "axios";
import React, { Component, useState, useEffect } from "react";

const Comment = (props) => {
  const [comments, setComments] = useState([]);
  const [like, setLike] = useState(comments.likes);
  const [dislike, setDislike] = useState(comments.dislikes);

  async function getVideoComment(videoId) {
    let response = await axios.get(
      `http://127.0.0.1:8000/comments/${videoId}/`
    );
    setComments(response.data);
  }

  useEffect(() => {
    let mounted = true;
    if (mounted) {
      getVideoComment(props.videoId);
      console.log("mounted test")
    }
    return () => mounted = false;
  }, [props.videoId])

  return (
    <div>
      {comments.map((comment, index) => {
        if (comment.video_id){
        return (
          <div>
            <div className="username">{comment.user.username}</div>
            <span className="comment-text">{comment.text}</span>
            <div>
              <p>{comment.likes} Likes</p>
              <p>{comment.dislikes} Dislikes</p>
          </div>
          <button type="submit">Reply</button>
          </div>
        )}
      })}
    </div>
  );
};

export default Comment;
