import styled from "styled-components";

const DetailPostPageStyled = styled.article`
  background-color: ${(props) => props.theme.colors.secondary.base};
  border-radius: ${(props) => props.theme.borderRadius.medium};
  padding: 1.5rem;
  min-height: 60vh;
  max-width: 800px;
  display: flex;
  flex-direction: column;
  gap: 1rem;
  margin: 0 auto;
  margin-top: 1rem;

  .detail-page {
    &__title {
      font-size: 2rem;
      font-weight: ${(props) => props.theme.fontWeights.bold};
      color: ${(props) => props.theme.colors.primary.base};
      padding-bottom: 1rem;
      text-transform: capitalize;
    }

    &__content {
      font-size: 1.5rem;
      font-weight: ${(props) => props.theme.fontWeights.regular};
      color: ${(props) => props.theme.colors.ink.light};
      padding-bottom: 1.5rem;
      background-color: ${(props) => props.theme.colors.primary.base};
      border-radius: ${(props) => props.theme.borderRadius.small};
      padding: 2rem 1rem;
      margin-bottom: 1rem;
    }

    &__author {
      font-size: 1.2rem;
      font-weight: ${(props) => props.theme.fontWeights.bold};
      color: ${(props) => props.theme.colors.ink.light};
    }

    &__actions {
      display: flex;
      justify-content: space-around;
      gap: 1rem;
    }
  }

  .button {
    background-color: ${(props) => props.theme.colors.primary.base};
    color: ${(props) => props.theme.colors.secondary.base};
    text-transform: uppercase;
    font-size: 1.2rem;
    width: 200px;
    margin-top: 2rem;
  }
`;

export default DetailPostPageStyled;
