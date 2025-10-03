import axios from 'axios';
import { City } from '../../types/city';

const BASE_URL = 'https://api.open-meteo.com/v1';

// Create axios instance with default config
const weatherApi = axios.create({
  baseURL: BASE_URL,
});

export interface WeatherResponse {
  current: {
    time: string;
    temperature_2m: number;
    relative_humidity_2m: number;
    apparent_temperature: number;
    precipitation: number;
    wind_speed_10m: number;
    wind_direction_10m: number;
  };
  daily: {
    time: string[];
    temperature_2m_max: number[];
    temperature_2m_min: number[];
    precipitation_probability_max: number[];
    wind_speed_10m_max: number[];
  };
  hourly: {
    time: string[];
    temperature_2m: number[];
    precipitation_probability: number[];
    wind_speed_10m: number[];
  };
}

export const weatherService = {
  /**
   * Get current weather and forecast for a city
   */
  getCurrentWeather: async (city: City) => {
    // Create a cancel token source
    const source = axios.CancelToken.source();
    
    try {
      const response = await weatherApi.get<WeatherResponse>('/forecast', {
        params: {
          latitude: city.lat,
          longitude: city.lon,
          current: 'temperature_2m,relative_humidity_2m,apparent_temperature,precipitation,wind_speed_10m,wind_direction_10m',
          hourly: 'temperature_2m,precipitation_probability,wind_speed_10m',
          daily: 'temperature_2m_max,temperature_2m_min,precipitation_probability_max,wind_speed_10m_max',
          timezone: 'auto',
          forecast_days: 14, // Get 14 days forecast
        },
        cancelToken: source.token,
        // Add retry logic
        timeout: 10000, // 10 seconds timeout
        validateStatus: (status) => status >= 200 && status < 300,
      });
      return response.data;
    } catch (error) {
      if (axios.isCancel(error)) {
        // Handle cancelled request
        console.log('Request cancelled:', error.message);
      }
      throw error;
    }
  },
};