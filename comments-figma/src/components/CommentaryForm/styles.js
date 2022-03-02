import styled from "styled-components";

export const Container = styled.form``;

export const InputWrapper = styled.div`
  border: 1px solid #e6e6e6;
  padding: 0.8rem;
  border-radius: 6px;

  display: flex;
  align-items: center;

  transition: border-color 0.2s, box-shadow 0.2s;

  &.focus {
    border-color: #18a0fb;
    box-shadow: 0 0 0 2px #18a0fb;
  }
`;

export const DivInput = styled.div`
  flex: 1;
  width: 100%;
  font-size: 1.3rem;
  word-break: break-word;
  color: #333;
  border: none;
  outline: none;
  user-select: text;
  line-height: 1.8;
  
  &:empty::before {
    display: block;
    content: attr(placeholder);
    pointer-events: none;
    color: #b3b3b3;
  }
`;

export const AvatarImg = styled.img`
  width: 3.2rem;
  height: 3.2rem;
  border-radius: 50%;
  object-fit: cover;
  margin-right: 1.2rem;
  align-self: flex-start;
`;

export const ButtonSendCommentary = styled.button`
  padding: 0 1.1rem;
  background-color: #b2b2b2;
  border: none;
  height: 3.2rem;
  width: 8.5rem;
  color: #fff;
  border-radius: 6px;
  margin-left: 1.2rem;
  align-self: flex-end;
  font-size: 1.1rem;
  font-weight: 500;

  transition: background-color 0.2s ease-out;

  &:not(:disabled):hover {
    background-color :#098ee7;
  }

  &:not(:disabled) {
    background-color: #18a0fb;
    cursor: pointer;
  }
`;
