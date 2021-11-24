import { Container, Row, Col, Navbar, Nav } from "react-bootstrap";
import logo from './icons8-wind-48.png';

const Footer = () => {
    return (
        <Container fluid className="bg-light">
            <Row>
                <footer className="d-flex flex-wrap justify-content-between align-items-center py-3 my-4 ">
                    <Col md={4}>
                        <Nav.Link href="/" className="mb-0 text-muted">&copy; 2021 CryptWind </Nav.Link>
                    </Col>
                    <Col md={4}>
                        <div href="/" className="d-flex align-items-center justify-content-center mb-3 mb-md-0 me-md-auto link-dark text-decoration-none">
                            <img className="bi me-2" width="40" height="32" src={logo} alt="logo"/><br/>
                            <a target="_blank" rel="noreferrer" href="https://icons8.com/icon/pLiaaoa41R9n/wind" className="nav-link">Wind</a>icon by <a target="_blank" rel="noreferrer" href="https://icons8.com" className="nav-link">Icons8</a>
                        </div>
                    </Col>
                    <Col md={4}>
                        
                        <Navbar className="justify-content-end">
                            <Nav>
                                <a className="btn btn-social-icon btn-github mx-2" href="https://github.com/dadasa88/CryptWind" target="_blank" rel="noreferrer"><i className="fa fa-github fa-lg"></i></a>
                                <a className="btn btn-social-icon btn-linkedin mx-2" href="https://www.linkedin.com/in/kelvin-lee-40415215a/" target="_blank" rel="noreferrer"><i className="fa fa-linkedin fa-lg"></i></a>
                                <a className="btn btn-social-icon btn-facebook mx-2" href="http://www.facebook.com/profile.php?id=" target="_blank" rel="noreferrer"><i className="fa fa-facebook fa-lg"></i></a>
                                <a className="btn btn-social-icon mx-2" href="mailto:" target="_blank" rel="noreferrer" ><i className="fa fa-envelope-o fa-lg"></i></a>
                            </Nav>
                        </Navbar>
                    </Col> 
                </footer>
            </Row>
        </Container> 
    );
}
 
export default Footer;