import { Box, Stack, Typography } from "@mui/material";
import { useTranslation } from "react-i18next";
import footerLogo from "../../../assets/footer logo.svg";
import MailOutlineIcon from "@mui/icons-material/MailOutline";
import CalendarMonthIcon from "@mui/icons-material/CalendarMonth";
import { useTheme } from "../../../context/theme";
import { useLanguage } from "../../../context/language";

const Footer = () => {
  const { t } = useTranslation();
  const { language } = useLanguage();
  const { mode } = useTheme();
  return (
    <Stack
      component="footer"
      direction={{ xs: "column-reverse", md: "row" }}
      justifyContent={{ xs: "center", md: "space-between" }}
      height={{ xs: "130px", sm: "106px" }}
      sx={{
        background:
          mode === "light"
            ? "linear-gradient(90deg, rgba(243, 250, 254, 1) 0%, rgba(204, 221, 221, 0.62) 50%, rgba(243, 250, 254, 1) 100%)"
            : "linear-gradient(90deg, rgba(41, 47, 69, 1) 0%, rgba(63, 72, 97, 1) 50%, rgba(21, 29, 50, 1) 100%)",
        alignItems: "center",
        px: 4,
      }}
    >
      <Stack spacing={2} alignItems="center">
        <Box
          component="img"
          src={footerLogo}
          alt="Nadin Sadr Aria"
          height={{ xs: "40px", sm: "50px" }}
        />
        <Typography variant="body1" fontSize={{ xs: "12px", sm: "14px" }}>
          {t("DASHBOARD.COPYRIGHT")}
        </Typography>
      </Stack>

      <Stack
        direction={{ xs: "column", sm: "row" }}
        spacing={{ xs: 1, sm: 3 }}
        alignItems="center"
      >
        <Stack spacing={0.5} alignItems="center">
          <MailOutlineIcon />
          <Typography variant="body1">
            {t("DASHBOARD.CONTACT_US_LABEL", { label: "info@nadin.ir" })}
          </Typography>
        </Stack>
        <Stack spacing={0.5} alignItems="center">
          <CalendarMonthIcon />
          <Typography variant="body1">
            {language === "fa"
              ? "12.25 شنبه 2 دی 1402"
              : "12:25 , Monday 23 December 2023"}
          </Typography>
        </Stack>
      </Stack>
    </Stack>
  );
};

export default Footer;
