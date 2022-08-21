import React from "react";
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col'; 
import PortfolioCrousel from "./portfolo";
import Button from 'react-bootstrap/Button';

function RecentWork(){
    return(
        <section className="portSec position-relative" id="portfolio">
            <Container>
                <Row>
                    <Col md={12} className="hrdSec p-3">
                        <h6 className="position-relative text-uppercase fw-400 mb-4">Recent Work</h6>
                        <h2 className="hrd-font mb-2 mb-md-5 fw-400 fs-30">
                            <span className="position-relative">
                            It's time to see some work. Here are a few projects, <br /> work and design explorations i've done for clients.
                            </span>
                        </h2>
                    </Col> 
                    <Col md={12} className="crouselP mb-4"> 
                        <PortfolioCrousel />
                    </Col> 
                    <Col md={12} className="text-center"> 
                            <Button variant="dark" className="text-uppercase px-5 py-2">
                                View More &nbsp; &#10230;
                            </Button> 
                    </Col>
                </Row> 
            </Container> 
        </section>
    );
}

export default RecentWork; 