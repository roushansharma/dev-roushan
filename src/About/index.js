import React from 'react'; 
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';  
import ListGroup from 'react-bootstrap/ListGroup';
 
function About() {  
    return(
        <section className="abtSec position-relative" id='about'>
            <Container>
                <Row className="align-items-center">
                    <Col md={6} className="pr-2 pr-lg-3">
                        <h5 className="mb-2 fw-400 text-uppercase fs-14 text-muted">Welcome to the my portfolio</h5>
                        <h4 className="hrd-font fs-40 fw-400">
                             I'm the Creative Force <br /> Of My Life.
                        </h4>
                        <p className="position-relative mb-3 mb-md-5 fs-15">
                            I'm HTML Developer. I am 22 years old and a freelance digital designer.  I started getting passionate about Codeing at the age of 20 when I created my first website.
                            <br /> <br /> Since then I kept learning day by day on my own until today. Training myself every day and pushing my own limits to discover new ways of creating a great experience for the users.  
                        </p> 
                        <Col className="wlkProOuter px-0">
                            {/* <ListGroup horizontal className="list-inline fs-13 fw-600 text-uppercase wrkPro"> 
                                <ListGroup.Item className="rounded">
                                    <img src="Images/wrkPro.png" alt="" /> 100% Work Progress.
                                </ListGroup.Item>
                                <ListGroup.Item className="rounded">
                                    <img src="Images/satsClient.png" alt="" /> 100% Satisfied Clients
                                </ListGroup.Item> 
                            </ListGroup> */}
                            <ul className="list-inline fs-13 fw-600 text-uppercase wrkPro">
                                <li className="list-inline-item "><img src="Images/wrkPro.png" alt="" /> 100% Work Progress.</li>
                                <li className="list-inline-item rounded"><img src="Images/satsClient.png" alt="" /> 100% Satisfied Clients</li> 
                            </ul> 
                        </Col> 
                    </Col>
                    <Col md={6} className="mt-4 mt-md-0">
                        <Col className="d-inline-block position-relative">
                            <img src="Images/abt2.jpeg" alt="" className="w-100" /> 
                            <div className="position-absolute expDv">
                                <h3 className="hrd-font">03 <span>Years</span></h3>
                                <h6>Experiance </h6>
                            </div>
                        </Col>
                    </Col> 
                </Row>
            </Container> 
        </section>
    );
}

export default About;