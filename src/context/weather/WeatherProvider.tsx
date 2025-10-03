import { useState, useEffect, ReactNode, useMemo } from "react";
import { City } from "../../types/city";
import { DEFAULT_CITY } from "../../constants/defaultCity";
import { weatherService, WeatherResponse } from "../../services/api/weather";
import { WeatherContext } from "./WeatherContext";

interface WeatherProviderProps {
  children: ReactNode;
}

export const WeatherProvider = ({ children }: WeatherProviderProps) => {
  const [selectedCity, setSelectedCity] = useState<City>(DEFAULT_CITY);
  const [weatherData, setWeatherData] = useState<WeatherResponse | null>(null);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<Error | null>(null);
  const clearError = () => setError(null);

  useEffect(() => {
    const fetchWeatherData = async () => {
      setIsLoading(true);
      setError(null);

      try {
        const data = await weatherService.getCurrentWeather(selectedCity);
        setWeatherData(data);
      } catch (error) {
        setError(error instanceof Error ? error : new Error("FETCH_ERROR"));
      } finally {
        setIsLoading(false);
      }
    };

    fetchWeatherData();
  }, [selectedCity]);

  // Memoize context value to prevent unnecessary re-renders
  const contextValue = useMemo(
    () => ({
      selectedCity,
      setSelectedCity,
      weatherData,
      isLoading,
      error,
      clearError,
    }),
    [selectedCity, weatherData, isLoading, error]
  );

  return (
    <WeatherContext.Provider value={contextValue}>
      {children}
    </WeatherContext.Provider>
  );
};
