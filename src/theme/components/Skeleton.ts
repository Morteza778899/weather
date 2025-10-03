import { Theme } from "@mui/material";
import { Components } from "@mui/material/styles";

export const skeleton: Components<Theme>["MuiSkeleton"] = {
  styleOverrides: {
    root: ({ theme }) => ({
      "&.Paper": {
        borderRadius: 24,
        backgroundColor: theme.palette.background.paper,
        boxShadow: "0px 4px 10px 0px rgba(0,0,0,0.15)",
        "-webkit-mask-image": "unset !important",
      },
    }),
  },
};
