import React from "react";
import { Container, Button, Row, Col, Navbar, Nav } from "react-bootstrap";
import "./HomePage.css";

const HomePage = () => (
  <div>
    {/* Navbar variations */}
    <Navbar bg="dark" variant="dark" sticky="top">
      <Container>
        <Navbar.Brand href="#home">TaskManager</Navbar.Brand>
        <Nav className="me-auto">
          <Nav.Link href="#home">Home</Nav.Link>
          <Nav.Link href="#features">Register</Nav.Link>
          <Nav.Link href="#pricing">Login</Nav.Link>
        </Nav>
      </Container>
    </Navbar>

    {/* Jumbotron-like section */}
    <Container className="jumbotron-container">
      <Row className="justify-content-center text-center">
        <Col md={8}>
          <h1>Welcome to the Task Manager</h1>
          <p>Manage your tasks efficiently and effectively.</p>
          <Button variant="primary">Get Started</Button>
        </Col>
      </Row>
    </Container>
  </div>
);

export default HomePage;
