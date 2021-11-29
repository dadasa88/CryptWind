import { Card, Button, Row, Col } from 'react-bootstrap';
import { Particles } from 'react-tsparticles';

const Jumbotron = () => {
    
    const particlesInit = (main) => {
        console.log(main);
    }

    const particlesLoaded = (container) => {
        console.log(container);
    }

    
    const particlesOptions = {
        background: {
            color: {
              value: "#D3D3D3",
            }
        },
        fullScreen: {
          enable: false,
          zIndex: -1
        },
        fpsLimit: 60,
        particles: {
          color: {
            value: "#5f2eb3",
          },
          move: {
            direction: "none",
            enable: true,
            outMode: "bounce",
            random: false,
            speed: 6,
            straight: false,
          },
          number: {
            density: {
              enable: true,
              value_area: 400,
            },
            value: 40,
          },
          opacity: {
            value: 0.5,
          },
          shape: {
            type: "circle",
          },
          size: {
            random: true,
            value: 5,
          },
        },
        detectRetina: true,
    }

    return (
        <Card 
            style = {{
                height: '300px',

            }}
            className="jumboCard"
        >
            <Particles 
              id="tsparticles"
              init={particlesInit} 
              loaded={particlesLoaded} 
              options={particlesOptions}
            ></Particles>
            <div id="jumbo" className="mx-auto my-auto">
                <Card.Title className="text-center fs-2">Discover the next MOON crypto on CryptWind</Card.Title>
                <Card.Body>
                  <Row>
                    <Col className="d-flex justify-content-end">
                      <Button variant="primary mx-2">Buy Now</Button>
                      <Button variant="light">Learn More</Button>
                    </Col>
                  </Row>
                </Card.Body>
            </div>
        </Card> 
    );
}
 
export default Jumbotron;