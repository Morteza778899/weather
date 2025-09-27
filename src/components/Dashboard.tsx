import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';

export function Dashboard() {
  const { username, logout } = useAuth();
  const navigate = useNavigate();

  useEffect(() => {
    if (!username) {
      navigate('/');
    }
  }, [username, navigate]);

  const handleLogout = () => {
    logout();
    navigate('/');
  };

  if (!username) {
    return null;
  }

  return (
    <div className="dashboard">
      <header className="dashboard-header">
        <h1>Weather Dashboard</h1>
        <div className="user-controls">
          <span>Welcome, {username}!</span>
          <button 
            onClick={handleLogout}
            className="logout-button"
            aria-label="Logout"
          >
            Logout
          </button>
        </div>
      </header>
      <main className="dashboard-content">
        {/* Weather content will be added here later */}
        <p>Weather information coming soon...</p>
      </main>
    </div>
  );
}
