import { ThemeOptions } from "@mui/material/styles";

export const typography: ThemeOptions["typography"] = {
  fontFamily: [
    "Roboto",
    "Vazir",
    "Inter",
    "-apple-system",
    "BlinkMacSystemFont",
    '"Segoe UI"',
    '"Helvetica Neue"',
    "Arial",
    "sans-serif",
  ].join(","),
  h6: {
    fontSize: "12px",
    fontWeight: 400,
    lineHeight: "18px",
  },
  h5: {
    fontSize: "16px",
    fontWeight: 400,
    lineHeight: "24px",
  },
  h4: {
    fontSize: "18px",
    fontWeight: 700,
    lineHeight: "23px",
  },
  h3: {
    fontSize: "26px",
    fontWeight: 700,
    lineHeight: "30px",
  },
  h2: {
    fontSize: "32px",
    fontWeight: 500,
    lineHeight: "39px",
  },
  h1: {
    fontSize: "40px",
    fontWeight: 500,
    lineHeight: "47px",
  },
  body1: {
    fontSize: "14px",
    lineHeight: "20px",
  },
  subtitle1: {
    fontSize: "14px",
    lineHeight: "16px",
  },
};
