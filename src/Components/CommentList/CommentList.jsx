import Comment from "../CommentList/Comment.jsx";

const CommentList = (props) => {
  return (
    <div className="commentList">
      <div>
        {props.comments.map((comment, i) => {
          return <Comment key={i} comment={comment} />;
        })}
      </div>
    </div>
  );
};

export default CommentList;
