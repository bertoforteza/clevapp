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

    borderRadius: {
      big: string;
      medium: string;
      small: string;
    };

    fontWeights: {
      light: number;
      regular: number;
      medium: number;
      semiBold: number;
      bold: number;
    };
  }
}
