import { useTranslation } from "react-i18next";
import {
  Select,
  MenuItem,
  SelectChangeEvent,
  FormControl,
  InputLabel,
  ToggleButton,
  Stack,
  Typography,
  ToggleButtonGroup,
} from "@mui/material";
import { useLanguage } from "../context/language";

interface LanguageSwitcherProps {
  type: "dropdown" | "button";
}

export function LanguageSwitcher({ type }: LanguageSwitcherProps) {
  const { t } = useTranslation();
  const { language, setLanguage } = useLanguage();

  const handleLanguageChange = (event: SelectChangeEvent<string>) => {
    const newLanguage = typeof event === "string" ? event : event.target.value;
    setLanguage(newLanguage);
  };

  return type === "dropdown" ? (
    <FormControl>
      <InputLabel variant="standard" htmlFor="uncontrolled-native">
        {t("COMMON.LANGUAGE")}
      </InputLabel>
      <Select
        value={language}
        onChange={handleLanguageChange}
        variant="standard"
        aria-label="language selector"
        size="small"
        sx={{
          minWidth: 220,
        }}
      >
        <MenuItem value="en">English</MenuItem>
        <MenuItem value="fa">فارسی</MenuItem>
      </Select>
    </FormControl>
  ) : (
    <Stack direction="column" gap={0.75}>
      <Typography variant="h5">{t("COMMON.LANGUAGE")}</Typography>
      <ToggleButtonGroup
        value={language}
        exclusive
        onChange={(_, value) => handleLanguageChange(value)}
        sx={{
          width: 1,
          height: 42,
          "& button": {
            textTransform: "none",
            gap: 1,
          },
        }}
        color="primary"
        fullWidth
      >
        <ToggleButton value="en">En</ToggleButton>
        <ToggleButton value="fa">Fa</ToggleButton>
      </ToggleButtonGroup>
    </Stack>
  );
}
