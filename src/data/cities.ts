import { City } from "../types/city";

export const cities: City[] = [
  // Iran
  {
    id: "tehran",
    name: "Tehran",
    nativeName: "تهران",
    country: "Iran",
    lat: 35.6892,
    lon: 51.3890
  },
  {
    id: "isfahan",
    name: "Isfahan",
    nativeName: "اصفهان",
    country: "Iran",
    lat: 32.6546,
    lon: 51.6680
  },
  {
    id: "shiraz",
    name: "Shiraz",
    nativeName: "شیراز",
    country: "Iran",
    lat: 29.5926,
    lon: 52.5836
  },
  // Global Cities
  {
    id: "london",
    name: "London",
    country: "United Kingdom",
    lat: 51.5074,
    lon: -0.1278
  },
  {
    id: "paris",
    name: "Paris",
    country: "France",
    lat: 48.8566,
    lon: 2.3522
  },
  {
    id: "tokyo",
    name: "Tokyo",
    country: "Japan",
    lat: 35.6762,
    lon: 139.6503
  },
  {
    id: "new-york",
    name: "New York",
    country: "United States",
    lat: 40.7128,
    lon: -74.0060
  },
  {
    id: "dubai",
    name: "Dubai",
    nativeName: "دبي",
    country: "UAE",
    lat: 25.2048,
    lon: 55.2708
  },
  {
    id: "istanbul",
    name: "Istanbul",
    country: "Turkey",
    lat: 41.0082,
    lon: 28.9784
  },
  {
    id: "moscow",
    name: "Moscow",
    country: "Russia",
    lat: 55.7558,
    lon: 37.6173
  },
];

// Helper function to get city suggestions for autocomplete
export const getCitySuggestions = (query: string): City[] => {
  const lowercaseQuery = query.toLowerCase();
  return cities.filter(
    (city) =>
      city.name.toLowerCase().includes(lowercaseQuery) ||
      city.nativeName?.toLowerCase().includes(lowercaseQuery) ||
      city.country.toLowerCase().includes(lowercaseQuery)
  );
};
