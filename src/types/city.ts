export interface City {
  id: string;
  name: string;
  country: string;
  // Adding native name for better localization support
  nativeName?: string;
  // Coordinates for weather API
  lat: number;
  lon: number;
}
