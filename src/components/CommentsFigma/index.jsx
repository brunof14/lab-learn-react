import { CommentaryNumber } from "./components/CommentaryNumber";
import { CommentaryForm } from "./components/CommentaryForm";
import { Container } from "./styles";
import { CommentaryList } from "./components/CommentaryList";
import { useEffect, useState } from "react";
import { commentsData } from "./commentsData";
import { GlobalStyles } from "./styles/GlobalStyles";

export function CommentsFigma() {
  const [comment, setComment] = useState("");
  const [comments, setComments] = useState([]);

  useEffect(() => {
    setComments(commentsData);
  }, []);

  function handleCommentChange(comment) {
    setComment(comment);
  }

  function handleSubmitComment() {
    if (comment.length === 0) {
      return;
    }

    const lastId = comments[comments.length - 1].id;
    const data = {
      id: lastId + 1,
      author: {
        avatarUrl: "https://avatar-endpoint.herokuapp.com/api/",
        name: "Brain",
        at: "@eobrain",
      },
      time: "1 second",
      commentary: comment,
    };
    setComment("");
    setComments((prevComments) => [...prevComments, data]);
  }

  return (
    <>
      <GlobalStyles />
      <Container>
        <h1>Comments</h1>
        <CommentaryForm
          comment={comment}
          onCommentChange={handleCommentChange}
          onSubmitComment={handleSubmitComment}
        />
        <CommentaryNumber numberComments={comments.length} />
        <CommentaryList comments={comments} />
      </Container>
    </>
  );
}
