import styled from "styled-components";

const LoaderStyled = styled.div`
  position: fixed;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background-color: rgba(255, 255, 255, 0.6);

  .loader {
    width: 5.8px;
    height: 5.8px;
    border-radius: 50%;
    color: #e23172;
    box-shadow: 27.4px 0 0 10.1px, 54.8px 0 0 4.3px, 82.19999999999999px 0 0 0;
    transform: translateX(-54.8px);
    animation: dots-ijr34dlg 0.5s infinite alternate linear;
  }

  @keyframes dots-ijr34dlg {
    50% {
      box-shadow: 27.4px 0 0 4.3px, 54.8px 0 0 10.1px,
        82.19999999999999px 0 0 4.3px;
    }

    100% {
      box-shadow: 27.4px 0 0 0, 54.8px 0 0 4.3px, 82.19999999999999px 0 0 10.1px;
    }
  }
`;

export default LoaderStyled;
