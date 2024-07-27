import { Children, useContext } from "react";
import AuthContext from "../context/AuthContext";

import { Navigate } from "react-router-dom";

const ProtectedRoute = ({ Children }) => {
  let { user } = useContext(AuthContext);

  if (!user) {
    return <Navigate to="/login" />;
  }
  return Children;
};

export default ProtectedRoute;
