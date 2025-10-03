import { useEffect, useMemo, useState } from "react";
import { ThemeProvider as MUIThemeProvider } from "@mui/material/styles";
import { PaletteMode } from "@mui/material";
import { createAppTheme } from "../../theme/index";
import { ThemeContext } from "./ThemeContext";

interface ThemeProviderProps {
  children: React.ReactNode;
}

export const ThemeProvider: React.FC<ThemeProviderProps> = ({ children }) => {
  // Get initial theme from localStorage or default to light
  const [mode, setMode] = useState<PaletteMode>(() => {
    const savedMode = localStorage.getItem("themeMode");
    return (savedMode as PaletteMode) || "light";
  });

  // Update localStorage when theme changes
  useEffect(() => {
    localStorage.setItem("themeMode", mode);
  }, [mode]);

  const colorMode = useMemo(
    () => ({
      mode,
      toggleColorMode: () => {
        setMode((prevMode) => (prevMode === "light" ? "dark" : "light"));
      },
    }),
    [mode]
  );

  // Create theme based on current mode
  const theme = useMemo(() => createAppTheme(mode), [mode]);

  return (
    <ThemeContext.Provider value={colorMode}>
      <MUIThemeProvider theme={theme}>{children}</MUIThemeProvider>
    </ThemeContext.Provider>
  );
};
