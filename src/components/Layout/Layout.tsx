import { Outlet } from "react-router-dom";
import { useAppSelector } from "../../store/hooks";
import Header from "../Header/Header";
import Modal from "../Modal/Modal";
import LayoutStyled from "./LayoutStyled";
import Loader from "../Loader/Loader";

const Layout = (): JSX.Element => {
  const {
    isLoading,
    modal: { isError, isOpen, message },
  } = useAppSelector(({ ui }) => ui);

  return (
    <LayoutStyled>
      {isLoading && <Loader />}
      {isOpen && <Modal isError={isError} message={message} />}
      <Header />
      <div className="outlet-container">
        <Outlet />
      </div>
    </LayoutStyled>
  );
};

export default Layout;
