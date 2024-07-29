import React, { useContext } from "react";
import { Container, Button, Row, Col, Navbar, Nav } from "react-bootstrap";
import "./HomePage.css";
import { Link } from "react-router-dom";
import AuthContext from "../context/AuthContext";
import { jwtDecode } from "jwt-decode";

const HomePage = () => {
  const { user, logoutUser } = useContext(AuthContext);
  const token = localStorage.getItem("authTokens");

  if (user && token) {
    const decode = jwtDecode(token);
    let user_id = decode.user_id;
    // You can use user_id for further logic if needed
  }

  return (
    <div>
      {/* Navbar variations */}
      <Navbar bg="dark" variant="dark" sticky="top">
        <Container>
          <Navbar.Brand href="#home">TaskManager</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link as={Link} to="/">
              Home
            </Nav.Link>
            {user ? (
              <button
                onClick={logoutUser}
                className="btn btn-link"
                style={{ color: "inherit", textDecoration: "none" }}
              >
                Logout
              </button>
            ) : (
              <>
                <Nav.Link as={Link} to="/register">
                  Register
                </Nav.Link>
                <Nav.Link as={Link} to="/login">
                  Login
                </Nav.Link>
              </>
            )}
          </Nav>
        </Container>
      </Navbar>

      {/* Jumbotron-like section */}
      <Container className="jumbotron-container">
        <Row className="justify-content-center text-center">
          <Col md={8}>
            <h1>Welcome to the Task Manager</h1>
            <p>Manage your tasks efficiently and effectively.</p>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default HomePage;
