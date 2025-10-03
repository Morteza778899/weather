import { Theme } from "@mui/material";
import { Components } from "@mui/material/styles";

export const chip: Components<Theme>["MuiChip"] = {
  styleOverrides: {
    root: {
      height: 40,
      borderRadius: "50px",
      paddingInline: 8,
    },
  },
};
