import { Autocomplete, TextField, useMediaQuery } from "@mui/material";
import { useTranslation } from "react-i18next";
import { getCitySuggestions } from "../../../../data/cities";
import { useWeather } from "../../../../context/weather";
import { useLanguage } from "../../../../context/language";

export function LocationSearch() {
  const { t } = useTranslation();
  const { selectedCity, setSelectedCity } = useWeather();
  const { language } = useLanguage();
  const isRTL = language === "fa";
  const isMobile = useMediaQuery("(max-width: 600px)");

  return (
    <Autocomplete
      disableClearable
      value={selectedCity}
      options={getCitySuggestions("")}
      onChange={(_, newValue) => setSelectedCity(newValue)}
      getOptionLabel={(option) => {
        // In Persian language: show Persian name if available, otherwise show English name
        // In English language: only show English name and country
        return isRTL
          ? `${
              option.nativeName
                ? `${option.nativeName} (${option.name})`
                : option.name
            }, ${option.country}`
          : `${option.name}, ${option.country}`;
      }}
      renderInput={(params) => (
        <TextField
          {...params}
          label={t("DASHBOARD.SEARCH_YOUR_LOCATION")}
          sx={{ width: isMobile ? 1 : 295 }}
          slotProps={{
            input: {
              ...params.InputProps,
              type: "search",
              sx: { height: 40 },
            },
          }}
        />
      )}
    />
  );
}
