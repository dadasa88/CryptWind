import { Container } from "react-bootstrap";
import logo from './icons8-wind-48.png';

const Footer = () => {
    return (
        <Container>
            <footer className="d-flex flex-wrap justify-content-between align-items-center py-3 my-4 border-top">
                <p className="col-md-4 mb-0 text-muted">&copy; 2021 CryptWind </p>

                <div href="/" className="col-md-4 d-flex align-items-center justify-content-center mb-3 mb-md-0 me-md-auto link-dark text-decoration-none">
                    <img className="bi me-2" width="40" height="32" src={logo}/><br/>
                    <a target="_blank" href="https://icons8.com/icon/pLiaaoa41R9n/wind" className="nav-link">Wind</a>icon by <a target="_blank" href="https://icons8.com" className="nav-link">Icons8</a>
                </div>

                <ul className="nav col-md-4 justify-content-end">
                <li className="nav-item"><a href="#" className="nav-link px-2 text-muted">Home</a></li>
                <li className="nav-item"><a href="#" className="nav-link px-2 text-muted">Markets</a></li>
                <li className="nav-item"><a href="#" className="nav-link px-2 text-muted">About</a></li>
                <li className="nav-item"><a href="#" className="nav-link px-2 text-muted">Contact</a></li>
                </ul>
            </footer>
        </Container> 
    );
}
 
export default Footer;