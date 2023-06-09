import styled from "styled-components";

const PostCardStyled = styled.li`
  max-width: 25rem;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  border: 5px solid ${(props) => props.theme.colors.secondary.base};
  border-radius: ${(props) => props.theme.borderRadius.medium};
  padding: 1rem;
  position: relative;
  cursor: pointer;

  .post-card {
    &__title {
      font-size: 2rem;
      font-weight: ${(props) => props.theme.fontWeights.bold};
      color: ${(props) => props.theme.colors.primary.base};
      padding-bottom: 1rem;
    }

    &__content {
      font-size: 1rem;
      font-weight: ${(props) => props.theme.fontWeights.regular};
      color: ${(props) => props.theme.colors.ink.dark};
      padding-bottom: 1.5rem;
    }

    &__author {
      font-size: 1.2rem;
      font-weight: ${(props) => props.theme.fontWeights.bold};
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
