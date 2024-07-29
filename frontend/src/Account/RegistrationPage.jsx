import React, { useState, useContext } from "react";

import AuthContext from "../context/AuthContext";

const RegistrationPage = () => {
  const [full_name, setfull_name] = useState("");
  const [email, setemail] = useState("");
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [password2, Password2] = useState("");

  const { registerUser } = useContext(AuthContext);

  const handleSubmit = async (e) => {
    e.preventdefault();
    console.log(full_name);
    console.log(email);
    console.log(username);
    console.log(password);
    console.log(password2);
  };

  registerUser(full_name, email, username, password, password2);

  return (
    <div className="container">
      <form action="">
        <h1>Registration</h1>
        <div className="form-group">
          <label htmlFor="fullname">Full Name</label>
          <input
            type="text"
            className="form-control"
            name="full_name"
            placeholder="Enter Full Name"
            onChange={(e) => setfull_name(e.target.value)}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="email">Email Address</label>
          <input
            type="email"
            className="form-control"
            name="email"
            placeholder="Enter Email"
            onChange={(e) => setemail(e.target.value)}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="username">Username</label>
          <input
            type="text"
            className="form-control"
            name="username"
            placeholder="Enter Username"
            onChange={(e) => setUsername(e.target.value)}
            required
          ></input>
        </div>
        <div className="form-group">
          <label htmlFor="password">Password</label>
          <input
            type="password"
            className="form-control"
            name="password"
            placeholder="Enter Password"
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="password2">Confirm Password</label>
          <input
            type="password"
            className="form-control"
            name="password2"
            placeholder="Confirm Password"
            onChange={(e) => Password2(e.target.value)}
            required
          />
        </div>
        <button type="submit" onClick={handleSubmit} className="btn">
          Register
        </button>
        <div className="text-center extra">
          <p className="mb-0">Have an Account?</p>
          <a href="/login" className="p-0">
            Login
          </a>
        </div>
      </form>
    </div>
  );
};

export default RegistrationPage;
