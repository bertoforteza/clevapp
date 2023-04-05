import styled from "styled-components";

const PostCardStyled = styled.li`
  max-width: 25rem;
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
      vertical-align: super;
    }
  }

  .button {
    position: absolute;
    bottom: 1rem;
    right: 1rem;
  }
`;

export default PostCardStyled;
