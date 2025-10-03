import { Stack, Typography } from "@mui/material";
import { useTranslation } from "react-i18next";
import { format, parseISO } from "date-fns";
import moment from "moment-jalaali";
import { useWeather } from "../../../../context/weather";
import { useLanguage } from "../../../../context/language";

const CurrentWeather = () => {
  const { t } = useTranslation();
  const { language } = useLanguage();
  const { weatherData: data, isLoading } = useWeather();
  const isRTL = language === "fa";

  if (isLoading || !data) {
    return null;
  }

  const currentDate = parseISO(data.current.time);

  let day, dateStr;
  if (isRTL) {
    const jDate = moment(currentDate);
    day = jDate.format("dddd");
    dateStr = jDate.format("jD jMMMM jYYYY");
  } else {
    day = format(currentDate, "EEEE");
    dateStr = format(currentDate, "MMMM d, yyyy");
  }

  const time = format(currentDate, "HH:mm");

  return (
    <Stack direction="column" spacing={2}>
      <Stack direction="column" spacing={0.5}>
        <Typography variant="h2">{day}</Typography>
        <Stack spacing={1.5}>
          <Typography variant="subtitle1">{dateStr}</Typography>
          <Typography variant="subtitle1">{time}</Typography>
        </Stack>
      </Stack>
      <Stack direction="column" spacing={0.5}>
        <Typography variant="h1">
          {Math.round(data.current.temperature_2m)}°C
        </Typography>
        <Stack spacing={1.5}>
          <Typography variant="subtitle1">
            {t("DASHBOARD.HIGH_LABEL", {
              label: Math.round(data.daily.temperature_2m_max[0]),
            })}
          </Typography>
          <Typography variant="subtitle1">
            {t("DASHBOARD.LOW_LABEL", {
              label: Math.round(data.daily.temperature_2m_min[0]),
            })}
          </Typography>
        </Stack>
      </Stack>
    </Stack>
  );
};

export default CurrentWeather;
