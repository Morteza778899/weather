import {
  Button,
  ClickAwayListener,
  Divider,
  Popper,
  Stack,
  ToggleButton,
} from "@mui/material";
import { useState } from "react";
import SettingsOutlinedIcon from "@mui/icons-material/SettingsOutlined";
import { LogoutRounded } from "@mui/icons-material";
import { useTranslation } from "react-i18next";
import { LanguageSwitcher } from "../../../../global/LanguageSwitcher";
import { ThemeToggle } from "./ThemeToggle";

interface SettingsMenuProps {
  onLogout: () => void;
}

export function SettingsMenu({ onLogout }: SettingsMenuProps) {
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const { t } = useTranslation();
  const open = Boolean(anchorEl);

  const handleToggle = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(open ? null : event.currentTarget);
  };

  return (
    <>
      <ToggleButton
        aria-label="settings"
        value="check"
        color="primary"
        selected={open}
        onClick={handleToggle}
        sx={{ width: 40, height: 40 }}
      >
        <SettingsOutlinedIcon />
      </ToggleButton>

      <Popper
        open={open}
        anchorEl={anchorEl}
        placement="bottom-start"
        sx={{
          width: 220,
          height: 240,
          mt: "8px !important",
        }}
      >
        <ClickAwayListener onClickAway={() => anchorEl && setAnchorEl(null)}>
          <Stack direction="column" divider={<Divider sx={{ my: 1.25 }} />}>
            <ThemeToggle />
            <LanguageSwitcher type="button" />
            <Button
              variant="text"
              color="inherit"
              onClick={onLogout}
              startIcon={<LogoutRounded />}
              sx={{ justifyContent: "flex-start", alignItems: "center" }}
            >
              {t("COMMON.EXIT")}
            </Button>
          </Stack>
        </ClickAwayListener>
      </Popper>
    </>
  );
}
