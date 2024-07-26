import React from "react";

import HomePage from "./pages/HomePage";
import "bootstrap/dist/css/bootstrap.min.css";
import LoginPage from "./Account/LoginPage";
import RegistrationPage from "./Account/RegistrationPage";
import "./Account/login.css";
import SideNav from "./pages/user/Dashboard";
import "./Account/register.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "@fortawesome/fontawesome-free/css/all.min.css";

const App = () => {
  return (
    <div className="App">
      {/* <HomePage />
      <LoginPage />
      <RegistrationPage /> */}
      <SideNav />
    </div>
  );
};

export default App;
