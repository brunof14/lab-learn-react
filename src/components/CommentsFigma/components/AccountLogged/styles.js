import styled from "styled-components";
import { Container as ContainerWrapper } from "../../styles";
import { AvatarImg as Avatar } from "../CommentaryForm/styles";

export const Container = styled(ContainerWrapper)`
  padding: 2.4rem 1.2rem;
`;

export const FormUserData = styled.form`
  padding: 1.6rem 0;
  display: flex;
  gap: 1.6rem;

  .account-avatar {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 1.2rem;
  }

  .account-details {
    display: grid;
    flex: 1;
    grid-template-rows: repeat(2, 1fr);
    gap: 1.6rem;
    align-items: center;

    > div {
      display: flex;
      flex-direction: column;
      gap: 0.8rem;
    }
  }
`;

export const AvatarImg = styled(Avatar)`
  margin: 0;
  width: 12.6rem;
  height: 12.6rem;
`;

export const Label = styled.label`
  font-size: 1.2rem;
  color: #b3b3b3;
`;

export const Input = styled.input`
  font-size: 1.3rem;
  border: 1px solid #e6e6e6;
  padding: 0.8rem;
  color: #333;
  border-radius: 6px;

  outline: none;

  &:focus {
    border-color: #18a0fb;
  }
`;

export const LabelOpenFile = styled.label`
  border: none;
  background-color: transparent;
  color: #18a0fb;
  cursor: pointer;
  font-size: 1.3rem;

  &:hover {
    color: #098ee7;
  }
`;

export const InputFile = styled.input`
  display: none;
`;
