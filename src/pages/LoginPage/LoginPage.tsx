import { Navigate } from "react-router-dom";
import LoginForm from "../../components/LoginForm/LoginForm";
import { useAppSelector } from "../../store/hooks";
import LoginPageStyled from "./LoginPageStyled";

const LoginPage = (): JSX.Element => {
  const { isLogged } = useAppSelector(({ user }) => user);
  return isLogged ? (
    <Navigate to={"/"} />
  ) : (
    <LoginPageStyled>
      <h2 className="login-title">login</h2>
      <LoginForm />
    </LoginPageStyled>
  );
};

export default LoginPage;
