import { Box, Stack, Typography } from "@mui/material";
import CLOUDY_IMAGE from "../../../../assets/cloudy.svg";
import SUN_IMAGE from "../../../../assets/sun.svg";
import RAIN_IMAGE from "../../../../assets/rain.svg";
import THUNDER_IMAGE from "../../../../assets/Thunder.svg";

// Helper function to get weather icon based on precipitation probability
const getWeatherIcon = (precipProb: number) => {
  if (precipProb > 60) {
    return THUNDER_IMAGE;
  } else if (precipProb > 30) {
    return RAIN_IMAGE;
  } else if (precipProb > 10) {
    return CLOUDY_IMAGE;
  }
  return SUN_IMAGE;
};

interface DayCardProps {
  day: string;
  temp: number;
  precipProb: number;
}

const DayCard = ({ day, temp, precipProb }: DayCardProps) => {
  return (
    <Stack
      direction="column"
      justifyContent="space-evenly"
      alignItems="center"
      spacing={2}
      sx={{
        borderRadius: "24px",
        height: 266,
        minWidth: 104,
        bgcolor: "background.card",
        py: 2,
      }}
    >
      <Box sx={{ textAlign: "center" }}>
        <Typography variant="body1" fontWeight={500} mb={1}>
          {day}
        </Typography>
        <Box
          sx={{
            width: "40px",
            height: "2px",
            background:
              "linear-gradient(90deg, rgba(54, 54, 54, 0) 0%, rgba(126, 126, 126, 1) 50%, rgba(54, 54, 54, 0) 100%)",
            margin: "0 auto",
          }}
        />
      </Box>
      <Box
        component="img"
        src={getWeatherIcon(precipProb)}
        sx={{ width: 72, height: 72 }}
        alt={`weather-${precipProb > 30 ? "rainy" : "sunny"}`}
      />
      <Typography variant="h4" fontWeight={500}>
        {temp}°C
      </Typography>
    </Stack>
  );
};

export default DayCard;
