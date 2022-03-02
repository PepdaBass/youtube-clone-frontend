import axios from "axios";
import React, { Component } from "react";

const Comment = (props) => {
  const [comment, setComment] = useState("");

  async function getVideoComment(videoId) {
    let response = await axios.get(
      `http://127.0.0.1:8000/comments/${props.videoId}`
    );
  }

  return (
    <div>
      <h3>UserName here</h3>
      <div className="comment">{props.comment.text}</div>{" "}
      {/* Posted comment here */}
      <p>Likes:</p>
      <p>Dislikes:</p>
      <button type="submit">Reply</button>
    </div>
  );
};

export default Comment;
