import { PaletteMode } from "@mui/material";
import { Components } from "@mui/material/styles";

export const createAppBar = (mode: PaletteMode): Components["MuiAppBar"] => ({
  styleOverrides: {
    root: {
      boxShadow:
        mode === "light"
          ? "0px 4px 10px 0px rgba(0, 0, 0, 0.15)"
          : "0px 4px 10px 0px rgba(166, 165, 165, 0.15)",
    },
  },
});
