import { Chip, Typography } from "@mui/material";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import { useWeather } from "../../../../context/weather";
import { useLanguage } from "../../../../context/language";

const WeatherLocation = () => {
  const { selectedCity } = useWeather();
  const { language } = useLanguage();
  const isRTL = language === "fa";

  if (!selectedCity) {
    return null;
  }

  // In Persian language: show Persian name if available, otherwise show English name
  // In English language: only show English name and country
  const cityName = isRTL
    ? selectedCity.nativeName || selectedCity.name
    : selectedCity.name;

  return (
    <Chip
      size="medium"
      sx={{ width: "fit-content" }}
      label={<Typography variant="h5">{cityName}</Typography>}
      icon={<LocationOnIcon />}
    />
  );
};

export default WeatherLocation;
