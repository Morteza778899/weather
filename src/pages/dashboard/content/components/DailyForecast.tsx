import { Skeleton, Typography } from "@mui/material";
import { useMemo, useCallback } from "react";
import { useTranslation } from "react-i18next";
import { useLanguage } from "../../../../context/language";
import { useWeather } from "../../../../context/weather";
import { format, parseISO } from "date-fns";
import moment from "moment-jalaali";
import DayCard from "./DayCard";
import ScrollableContent from "./ScrollableContent";

const DailyForecast = () => {
  const { t } = useTranslation();
  const { language } = useLanguage();
  const isRTL = language === "fa";
  const { weatherData: data, isLoading } = useWeather();

  // Handle scroll ref for RTL mode
  const handleScrollRef = useCallback((scrollElement: HTMLElement | null) => {
    if (isRTL && scrollElement && !isLoading && data) {
      setTimeout(() => {
        const scrollContainer = scrollElement.querySelector(".ps");
        if (scrollContainer) {
          scrollContainer.scrollLeft = scrollContainer.scrollWidth;
        }
      }, 0);
    }
  }, [isRTL, isLoading, data]);

  // Create daily forecast data
  const forecastData = useMemo(() => {
    if (!data) return [];
    
    return data.daily.time
      .slice(0, 14) // Get 14 days
      .map((time, index) => {
        const date = parseISO(time);
        let dayName;

        if (isRTL) {
          const jDate = moment(date);
          dayName =
            index === 0 ? t("DASHBOARD.DAYS.TODAY") : jDate.format("dddd");
        } else {
          dayName =
            index === 0
              ? t("DASHBOARD.DAYS.TODAY")
              : format(date, "EEE").toUpperCase();
        }

        return {
          day: dayName,
          temp: Math.round(data.daily.temperature_2m_max[index]),
          precipProb: data.daily.precipitation_probability_max[index],
        };
      });
  }, [data, isRTL, t]);

  // Render loading skeletons
  const renderSkeletons = () => (
    [...Array(14)].map((_, index) => (
      <Skeleton
        key={index}
        variant="rectangular"
        height={266}
        width={104}
        sx={{ borderRadius: "24px" }}
      />
    ))
  );

  // Render forecast cards
  const renderForecastCards = () => (
    forecastData?.map((day, index) => (
      <DayCard
        key={index}
        day={day.day}
        temp={day.temp}
        precipProb={day.precipProb}
      />
    ))
  );

  return (
    <>
      <Typography variant="h3" fontSize="24px" fontWeight={600} mb={4}>
        {t("DASHBOARD.14_DAYS_FORECAST")}
      </Typography>

      <ScrollableContent isRTL={isRTL} onScrollRef={handleScrollRef}>
        {isLoading ? renderSkeletons() : renderForecastCards()}
      </ScrollableContent>
    </>
  );
};

export default DailyForecast;
