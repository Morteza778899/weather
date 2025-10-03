import { Box, Stack } from "@mui/material";
import { LoginForm } from "./components/LoginForm";
import { WeatherIllustration } from "./components/WeatherIllustration";
import { LanguageSwitcher } from "../../global/LanguageSwitcher";

export function LoginPage() {
  return (
    <Box
      sx={{
        width: "100vw",
        height: "100vh",
        bgcolor: "background.default",
        py: 10,
      }}
    >
      <Stack
        direction="column"
        alignItems="center"
        justifyContent="center"
        gap={4}
        height={1}
      >
        <Stack
          sx={{
            width: { xs: "90%", sx: 450, md: 760, lg: 960 },
            height: "560px",
            borderRadius: 4,
            overflow: "hidden",
            boxShadow: "0px 4px 8px 0px rgba(0, 0, 0, 0.25)",
          }}
        >
          <LoginForm />
          <WeatherIllustration />
        </Stack>
        <LanguageSwitcher type="dropdown" />
      </Stack>
    </Box>
  );
}
