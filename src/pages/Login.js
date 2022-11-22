import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import NavbarComp from "../components/NavbarComp";

function Login() {
  return (
    <div className="hero min-vh-100 w-100" id="login">
      <NavbarComp />
      <Container>
        <Row>
          <Col className="text-white text-left">
            <h1>Tingkatkan Pengalaman<br />
              Perjalananmu Bersama<br />
              Tour Go</h1>
          </Col>
        </Row>
      </Container>

    </div>
  );
}

export default Login;