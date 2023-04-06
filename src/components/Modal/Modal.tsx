import { useEffect } from "react";
import { useAppDispatch } from "../../store/hooks";
import ModalStyled from "./ModalStyled";
import { closeModalActionCreator } from "../../store/features/ui/uiSlice";
import { ReactComponent as Success } from "../../assets/success-icon.svg";
import { ReactComponent as Alert } from "../../assets/alert-icon.svg";

interface ModalProps {
  isError: boolean;
  message: string;
}

const Modal = ({ isError, message }: ModalProps): JSX.Element => {
  const dispatch = useAppDispatch();

  useEffect(() => {
    const timeoutId = setTimeout(() => {
      dispatch(closeModalActionCreator());
      clearTimeout(timeoutId);
    }, 3000);
  }, [dispatch]);

  return (
    <ModalStyled className={isError ? "modal-error" : "modal-success"}>
      {isError ? <Alert /> : <Success />}
      <span className="modal-text">{message}</span>
    </ModalStyled>
  );
};

export default Modal;
