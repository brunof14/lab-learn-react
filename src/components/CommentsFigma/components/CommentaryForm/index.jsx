import { useEffect, useState, useRef } from "react";
import {
  Container,
  AvatarImg,
  InputWrapper,
  DivInput,
  ButtonSendCommentary,
} from "./styles";

export function CommentaryForm({ comment, onCommentChange, onSubmitComment }) {
  const [isFocusInput, setIsFocusInput] = useState(false);
  const inputRef = useRef();

  useEffect(() => {
    let commentaryInput = inputRef.current;

    if (commentaryInput === null) {
      return;
    }

    function onFocusCommentaryInput() {
      setIsFocusInput(true);
    }

    function onBlurCommentaryInput() {
      setIsFocusInput(false);
    }

    commentaryInput.addEventListener("focus", onFocusCommentaryInput);
    commentaryInput.addEventListener("blur", onBlurCommentaryInput);

    return () => {
      commentaryInput.removeEventListener("focus", onFocusCommentaryInput);
      commentaryInput.removeEventListener("blur", onBlurCommentaryInput);
    };
  }, []);

  function handleSubmit(event) {
    if (inputRef.current !== null) {
      inputRef.current.innerText = "";
    }
    onCommentChange("");
    event.preventDefault();
    onSubmitComment();
  }

  function handleCommentChange({ target }) {
    onCommentChange(target.innerText);
  }

  function handleClickInWrapperInput(event) {
    if (inputRef.current !== null && event.target.localName !== "button") {
      inputRef.current.focus();
      setIsFocusInput(true);
    }
  }

  return (
    <Container onSubmit={handleSubmit}>
      <InputWrapper
        className={isFocusInput ? "focus" : ""}
        onClick={handleClickInWrapperInput}
      >
        <AvatarImg src="https://avatar-endpoint.herokuapp.com/api" alt="Luiz" />
        <DivInput
          ref={inputRef}
          type="text"
          placeholder="Add a comment"
          onInput={handleCommentChange}
          contentEditable
        />
        <ButtonSendCommentary disabled={comment.length === 0}>
          Post
        </ButtonSendCommentary>
      </InputWrapper>
    </Container>
  );
}
