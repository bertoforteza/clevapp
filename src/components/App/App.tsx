import HomePage from "../../pages/HomePage/HomePage";
import { useAppSelector } from "../../store/hooks";
import Header from "../Header/Header";
import Modal from "../Modal/Modal";

const App = () => {
  const {
    modal: { isError, isOpen, message },
  } = useAppSelector(({ ui }) => ui);

  return (
    <div className="container">
      {isOpen && <Modal isError={isError} message={message} />}
      <Header />
      <HomePage />
    </div>
  );
};

export default App;
