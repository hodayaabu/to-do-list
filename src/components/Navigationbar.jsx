import { Nav, Navbar, Container, NavLink } from "react-bootstrap";
import { Link } from "react-router-dom";

const Navigatiorbar = () => {
    return (
        <Navbar bg="light" expand="lg">
            <Container>
                <Nav className="me-auto">
                    <NavLink eventKey="1" as={Link} to="/">Home</NavLink>
                    <NavLink eventKey="2" as={Link} to="/about">About</NavLink>
                    <NavLink eventKey="3" as={Link} to="/contact">Contact</NavLink>
                </Nav>
            </Container>
        </Navbar>
    )
}

export default Navigatiorbar;