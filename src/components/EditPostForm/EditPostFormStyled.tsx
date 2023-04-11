import styled from "styled-components";

const EditPostFormStyled = styled.form`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  background-color: ${(props) => props.theme.colors.secondary.base};
  border-radius: ${(props) => props.theme.borderRadius.small};
  padding: 1rem;
  min-height: 60vh;
  max-width: 800px;
  margin: 0 auto;

  .edit-form {
    &__title {
      font-size: 1.5rem;
      color: ${(props) => props.theme.colors.primary.base};
    }

    &__label {
      text-transform: uppercase;
      font-weight: ${(props) => props.theme.fontWeights.bold};
      font-size: 1.2rem;
      color: ${(props) => props.theme.colors.ink.light};
    }

    &__group {
      display: flex;
      flex-direction: column;
      gap: 0.5rem;
    }

    &__field {
      background-color: ${(props) => props.theme.colors.ink.light};
      color: ${(props) => props.theme.colors.ink.dark};
      font-weight: ${(props) => props.theme.fontWeights.regular};
      font-size: 1.2rem;
      font-family: inherit;
      border: 2px solid ${(props) => props.theme.colors.secondary.base};
      border-radius: ${(props) => props.theme.borderRadius.small};
      padding: 0.7rem 1rem;
    }
  }
  .body-field {
    min-height: 20rem;
    resize: none;
  }

  .button {
    background-color: ${(props) => props.theme.colors.primary.base};
    color: ${(props) => props.theme.colors.secondary.base};
    text-transform: uppercase;
    font-size: 1.2rem;
    max-width: 200px;
    margin-top: 2rem;
  }
`;

export default EditPostFormStyled;
