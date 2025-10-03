import { useState, FormEvent } from "react";
import { useNavigate } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { Box, TextField, Button, Typography, Stack } from "@mui/material";
import { useAuth } from "../../../context/auth";

export function LoginForm() {
  const [name, setName] = useState("");
  const { login } = useAuth();
  const navigate = useNavigate();
  const { t } = useTranslation();

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    if (name.trim()) {
      login(name.trim());
      navigate("/dashboard");
    }
  };

  return (
    <Stack
      sx={{
        width: { xs: 1, md: 355, lg: 505 },
        bgcolor: "background.loginPaper.primary",
        p: 7.5,
        px: { xs: 2, sm: 4, md: 7.5 },
      }}
      direction="column"
      justifyContent="space-around"
    >
      <Stack direction="column" gap={4}>
        <Typography variant="h3" textAlign="center">
          {t("COMMON.LOGIN")}
        </Typography>
        <TextField
          fullWidth
          placeholder={t("COMMON.ENTER_YOUR_NAME")}
          value={name}
          onChange={(e) => setName(e.target.value)}
          required
          slotProps={{
            input: {
              "aria-label": t("COMMON.ENTER_YOUR_NAME"),
              sx: { height: 56 },
            },
          }}
        />
      </Stack>

      <Box component="form" onSubmit={handleSubmit}>
        <Button
          type="submit"
          variant="contained"
          size="large"
          fullWidth
          color="info"
        >
          {t("COMMON.LOGIN")}
        </Button>
      </Box>
    </Stack>
  );
}
