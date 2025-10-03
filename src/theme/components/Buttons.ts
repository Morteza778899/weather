import { Theme } from "@mui/material";
import { Components } from "@mui/material/styles";

export const buttons: Partial<Components<Theme>> = {
  MuiButton: {
    styleOverrides: {
      sizeLarge: {
        height: "42px",
      },
    },
  },
  MuiButtonBase: {
    styleOverrides: {
      root: {
        minWidth: "unset !important",
        fontWeight: "400 !important",
        "&.MuiButton-contained": {
          fontWeight: "500 !important",
        },
      },
    },
  },
  MuiToggleButton: {
    styleOverrides: {
      root: ({ theme }) => ({
        border: "1px solid",
        borderRadius: 8,
        "&:not(.Mui-selected)": {
          borderColor: theme.palette.border,
        },
      }),
    },
  },
};
