import {
  AppBar,
  Box,
  Stack,
  Toolbar,
  Typography,
  useMediaQuery,
} from "@mui/material";
import { useTranslation } from "react-i18next";
import { useNavigate } from "react-router-dom";
import LOGO from "../../../assets/Logo.svg";
import { SettingsMenu } from "./components/SettingsMenu";
import { useAuth } from "../../../context/auth";
import { LocationSearch } from "./components/LocationSearch";

export function Header() {
  const { logout } = useAuth();
  const navigate = useNavigate();
  const { t } = useTranslation();
  const isMobile = useMediaQuery("(max-width: 600px)");
  const handleLogout = () => {
    logout();
    navigate("/");
  };

  return (
    <AppBar
      position="static"
      sx={{
        backgroundColor: "background.default",
        height: 80,
        justifyContent: "center",
      }}
    >
      <Toolbar sx={{ gap: 1.5 }}>
        <Box component="img" sx={{ width: 56, height: 56 }} src={LOGO} />
        <Typography variant="h6" component="h6" sx={{ flexGrow: 1 }}>
          {t("DASHBOARD.TITLE")}
        </Typography>
        <Stack direction="row" spacing={2} alignItems="center">
          {!isMobile && <LocationSearch />}
          <SettingsMenu onLogout={handleLogout} />
        </Stack>
      </Toolbar>
    </AppBar>
  );
}
