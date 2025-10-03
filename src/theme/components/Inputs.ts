import { Theme } from "@mui/material";
import { Components } from "@mui/material/styles";

export const inputs: Partial<Components<Theme>> = {
  MuiOutlinedInput: {
    styleOverrides: {
      root: ({ theme }) => ({
        fontSize: "16px",
        fontWeight: 400,
        lineHeight: "24px",
        "& fieldset": {
          border: "1px solid",
          borderColor: theme.palette.border,
        },
      }),
      input: {
        padding: "12px 16px",
      },
    },
  },
  MuiFormLabel: {
    styleOverrides: {
      root: ({ theme }) => ({
        color: theme.palette.text.primary,
      }),
    },
  },
};
