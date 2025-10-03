import { Stack, ToggleButton, ToggleButtonGroup, Typography } from "@mui/material";
import { useTranslation } from "react-i18next";
import { useTheme } from "../../../../context/theme";
import LightModeOutlinedIcon from "@mui/icons-material/LightModeOutlined";
import DarkModeOutlinedIcon from "@mui/icons-material/DarkModeOutlined";

export function ThemeToggle() {
  const { t } = useTranslation();
  const { mode, toggleColorMode } = useTheme();

  return (
    <Stack direction="column" gap={0.75}>
      <Typography variant="h5">{t("COMMON.MODE")}</Typography>
      <ToggleButtonGroup
        value={mode}
        exclusive
        onChange={toggleColorMode}
        color="primary"
        sx={{
          width: 1,
          height: 42,
          "& button": {
            textTransform: "none",
            gap: 1,
          },
        }}
        fullWidth
      >
        <ToggleButton value="light">
          <LightModeOutlinedIcon fontSize="inherit" />
          {t("COMMON.THEME.LIGHT")}
        </ToggleButton>
        <ToggleButton value="dark">
          <DarkModeOutlinedIcon fontSize="inherit" />
          {t("COMMON.THEME.DARK")}
        </ToggleButton>
      </ToggleButtonGroup>
    </Stack>
  );
}

