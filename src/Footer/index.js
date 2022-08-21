import React from "react";
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';  


function Footer(){
    return(
        <footer className="pt-2 pt-md-5">
            <Container>
                <Row className="text-center">
                    <Col md={4}>
                        <div className="frtlink h-100 centerCon">
                            <a href="#home" className="d-block text-dark mb-1 mb-md-3">Home</a>
                            <a href="#about" className="d-block text-dark mb-1 mb-md-3">About Us</a>
                            <a href="#portfolio" className="d-block text-dark mb-1 mb-md-3">Portfolio</a>
                            <a href="#skills" className="d-block text-dark mb-1 mb-md-3">Skills</a>
                            <a href="#services" className="d-block text-dark mb-1 mb-md-3">What i do</a>
                            <a href="#contact" className="d-block text-dark mb-1 mb-md-3">Get in Touch</a>
                        </div>
                    </Col>
                    <Col md={4}>
                        <div className="frt_border h-100 centerCon">
                            <a href="#home"><img src="images/logo.png" /></a>
                            <p className="mt-4 text-dark fs-14">&copy; 2022. All right reserved.</p>
                        </div>
                    </Col>
                    <Col md={4}>
                        <div className="h-100 socialList centerCon">
                            <a href="https://www.linkedin.com/in/roushankumar55" target="_blank" className="text-dark d-flex align-items-center justify-content-center fs-20 rounded-circle"><i className="fa fa fa-linkedin"></i></a>
                            <a href="https://github.com/roushansharma" target="_blank" className="text-dark d-flex align-items-center justify-content-center fs-20 rounded-circle"><i className="fa fa-github"></i></a> 
                        </div>
                    </Col>
                </Row>
            </Container>
            <div className="footerBg">
                <img src="images/footerBg.png" className="w-100" />
            </div>
        </footer>
    );
}

export default Footer;