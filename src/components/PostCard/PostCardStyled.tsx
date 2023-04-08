import styled from "styled-components";

const PostCardStyled = styled.li`
  max-width: 25rem;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  border: 5px solid ${(props) => props.theme.colors.secondary.base};
  border-radius: 15px;
  padding: 1rem;
  position: relative;

  .post-card {
    &__title {
      font-size: 2rem;
      font-weight: 700;
      color: ${(props) => props.theme.colors.primary.base};
      padding-bottom: 1rem;
    }

    &__content {
      font-size: 1rem;
      font-weight: 400;
      color: ${(props) => props.theme.colors.ink.dark};
      padding-bottom: 1.5rem;
    }

    &__author {
      font-size: 1.2rem;
      font-weight: 700;
      color: ${(props) => props.theme.colors.ink.dark};
    }
  }

  .button {
    position: absolute;
    bottom: 1rem;
    right: 1rem;
    display: flex;
  }
`;

export default PostCardStyled;
