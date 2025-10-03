import { Theme } from "@mui/material";
import { Components } from "@mui/material/styles";

export const paper: Partial<Components<Theme>> = {
  MuiPaper: {
    styleOverrides: {
      root: ({ theme }) => ({
        "--Paper-overlay": "unset !important",
        "--Paper-shadow": "unset !important",
        "&:not(.MuiAppBar-root):not(.MuiAutocomplete-paper):not(.MuiPopover-paper):not(.MuiAlert-root)":
          {
            borderRadius: 24,
            backgroundColor: theme.palette.background.paper,
            boxShadow: "0px 4px 10px 0px rgba(0,0,0,0.15)",
            paddingInline: 24,
            paddingBlock: 20,
          },
        "&.MuiAutocomplete-paper": {
          backgroundColor: "inherit",
        },
      }),
    },
  },
};
