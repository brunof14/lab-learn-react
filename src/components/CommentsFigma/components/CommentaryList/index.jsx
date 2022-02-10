import { AvatarImg } from "../CommentaryForm/styles";
import {
  Container,
  CommentaryItem,
  Content,
  CommentAuthor,
  Comment,
} from "./styles";

export function CommentaryList({ comments }) {
  function makeCommentsItemList(comments) {
    return comments.map((comment) => {
      const { author } = comment;

      return (
        <CommentaryItem key={comment.id}>
          <AvatarImg src={author.avatarUrl} alt={author.name} />
          <Content>
            <CommentAuthor>
              <span className="author-name">{author.name}</span>
              <span className="at">{author.at}</span>
              <span className="dot">·</span>
              <span className="time">{comment.time}</span>
            </CommentAuthor>
            <Comment>{comment.commentary}</Comment>
          </Content>
        </CommentaryItem>
      );
    });
  }

  return <Container>{comments && makeCommentsItemList(comments)}</Container>;
}
