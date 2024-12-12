import { Button, Col, Row } from "react-bootstrap";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { Link } from "react-router-dom";

const Navbars = () => {
  return (
    <Navbar bg="dark">
      <Container>
        <Row
          className="
          justify-content-center
          align-items-center
          h-full
          flex-grow-1
          text-light
           "
        >
          <Col
            lg="2"
            className="me-auto
          text-warning"
          >
            Falcon Shop APi
          </Col>
          <Col
            lg="8"
            className="
          d-flex
          flex-grow-1
          gap-5
          justify-content-center"
          >
            <Nav.Link href="/" className="">
              Home
            </Nav.Link>
            <Nav.Link href="/" className="">
              Products
            </Nav.Link>
            <Nav.Link href="/" className="">
              Cart
            </Nav.Link>
          </Col>
          <Col lg="2" className="d-flex gap-3 ms-auto justify-content-end">
              <Link to={"/login"}>
            <Button>
              Log In
            </Button>
              </Link>
              <Link to={"/signup"}>
            <Button>
              Sign Up
            </Button>
              </Link>
          </Col>
        </Row>
      </Container>
    </Navbar>
  );
};

export default Navbars;
