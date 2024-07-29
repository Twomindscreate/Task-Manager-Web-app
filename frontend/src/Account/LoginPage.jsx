import React from "react";
import { Container, Row, Col, Form, Button, Card } from "react-bootstrap";

const LoginPage = () => {
  return (
    <div className="container">
      <form action="">
        <h1>Login</h1>
        <div className="form-group">
          <label for="username">Username</label>
          <input
            type="text"
            className="form-control"
            id="username"
            placeholder="Enter Username"
            required
          />
        </div>
        <div className="form-group">
          <label for="password">Password</label>
          <input
            type="password"
            className="form-control"
            id="password"
            placeholder="Enter password"
            required
          />
        </div>
        <button type="submit" className="btn ">
          Login
        </button>
        <div className="text-center extra">
          <p className="mb-0">Don't have an account?</p>
          <a href="/register" className="p-0">
            Register
          </a>
        </div>
      </form>
    </div>
  );
};

export default LoginPage;
