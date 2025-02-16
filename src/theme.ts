// theme.ts
import { DefaultTheme } from "styled-components";

export const theme: DefaultTheme = {
  colors: {
    primary: {
      light: "#0b0e3a",
      medium: "#060725",
      dark: "#020318",
    },
    secondary: {
      light: "#ef4c84",
      medium: "#d31450",
      dark: "#8c1038",
    },
    accent: {
      light: "#00bfc1",
      medium: "#009598",
      dark: "#006c6e",
    },
    neutrals: {
      lightest: "#f0f0f2",
      extraLight: "#e0e2e6",
      light: "#c0c2c8",
      medium: "#9ea0a5",
      dark: "#7f8185",
      extraDark: "#5e5f63",
      darkest: "#202122",
    },
  },
};

// Extend the DefaultTheme interface
declare module "styled-components" {
  export interface DefaultTheme {
    colors: {
      primary: {
        light: string;
        medium: string;
        dark: string;
      };
      secondary: {
        light: string;
        medium: string;
        dark: string;
      };
      accent: {
        light: string;
        medium: string;
        dark: string;
      };
      neutrals: {
        lightest: string;
        extraLight: string;
        light: string;
        medium: string;
        dark: string;
        extraDark: string;
        darkest: string;
      };
    };
  }
}
