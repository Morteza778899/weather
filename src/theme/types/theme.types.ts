import { PaletteMode } from "@mui/material";

declare module "@mui/material/styles" {
  interface Palette {
    surface: {
      main: string;
      light: string;
      dark: string;
      50: string;
      100: string;
      200: string;
      300: string;
      400: string;
      500: string;
      600: string;
      700: string;
      800: string;
      900: string;
      A100: string;
      A200: string;
      A400: string;
      A700: string;
    };
    border: string;
    background: {
      default: string;
      paper: string;
      card: string;
      loginPaper: {
        primary: string;
        secondary: string;
      };
    };
    text: TypeText;
  }

  interface PaletteOptions {
    surface: {
      main: string;
      light: string;
      dark: string;
      50: string;
      100: string;
      200: string;
      300: string;
      400: string;
      500: string;
      600: string;
      700: string;
      800: string;
      900: string;
      A100: string;
      A200: string;
      A400: string;
      A700: string;
    };
    border: string;
  }

  interface TypeText {
    primary: string;
    dark: string;
    secondary: string;
  }

  interface TypeBackground {
    default: string;
    paper: string;
    card: string;
    loginPaper: {
      primary: string;
      secondary: string;
    };
  }
}

export type { PaletteMode };
