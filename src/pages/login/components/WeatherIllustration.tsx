import { Box, Grid, Stack } from "@mui/material";
import RAIN_IMAGE from "../../../assets/Moon cloud mid rain.svg";
import SUN_IMAGE from "../../../assets/Sun cloud angled rain.svg";
import WIND_IMAGE from "../../../assets/Moon cloud fast wind.svg";

export function WeatherIllustration() {
  return (
    <Stack
      sx={{
        display: { xs: 'none', md: 'block' },
        width: { md: 405, lg: 455 },
        px: 5,
        pt: 4,
        pb: 10,
        bgcolor: 'background.loginPaper.secondary',
      }}
    >
      <Grid container sx={{ width: 1, height: 1 }}>
        {/* Sunny Icon */}
        <Grid size={12} sx={{ position: "relative" }}>
          <Box
            component="img"
            sx={{ flex: 1, position: "absolute", right: -50, top: 0 }}
            src={RAIN_IMAGE}
          />
        </Grid>
        {/* Rain Icon */}
        <Grid size={12} sx={{ position: "relative" }}>
          <Box
            component="img"
            sx={{ flex: 1, position: "absolute", left: -80, top: -45 }}
            src={SUN_IMAGE}
          />
        </Grid>
        {/* Wind Icon */}
        <Grid size={12} sx={{ position: "relative" }}>
          <Box
            component="img"
            sx={{ flex: 1, position: "absolute", right: -50, top: -50 }}
            src={WIND_IMAGE}
          />
        </Grid>
      </Grid>
    </Stack>
  );
}
