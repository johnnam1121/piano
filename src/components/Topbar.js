import { Container, Nav, Navbar } from 'react-bootstrap';
import { Link } from "react-router-dom";

function Topbar() {
  return (
    <>
      <Navbar bg="light" variant="light">
        <Container>
          <Navbar.Brand href="/home">
            <img
              src={process.env.PUBLIC_URL + "/Pictures/logo.jpg"}
              width="30"
              height="30"
              className="d-inline-block align-top rounded"
              alt="React Bootstrap logo"
            />
          </Navbar.Brand>
        </Container>

        <Container>
          <Navbar.Brand href=""></Navbar.Brand>
          <Nav className="ml-auto">
            <Nav.Link href="/home">Home</Nav.Link>
            <Nav.Link as={Link} to="/Content">Content</Nav.Link>
            <Nav.Link as={Link} to="/Sheets">Sheets</Nav.Link>
            <Nav.Link as={Link} to="/content">Contact</Nav.Link>
          </Nav>
        </Container>
      </Navbar>
    </>
  );
}

export default Topbar;