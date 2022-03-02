import React, { Component } from "react";

const CommentForm = () => {
  const [commentForm, setCommentForm] = useState("");

  function handleSubmit(event) {
    event.preventDefault();
  }

  return;
  <div>
    <form onSubmit={handleSubmit}>
      <label className="">Comment</label>
      <input className="" type="text" value="Type your comment here"></input>
      <button className="" type="submit">
        Post
      </button>
    </form>
  </div>;
};

export default CommentForm;
