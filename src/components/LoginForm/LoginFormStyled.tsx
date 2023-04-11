import styled from "styled-components";

const RegisterFormStyled = styled.form`
  display: flex;
  flex-direction: column;

  .login-form {
    &__container {
      display: flex;
      flex-direction: column;
    }

    &__form-group {
      display: flex;
      flex-direction: column;
      gap: 0.5rem;
      color: ${(props) => props.theme.colors.primary.base};
      font-size: 1.5rem;
      font-weight: ${(props) => props.theme.fontWeights.bold};
      padding: 0.5rem 0;
    }

    &__label {
      text-transform: uppercase;
    }

    &__field {
      background-color: ${(props) => props.theme.colors.ink.light};
      color: ${(props) => props.theme.colors.ink.dark};
      font-weight: ${(props) => props.theme.fontWeights.regular};
      font-size: 1.2rem;
      border: 2px solid ${(props) => props.theme.colors.secondary.base};
      border-radius: ${(props) => props.theme.borderRadius.small};
      padding: 0.5rem 1rem;
      width: 20rem;

      &:focus {
        border: 2px solid ${(props) => props.theme.colors.primary.base};
      }
    }
  }

  button {
    margin-top: 2rem;
    max-width: 10rem;
  }
`;

export default RegisterFormStyled;
