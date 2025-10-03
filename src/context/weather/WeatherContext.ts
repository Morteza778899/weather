import { createContext } from "react";
import { City } from "../../types/city";
import { WeatherResponse } from "../../services/api/weather";

export interface WeatherContextType {
  selectedCity: City;
  setSelectedCity: (city: City) => void;
  weatherData: WeatherResponse | null;
  isLoading: boolean;
  error: Error | null;
  clearError: () => void;
}

export const WeatherContext = createContext<WeatherContextType | undefined>(undefined);
