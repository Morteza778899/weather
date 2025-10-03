import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { Box } from "@mui/material";
import { useAuth } from "../../context/auth";
import { Header } from "./header";
import DashboardContent from "./content";
import Footer from "./footer";

export function DashboardPage() {
  const { username } = useAuth();
  const navigate = useNavigate();

  useEffect(() => {
    if (!username) {
      navigate("/");
    }
  }, [username, navigate]);

  if (!username) {
    return null;
  }

  return (
    <Box sx={{ minHeight: "100vh", display: "flex", flexDirection: "column" }}>
      <Header />
      <Box sx={{ flex: 1 }}>
        <DashboardContent />
      </Box>
      <Footer />
    </Box>
  );
}
