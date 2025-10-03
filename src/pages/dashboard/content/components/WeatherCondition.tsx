import { Box, Stack, Typography } from "@mui/material";
import { useTranslation } from "react-i18next";
import { useLanguage } from "../../../../context/language";
import { useWeather } from "../../../../context/weather";
import CLOUDY_IMAGE from "../../../../assets/cloudy.svg";
import RAIN_IMAGE from "../../../../assets/rain.svg";
import SUN_IMAGE from "../../../../assets/sun.svg";
import { useMemo } from "react";

const WeatherCondition = () => {
  const { t } = useTranslation();
  const { language } = useLanguage();
  const { weatherData: data, isLoading } = useWeather();
  const isRTL = language === "fa";

  // Extract precipitation probability for dependency array
  const precipitationProbability = data?.hourly.precipitation_probability[0];

  // Memoize weather condition calculations
  const { condition, weatherIcon } = useMemo(() => {
    if (!data) {
      return {
        condition: "DASHBOARD.SUNNY",
        weatherIcon: SUN_IMAGE
      };
    }

    let condition = "DASHBOARD.SUNNY";
    let weatherIcon = SUN_IMAGE;

    // Check if precipitation probability is available and is a number
    const probability = typeof precipitationProbability === 'number' ? precipitationProbability : 0;

    if (probability > 60) {
      condition = "DASHBOARD.RAINY";
      weatherIcon = RAIN_IMAGE;
    } else if (probability > 30) {
      condition = "DASHBOARD.CLOUDY";
      weatherIcon = CLOUDY_IMAGE;
    }

    return { condition, weatherIcon };
  }, [data, precipitationProbability]);

  if (isLoading || !data) {
    return null;
  }

  return (
    <Stack direction="column" justifyContent="space-between">
      <Box
        component="img"
        height={130}
        src={weatherIcon}
        alt={condition.toLowerCase()}
      />
      <Stack direction="column" spacing={1}>
        <Typography
          variant="h2"
          fontWeight={400}
          textAlign={isRTL ? "left" : "right"}
        >
          {t(condition)}
        </Typography>
        <Typography variant="subtitle1" textAlign={isRTL ? "left" : "right"}>
          {t("DASHBOARD.FEELS_LIKE_LABEL", {
            label: Math.round(data.current.apparent_temperature),
          })}
        </Typography>
      </Stack>
    </Stack>
  );
};

export default WeatherCondition;
