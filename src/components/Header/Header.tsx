import { ReactComponent as Logo } from "../../assets/cleverpy-logo.svg";
import HeaderStyled from "./HeaderStyled";

const Header = () => {
  return (
    <HeaderStyled className="header">
      <Logo />
      <h1 className="header__title">Clevapp</h1>
    </HeaderStyled>
  );
};

export default Header;
