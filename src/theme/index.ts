import { PaletteMode } from "@mui/material";
import { createTheme, ThemeOptions } from "@mui/material/styles";
import { createComponents, typography } from "./components";
import { createPalette, createDarkModePalette } from "./palette";
import "./types/theme.types";

// Create theme settings
const createThemeSettings = (mode: PaletteMode): ThemeOptions => ({
  palette: createPalette(mode),
  typography,
  components: createComponents(mode),
});

// Create a theme instance
const getTheme = (mode: PaletteMode) => createTheme(createThemeSettings(mode));

// Export theme creation function
export const createAppTheme = (mode: PaletteMode) => {
  const theme = getTheme(mode);

  // Add mode-specific overrides
  if (mode === "dark") {
    Object.assign(theme.palette, createDarkModePalette(theme.palette));
  }

  return theme;
};