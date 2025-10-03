import { WeatherResponse } from '../services/api/weather';
import { useMemo } from "react";
import { format, parseISO } from "date-fns";

interface ChartData {
  time: string;
  temp: number;
}

interface UseChartDataReturn {
  chartData: ChartData[];
  displayData: ChartData[];
  minTemp: number;
  maxTemp: number;
  tempRange: number[];
}

export const useChartData = (
  data: WeatherResponse | null,
  isRTL: boolean
): UseChartDataReturn => {
  // Memoize chart data calculations
  const { chartData, displayData } = useMemo(() => {
    if (!data) return { chartData: [], displayData: [] };

    // Create temperature data for every 2 hours
    const chartData = data.hourly.time
      .slice(0, 24)
      .filter((_, index) => index % 2 === 0) // Take every other hour
      .map((time, index) => ({
        time: format(parseISO(time), "HH:mm"),
        temp: Math.round(data.hourly.temperature_2m[index * 2]), // Multiply by 2 to get correct temperature index
      }));

    // Reverse data for RTL languages
    const displayData = isRTL ? [...chartData].reverse() : chartData;

    return { chartData, displayData };
  }, [data, isRTL]);

  // Calculate temperature range and ticks for Y axis
  const { minTemp, maxTemp, tempRange } = useMemo(() => {
    if (!chartData?.length) {
      const minTemp = 0,
        maxTemp = 30;
      return {
        minTemp,
        maxTemp,
        tempRange: [...Array(5)].map(
          (_, i) => minTemp + i * ((maxTemp - minTemp) / 4)
        ),
      };
    }

    const temps = chartData.map((d) => d.temp);
    const minTemp = Math.floor(Math.min(...temps) / 10) * 10;
    const maxTemp = Math.ceil(Math.max(...temps) / 10) * 10;

    return {
      minTemp,
      maxTemp,
      tempRange: [...Array(5)].map(
        (_, i) => minTemp + i * ((maxTemp - minTemp) / 4)
      ),
    };
  }, [chartData]);

  return {
    chartData,
    displayData,
    minTemp,
    maxTemp,
    tempRange,
  };
};
