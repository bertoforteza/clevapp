import { DefaultTheme } from "styled-components";

const mainTheme: DefaultTheme = {
  colors: {
    primary: {
      base: "#e62b70",
      light: "#f22e76",
      dark: "#a61f51",
    },
    secondary: {
      base: "#000147",
      light: "#000294",
      dark: "#000133",
    },
    ink: {
      dark: "#222222",
      base: "#9e9e9e",
      light: "#fff",
    },
    alert: {
      success: "#7ddf64",
      error: "#de574e",
    },
  },

  borderRadius: {
    small: "10px",
    medium: "15px",
    big: "20px",
  },

  fontWeights: {
    light: 300,
    regular: 400,
    medium: 500,
    semiBold: 600,
    bold: 700,
  },
};

export default mainTheme;
