import React, { Component, useState, useEffect } from "react";
import axios from "axios";

const Reply = (props) => {
  const [replies, setReplies] = useState([]);

  async function getCommentReplies(commentId) {
    let response = await axios.get(
      `http://127.0.0.1:8000/replies/${commentId}/`
    );
    setReplies(response.data);
  }

  useEffect(() => {
    let mounted = true;
    if (mounted) {
      getCommentReplies(props.commentId);
      console.log("Reply mounted test: successful!");
    }
    return () => (mounted = false);
  }, [props.videoId]);

  return (
    <div>
      {replies.map((reply, index) => {
        if (reply.comment_id) {
          return (
            <div>
              <div className="username">{reply.user.username}</div>
              <span className="reply-text">{reply.text}</span>
              <button type="submit">Reply</button>
            </div>
          );
        }
      })}
    </div>
  );
};

export default Reply;
