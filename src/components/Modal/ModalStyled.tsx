import styled from "styled-components";

const ModalStyled = styled.div`
  position: fixed;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-around;
  top: 50%;
  left: 50%;
  z-index: 3;
  max-width: 20rem;
  max-height: 20rem;
  min-width: 15rem;
  min-height: 15rem;
  text-align: center;
  transform: translate(-50%, -50%);
  padding: 0.5rem 1.5rem;
  border-radius: 15px;
  border: 3px solid ${(props) => props.theme.colors.secondary.base};

  .modal-text {
    color: ${(props) => props.theme.colors.secondary.base};
    font-size: 1.25rem;
    font-weight: 700;
  }

  &.modal-error {
    background-color: ${(props) => props.theme.colors.alert.error};
  }
  &.modal-success {
    background-color: ${(props) => props.theme.colors.alert.success};
  }
`;

export default ModalStyled;
