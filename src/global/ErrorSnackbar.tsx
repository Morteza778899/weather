import { Snackbar, Alert } from "@mui/material";
import { useWeather } from "../context/weather";
import { useTranslation } from "react-i18next";

export const ErrorSnackbar = () => {
  const { error, clearError } = useWeather();
  const { t } = useTranslation();

  const handleClose = () => {
    clearError();
  };

  return (
    <Snackbar
      open={!!error}
      autoHideDuration={6000}
      onClose={handleClose}
      anchorOrigin={{ vertical: "top", horizontal: "center" }}
    >
      <Alert
        onClose={handleClose}
        severity="error"
        variant="filled"
        sx={{
          width: "100%",
        }}
      >
        {t("ERRORS.FETCH_ERROR")}
      </Alert>
    </Snackbar>
  );
};
