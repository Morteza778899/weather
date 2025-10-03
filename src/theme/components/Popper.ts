import { Theme } from "@mui/material";
import { Components } from "@mui/material/styles";

export const popper: Components<Theme>["MuiPopper"] = {
  styleOverrides: {
    root: ({ theme }) => ({
      backgroundColor: theme.palette.background.loginPaper.primary,
      paddingInline: 16,
      paddingBlock: 8,
      borderRadius: 8,
      boxShadow: `0px 5px 5px -3px rgba(0,0,0,0.2),
                  0px 8px 10px 1px rgba(0,0,0,0.14),
                  0px 3px 14px 2px rgba(0,0,0,0.12)`,
    }),
  },
};
