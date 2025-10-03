# Weather Dashboard Application

A modern, feature-rich weather dashboard built with React, TypeScript, and Vite. This application provides real-time weather information with a beautiful UI, supporting multiple languages and themes.

## 🌟 Features

### 🌤️ Weather Information
- Real-time weather data from Open-Meteo API
- Current weather conditions
- 14-day weather forecast
- Detailed weather metrics:
  - Temperature (current, min, max)
  - Humidity
  - Wind speed and direction
  - Precipitation probability
  - Apparent temperature

### 📊 Data Visualization
- Interactive temperature charts
- Daily forecast cards
- Weather condition indicators
- Scrollable content layout

### 🎨 User Interface
- Modern, responsive design
- Dark/Light theme support
- Beautiful weather icons
- Smooth animations and transitions
- Accessibility features

### 🌐 Internationalization
- Multi-language support (English/فارسی)
- RTL/LTR layout switching
- Automatic direction handling
- Localized date formats

### 👤 User Features
- Simple authentication system
- Persistent user preferences
- City search and selection
- Settings management

## 🛠️ Technical Stack

- **Frontend Framework**: React with TypeScript
- **Build Tool**: Vite
- **State Management**: React Context API
- **Styling**: Material-UI (MUI)
- **Charts**: Recharts
- **Internationalization**: i18next
- **HTTP Client**: Axios
- **Date Handling**: Custom Jalali date support

## 🚀 Getting Started

1. Clone the repository:
   ```bash
   git clone https://github.com/Morteza778899/weather.git
   cd weather
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Start the development server:
   ```bash
   npm run dev
   ```

4. Open [http://localhost:5173](http://localhost:5173) in your browser

## 🏗️ Project Structure

```
src/
├── assets/          # Images and fonts
├── components/      # Reusable UI components
├── context/         # React Context providers
│   ├── auth/        # Authentication context
│   ├── language/    # Language switching
│   ├── theme/       # Theme management
│   └── weather/     # Weather data management
├── hooks/           # Custom React hooks
├── locales/         # Translation files
├── pages/           # Application pages
├── services/        # API services
├── theme/           # MUI theme customization
├── types/           # TypeScript type definitions
└── utils/           # Utility functions

## 🌍 Internationalization

The application supports two languages:
- English (en)
- Persian/Farsi (fa)

Language files are located in `src/locales/` directory.

## 🎨 Theming

The application uses a customized Material-UI theme with:
- Light and dark mode support
- Custom color palette
- Responsive typography
- RTL/LTR support
- Custom component styling

## 🔐 Authentication

Simple authentication system with:
- Username-based authentication
- Local storage persistence
- Protected routes
- Login/logout functionality

## 🌡️ Weather Data

Weather data is fetched from the Open-Meteo API, providing:
- Current weather conditions
- 14-day forecast
- Hourly predictions
- Various weather metrics

## 📱 Responsive Design

The application is fully responsive and works on:
- Desktop computers
- Tablets
- Mobile devices
