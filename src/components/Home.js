import Jumbotron from "./Jumbotron";
import { Container } from 'react-bootstrap';

const Home = () => {
    return (
      <Container fluid className="p-0">
        <Jumbotron></Jumbotron>
      </Container>
    );
}

export default Home;