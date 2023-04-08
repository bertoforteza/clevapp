import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`

*, 
::before,
::after {
  box-sizing: border-box;
}

html {
  font-family: "Work Sans", sans-serif;
}

body {
  background-color: ${(props) => props.theme.colors.ink.light}
}

body, h1, h2, h3, ul, li, p, span {
  margin: 0;
}

ol, ul {
  list-style: none;
  padding: 0;
}

:focus-visible {
    outline: none;
  }
`;

export default GlobalStyle;
