import { useState, useEffect } from "react";

import { CommentaryNumber } from "../CommentaryNumber";
import { CommentaryForm } from "../CommentaryForm";
import { CommentaryList } from "../CommentaryList";
import { api } from "../../commentsData";
import { useUserContext } from "../../hooks/useUserContext";

export function Comments() {
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
      <h1>Comments</h1>
      <CommentaryForm
        comment={comment}
        onCommentChange={handleCommentChange}
        onSubmitComment={handleSubmitComment}
      />
      <CommentaryNumber numberComments={comments.length} />
      <CommentaryList comments={comments} />
    </>
  );
}
