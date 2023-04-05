import styled from "styled-components";

const ButtonStyled = styled.button`
  background-color: ${(props) => props.theme.colors.secondary.base};
  color: ${(props) => props.theme.colors.primary.base};
  border-radius: 15px;
  font-size: 1rem;
  font-weight: 700;
  padding: 0.3rem 0.5rem;
  border: none;
  cursor: pointer;

  &:hover {
    background-color: ${(props) => props.theme.colors.secondary.light};
  }
`;

export default ButtonStyled;
