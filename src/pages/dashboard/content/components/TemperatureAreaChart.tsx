import { useTheme } from "@mui/material";
import {
  AreaChart,
  Area,
  XAxis,
  YAxis,
  CartesianGrid,
  ResponsiveContainer,
  Tooltip,
} from "recharts";
import ChartGradients from "./ChartGradients";

interface TemperatureAreaChartProps {
  data: Array<{ time: string; temp: number }>;
  isRTL: boolean;
  minTemp: number;
  maxTemp: number;
  tempRange: number[];
}

const TemperatureAreaChart = ({
  data,
  isRTL,
  minTemp,
  maxTemp,
  tempRange,
}: TemperatureAreaChartProps) => {
  const theme = useTheme();

  return (
    <ResponsiveContainer width="100%" height="100%">
      <AreaChart
        data={data}
        margin={{
          top: 10,
          right: isRTL ? -15 : 0,
          left: isRTL ? 14 : -15,
          bottom: 0,
        }}
      >
        <ChartGradients />

        {/* Grid lines with dotted style */}
        <CartesianGrid
          strokeDasharray="3 3"
          vertical={false}
          stroke="#afbcc4"
        />

        {/* X-axis configuration */}
        <XAxis
          dataKey="time"
          axisLine={false}
          tickLine={false}
          tick={{ fill: "#64748B", fontSize: 12 }}
          dy={10}
          interval={0} // Show all points since we already filtered them
        />

        {/* Y-axis configuration */}
        <YAxis
          axisLine={false}
          tickLine={false}
          orientation={isRTL ? "right" : "left"}
          tick={{
            fill: "#64748B",
            fontSize: 12,
            textAnchor: isRTL ? "start" : "end",
          }}
          domain={[minTemp, maxTemp]}
          ticks={tempRange}
          tickFormatter={(value) => `${value}°c`}
          dx={isRTL ? 30 : -10}
        />

        {/* Tooltip configuration */}
        <Tooltip
          contentStyle={{
            backgroundColor: theme.palette.background.loginPaper.secondary,
            border: "none",
            borderRadius: 8,
            boxShadow: "0 2px 8px rgba(0,0,0,0.1)",
            color: theme.palette.text.primary,
          }}
          formatter={() => [][0]}
          labelFormatter={(label, payload) =>
            `${label} - ${payload[0].value}°c`
          }
          cursor={{ stroke: "#94A3B8" }}
        />

        {/* Area under the line with gradient */}
        <Area
          type="linear"
          dataKey="temp"
          stroke="none"
          fill="url(#areaGradient)"
          strokeWidth={0}
        />

        {/* Main line with gradient */}
        <Area
          type="linear"
          dataKey="temp"
          stroke="url(#lineGradient)"
          strokeWidth={3}
          fill="none"
        />
      </AreaChart>
    </ResponsiveContainer>
  );
};

export default TemperatureAreaChart;
