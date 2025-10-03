import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import { ThemeProvider } from "./context/theme";
import { CssBaseline } from "@mui/material";
import { AuthProvider } from "./context/auth";
import { LanguageProvider } from "./context/language";
import { RTLProvider } from "./global/RTLProvider";
import { WeatherProvider } from "./context/weather";
import { ErrorSnackbar } from "./global/ErrorSnackbar";
import { LoginPage } from "./pages/login";
import { DashboardPage } from "./pages/dashboard";
import "./i18n";
import "./utils/jalali";

function App() {
  return (
    <ThemeProvider>
      <CssBaseline />
      <LanguageProvider>
        <RTLProvider>
          <AuthProvider>
            <WeatherProvider>
              <Router>
                <Routes>
                  <Route path="/" element={<LoginPage />} />
                  <Route path="/dashboard" element={<DashboardPage />} />
                  <Route path="*" element={<Navigate to="/" replace />} />
                </Routes>
                <ErrorSnackbar />
              </Router>
            </WeatherProvider>
          </AuthProvider>
        </RTLProvider>
      </LanguageProvider>
    </ThemeProvider>
  );
}

export default App;