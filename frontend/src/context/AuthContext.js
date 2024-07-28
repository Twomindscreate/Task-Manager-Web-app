import { createContext, useEffect, useState } from "react";
import { jwtDecode } from "jwt-decode";
import { useNavigate } from "react-router-dom";
import Swal from "sweetalert2";

const AuthContext = createContext();

export default AuthContext;

export const AuthProvider = ({ children }) => {
  const [authTokens, setAuthTokens] = useState(() =>
    localStorage.getItem("authTokens")
      ? JSON.parse(localStorage.getItem("authTokens"))
      : null
  );

  const [user, setUser] = useState(
    localStorage.getItem("authTokens")
      ? jwtDecode(localStorage.getItem("authTokens"))
      : null
  );

  const [loading, setLoading] = useState(true);

  const navigate = useNavigate();

  const loginUser = async (email, password) => {
    let url = "http://127.0.0.1:8000/api/token/";
    const response = await fetch(url, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ email, password }),
    });

    const data = await response.json();
    if (response.status === 200) {
      setAuthTokens(data);
      setUser(jwtDecode(data.access));
      localStorage.setItem("authTokens", JSON.stringify(data));
      navigate("/");
      Swal.fire({
        title: "Login successfully..! ",
        icon: "success",
        toast: true,
        timer: 600,
        position: "top-right",
        timerProgressBar: true,
        showConfirmButton: false,
      });
    } else {
      console.log(response.status);
      console.log("An Error Occured");
      Swal.fire({
        title: "Email or password doesn't Exist..!",
        icon: "error",
        toast: true,
        timer: 600,
        position: "top-right",
        timerProgressBar: true,
        showConfirmButton: false,
      });
    }
  };

  const registerUser = async (
    full_name,
    email,
    username,
    password,
    password2
  ) => {
    let url = "http://127.0.0.1:8000/api/register/";
    const response = await fetch(url, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        full_name,
        email,
        username,
        password,
        password2,
      }),
    });
    const data = await response.json();
    if (response.status === 201) {
      navigate("/");
      Swal.fire({
        title: "Registration Successful..! ",
        icon: "success",
        toast: true,
        timer: 600,
        position: "top-right",
        timerProgressBar: true,
        showConfirmButton: false,
      });
    } else {
      console.log(response.status);
      console.log("An Error Occured");
      Swal.fire({
        title: "Server Error Registration Failed..!",
        icon: "error",
        toast: true,
        timer: 600,
        position: "top-right",
        timerProgressBar: true,
        showConfirmButton: false,
      });
    }
  };

  const logoutUser = () => {
    setAuthTokens(null);
    setUser(null);
    localStorage.removeItem("authTokens");
    navigate("/login");
    Swal.fire({
      title: "Logged Out Successfully..! ",
      icon: "success",
      toast: true,
      timer: 600,
      position: "top-right",
      timerProgressBar: true,
      showConfirmButton: false,
    });
  };

  const contextData = {
    user,
    setUser,
    authTokens,
    setAuthTokens,
    registerUser,
    loginUser,
    logoutUser,
  };

  useEffect(() => {
    if (authTokens) {
      setUser(jwtDecode(authTokens.access));
    }
    setLoading(false);
  }, [authTokens, loading]);

  return (
    <AuthContext.Provider value={contextData}>
      {loading ? <h1>Loading...</h1> : children}
    </AuthContext.Provider>
  );
};
