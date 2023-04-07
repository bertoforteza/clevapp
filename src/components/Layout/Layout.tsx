import { Outlet } from "react-router-dom";
import { useAppSelector } from "../../store/hooks";
import Header from "../Header/Header";
import Modal from "../Modal/Modal";
import LayoutStyled from "./LayoutStyled";

const Layout = (): JSX.Element => {
  const {
    modal: { isError, isOpen, message },
  } = useAppSelector(({ ui }) => ui);

  return (
    <LayoutStyled>
      {isOpen && <Modal isError={isError} message={message} />}
      <Header />
      <div className="outlet-container">
        <Outlet />
      </div>
    </LayoutStyled>
  );
};

export default Layout;
