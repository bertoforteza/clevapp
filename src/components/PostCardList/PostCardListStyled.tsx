import styled from "styled-components";

const PostCardListStyled = styled.ul`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(20rem, 1fr));
  grid-auto-rows: 25rem;
  grid-gap: 1rem;
`;

export default PostCardListStyled;
