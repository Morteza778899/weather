import { Theme } from "@mui/material";
import { Components } from "@mui/material/styles";

export const CssBaseline: Components<Theme>["MuiCssBaseline"] = {
  styleOverrides: (theme: Theme) => ({
    body: {
      "& #root": {
        backgroundColor: theme.palette.background.default,
        width: "100%",
      },
    },
    "& .MuiTypography-root": {
      color: theme.palette.text.primary,
    },
  }),
};
