import "styled-components";

declare module "styled-components" {
  export interface DefaultTheme {
    colors: {
      primary: {
        base: string;
        light: string;
        dark: string;
      };
      secondary: {
        base: string;
        light: string;
        dark: string;
      };
      ink: {
        dark: string;
        base: string;
        light: string;
      };
      alert: {
        success: string;
        error: string;
      };
    };
  }
}
