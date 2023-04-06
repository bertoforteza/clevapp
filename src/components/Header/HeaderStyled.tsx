import styled from "styled-components";

const HeaderStyled = styled.header`
  display: flex;
  gap: 1.5rem;
  align-items: center;
  padding: 1rem 2rem;
  background-color: ${(props) => props.theme.colors.secondary.base};
  border-bottom: 5px solid ${(props) => props.theme.colors.primary.base};

  .header {
    &__title {
      color: ${(props) => props.theme.colors.primary.base};
      font-size: 2.5rem;
      font-weight: 700;
    }
  }
`;

export default HeaderStyled;
