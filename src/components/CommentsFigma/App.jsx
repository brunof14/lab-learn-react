import { CommentaryNumber } from "./components/CommentaryNumber";
import { CommentaryForm } from "./components/CommentaryForm";
import { Container } from "./styles";
import { CommentaryList } from "./components/CommentaryList";
import { useEffect, useState } from "react";
import { api } from "./commentsData";

import { AccountLogged } from "./components/AccountLogged";
import { useUserContext } from "./hooks/useUserContext";

export function App() {
  const [comment, setComment] = useState("");
  const [comments, setComments] = useState([]);
  const { name, at, avatarUrl } = useUserContext();

  useEffect(() => {
    const getComments = async () => {
      const commentsData = await api.getComments();
      console.log(commentsData);
      setComments(commentsData);
    };

    getComments();
  }, []);

  function handleCommentChange(value) {
    setComment(value);
  }

  function handleSubmitComment() {
    if (comment.length === 0) {
      return;
    }

    const lastId = comments[comments.length - 1].id;
    const data = {
      id: lastId + 1,
      author: {
        avatarUrl,
        name,
        at,
      },
      createdAt: new Date(),
      body: comment,
    };
    setComment("");
    setComments((prevComments) => [...prevComments, data]);
  }

  return (
    <>
      <AccountLogged />
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
