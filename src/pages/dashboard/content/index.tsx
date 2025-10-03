import {
  Box,
  Grid,
  Paper,
  Skeleton,
  Stack,
  useMediaQuery,
} from "@mui/material";
import { useWeather } from "../../../context/weather";
import TemperatureChart from "./components/TemperatureChart";
import DailyForecast from "./components/DailyForecast";
import WeatherLocation from "./components/WeatherLocation";
import CurrentWeather from "./components/CurrentWeather";
import WeatherCondition from "./components/WeatherCondition";
import { LocationSearch } from "../header/components/LocationSearch";

const DashboardContent = () => {
  const isMobile = useMediaQuery("(max-width: 600px)");
  const { isLoading } = useWeather();

  return (
    <Box
      sx={{
        width: 1,
        maxWidth: 1300,
        marginInline: "auto",
        my: 4,
        px: { xs: 2, md: 4, lg: 6 },
      }}
    >
      <Grid container spacing={5}>
        {isMobile && (
          <Grid size={12}>
            <LocationSearch />
          </Grid>
        )}
        <Grid size={{ xs: 12, lg: 5 }}>
          {isLoading ? (
            <Skeleton animation='wave' variant="rectangular" className="Paper" height={234} />
          ) : (
            <Paper sx={{ height: 234, p: 3 }}>
              <Stack spacing={2} justifyContent="space-between">
                <Stack direction="column" spacing={2}>
                  <WeatherLocation />
                  <CurrentWeather />
                </Stack>
                <WeatherCondition />
              </Stack>
            </Paper>
          )}
        </Grid>
        <Grid size={{ xs: 12, lg: 7 }}>
          <Paper>
            <TemperatureChart />
          </Paper>
        </Grid>
        <Grid size={12}>
          <Paper>
            <DailyForecast />
          </Paper>
        </Grid>
      </Grid>
    </Box>
  );
};

export default DashboardContent;
