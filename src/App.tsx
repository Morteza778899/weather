import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import { AuthProvider } from './context/AuthContext';
import { Login } from './components/Login';
import { Dashboard } from './components/Dashboard';
import './App.css';

function App() {
  return (
    <AuthProvider>
      <Router>
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>
      </Router>
    </AuthProvider>
  );
}

export default App;