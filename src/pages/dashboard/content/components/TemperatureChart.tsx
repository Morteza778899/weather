import { Box, Skeleton, Typography } from "@mui/material";
import { useTranslation } from "react-i18next";
import { useLanguage } from "../../../../context/language";
import { useWeather } from "../../../../context/weather";
import TemperatureAreaChart from "./TemperatureAreaChart";
import { useChartData } from "../../../../hooks/useChartData";

const TemperatureChart = () => {
  const { t } = useTranslation();
  const { language } = useLanguage();
  const isRTL = language === "fa";
  const { weatherData: data, isLoading } = useWeather();

  // Get chart data and calculations from custom hook
  const { displayData, minTemp, maxTemp, tempRange } = useChartData(data, isRTL);

  return (
    <>
      <Typography variant="h4" mb={2}>
        {t("DASHBOARD.HOURLY_TEMPERATURE")}
      </Typography>
      <Box
        sx={{
          width: "100%",
          height: 155,
        }}
      >
        {isLoading ? (
          <Skeleton
            variant="rectangular"
            height={155}
            sx={{ borderRadius: "12px" }}
          />
        ) : (
          <TemperatureAreaChart
            data={displayData}
            isRTL={isRTL}
            minTemp={minTemp}
            maxTemp={maxTemp}
            tempRange={tempRange}
          />
        )}
      </Box>
    </>
  );
};

export default TemperatureChart;
