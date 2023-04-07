import styled from "styled-components";

const ButtonStyled = styled.button`
  background-color: ${(props) => props.theme.colors.secondary.base};
  color: ${(props) => props.theme.colors.primary.base};
  border-radius: 15px;
  border: 2px solid transparent;
  font-size: 1rem;
  font-weight: 700;
  padding: 0.3rem 0.5rem;
  cursor: pointer;

  &:hover {
    background-color: ${(props) => props.theme.colors.secondary.light};
  }

  &:disabled {
    background-color: transparent;
    border: 2px solid ${(props) => props.theme.colors.primary.light};
    color: ${(props) => props.theme.colors.primary.light};
    cursor: auto;
  }
`;

export default ButtonStyled;
