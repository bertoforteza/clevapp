import LoginForm from "../../components/LoginForm/LoginForm";
import LoginPageStyled from "./LoginPageStyled";

const LoginPage = (): JSX.Element => {
  return (
    <LoginPageStyled>
      <h2 className="login-title">login</h2>
      <LoginForm />
    </LoginPageStyled>
  );
};

export default LoginPage;
