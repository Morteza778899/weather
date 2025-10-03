import { PaletteMode } from "@mui/material";
import { ThemeOptions } from "@mui/material/styles";
import {
  surfaceColors,
  primaryColors,
  infoColors,
  successColors,
  warningColors,
  errorColors,
} from "./colors";

export const createPalette = (mode: PaletteMode): ThemeOptions["palette"] => ({
  mode,
  surface: surfaceColors,
  primary: primaryColors,
  info: infoColors,
  success: successColors,
  warning: warningColors,
  error: errorColors,
  background: {
    default: "#F3FAFE",
    loginPaper: {
      primary: "#ffffff",
      secondary: "#d3e1e7",
    },
    paper: "#E1E9EE",
    card: "#cdd9e0",
  },
  text: {
    primary: "#003464", // primary.900
    dark: "#050f24",
    secondary: "#000000",
  },
  border: "#0000003b",
});

export const createDarkModePalette = (palette: ThemeOptions["palette"]) => ({
  ...palette,
  background: {
    ...palette?.background,
    default: "#151D32",
    loginPaper: {
      primary: "#292F45",
      secondary: "#404961",
    },
    paper: "#292f45",
    card: "#3f4861",
  },
  border: "#757575",
  text: {
    ...palette?.text,
    primary: "#f3f4f7",
  },
  surface: {
    ...palette?.surface,
    main: "#3D4852",
    light: "#62707C",
    dark: "#1C1B22",
  },
});
