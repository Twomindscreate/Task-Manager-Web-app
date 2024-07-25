import React from "react";

import HomePage from "./pages/HomePage";
import "bootstrap/dist/css/bootstrap.min.css";
import SideNav from "./pages/user/Dashboard.jsx";

const App = () => {
  return (
    <div className="App">
      <HomePage />
      {/* <SideNav /> */}
    </div>
  );
};

export default App;
