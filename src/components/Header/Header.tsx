import { ReactComponent as Logo } from "../../assets/cleverpy-logo.svg";
import { ReactComponent as Logout } from "../../assets/logout-icon.svg";
import useUser from "../../hooks/useUser/useUser";
import { useAppSelector } from "../../store/hooks";
import Button from "../Button/Button";
import HeaderStyled from "./HeaderStyled";

const Header = () => {
  const { logoutUser } = useUser();
  const { isLogged } = useAppSelector(({ user }) => user);

  return (
    <HeaderStyled className="header">
      <div className="header-container">
        <Logo />
        <h1 className="header__title">Clevapp</h1>
      </div>
      {isLogged && <Button icon={<Logout />} action={logoutUser} />}
    </HeaderStyled>
  );
};

export default Header;
