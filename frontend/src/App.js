import React from "react";

import "bootstrap/dist/css/bootstrap.min.css";
import ProtectedRoute from "./utils/ProtectedRoute";
import { AuthProvider } from "./context/AuthContext";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { HomePage, Dashboard, LoginPage, RegistrationPage } from "./pages";
import "./Account/login.css";
import "./Account/register.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "@fortawesome/fontawesome-free/css/all.min.css";

const App = () => {
  return (
    <div className="App">
      <Router>
        <AuthProvider>
          <Routes>
            <Route exact path="/" element={<HomePage />} />
            <Route
              exact
              path="/dashboard"
              element={
                <ProtectedRoute>
                  <Dashboard />
                </ProtectedRoute>
              }
            />
            <Route exact path="/login" element={<LoginPage />} />
            <Route exact path="/register" element={<RegistrationPage />} />
          </Routes>
        </AuthProvider>
      </Router>
    </div>
  );
};

export default App;
