import styled from "styled-components";

const LoginPageStyled = styled.main`
  .login-title {
    color: ${(props) => props.theme.colors.secondary.base};
    font-size: 1.5rem;
    font-weight: ${(props) => props.theme.fontWeights.bold};
    text-transform: uppercase;
  }
`;

export default LoginPageStyled;
