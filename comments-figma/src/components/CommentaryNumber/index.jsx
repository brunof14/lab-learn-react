import { Container } from "./styles";

export function CommentaryNumber({ numberComments = 0 }) {
  return (
    <Container>
      <p>{numberComments} comments</p>
    </Container>
  );
}
