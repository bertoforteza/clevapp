import "styled-components";

declare module "styled-components" {
  export interface DefaultTheme {
    colors: {
      primary: {
        base: string;
      };
      secondary: {
        base: string;
      };
      ink: {
        dark: string;
        base: string;
        light: string;
      };
    };
  }
}
