import styled from "styled-components";

const HomePageStyled = styled.main`
  .title {
    font-size: 2rem;
    font-weight: 700;
    color: ${(props) => props.theme.colors.secondary.base};
    padding-bottom: 1rem;
  }
`;
export default HomePageStyled;
