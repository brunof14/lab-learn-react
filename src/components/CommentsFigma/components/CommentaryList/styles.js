import styled from 'styled-components'
import { AvatarImg } from '../CommentaryForm/styles'

export const CommentaryItem = styled.li`
  display: flex;
`

export const Content = styled.div`
  flex: 1;
  padding-bottom: 1.6rem;
  border-bottom: 1px solid #e6e6e6;
`

export const CommentAuthor = styled.p`
  font-size: 1.3rem;
  color: #000000cc;
  display: flex;
  align-items: center;

  .author-name {
    font-weight: 700;
  }

  span:not(.author-name) {
    color: #0000004d;
    font-size: 1.1rem;
  }

  .at {
    margin-left: 0.4rem;
  }

  .dot {
    margin: 0 0.4rem;
    font-weight: 600;
  }
`

export const Comment = styled.p`
  font-size: 1.3rem;
  margin-top: 0.8rem;
  line-height: 1.7;
  color: #000000cc;
`

export const Container = styled.ul`
  list-style: none;
  display: flex;
  flex-direction: column;
  gap: 1.6rem;
  padding: 1.6rem 1.2rem 0;

  --avatar-size: 3.2rem;

  & ${AvatarImg} {
    width: var(--avatar-size);
    height: var(--avatar-size);
  }

  & ${CommentAuthor} {
    height: var(--avatar-size);
  }
`