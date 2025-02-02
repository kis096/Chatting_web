import Home from "./pages/Home";
import Login from "./pages/Login";
import Register from "./pages/Register";
import TestAuth from "./pages/TestAuth"; // Import TestAuth component
import "./style.scss";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { useContext } from "react";
import { AuthContext } from "./context/AuthContext";

function App() {
  const { currentUser } = useContext(AuthContext);

  // Reusable Protected Route for authenticated users
  const ProtectedRoute = ({ children }) => {
    if (!currentUser) {
      return <Navigate to="/login" />;
    }
    return children;
  };

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<ProtectedRoute><Home /></ProtectedRoute>} />
        <Route path="login" element={<Login />} />
        <Route path="register" element={<Register />} />
        
        {/* New Route for TestAuth */}
        <Route 
          path="test-auth" 
          element={<ProtectedRoute><TestAuth /></ProtectedRoute>} 
        />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
