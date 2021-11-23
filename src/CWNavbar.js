import { Navbar, Container, Nav, NavDropdown } from 'react-bootstrap';
import logo from './icons8-wind-48.png';

const CWNavbar = () => {
    return ( 
        <Navbar bg="dark" expand="lg" variant="dark">
            <Container>
                <Navbar.Brand href="/">
                    <img 
                        src={logo}
                        width="30"
                        height="30"
                        alt="cryptwind-logo"
                    />
                    CryptWind
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="me-auto">
                    <Nav.Link href="/">Home</Nav.Link>
                    <Nav.Link href="#link">Markets</Nav.Link>
                </Nav>
                <Nav className="ms-auto">
                    <NavDropdown title="Misc." id="basic-nav-dropdown">
                    <NavDropdown.Item href="#about">About</NavDropdown.Item>
                    <NavDropdown.Item href="#contact">Contact</NavDropdown.Item>
                    <NavDropdown.Divider />
                    <NavDropdown.Item href="https://www.youtube.com/watch?v=chY9p-XLHHk" target="blank">NSFW</NavDropdown.Item>
                    </NavDropdown>
                </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
}
 
export default CWNavbar;