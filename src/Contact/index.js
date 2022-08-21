import React from "react";
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col'; 
import Form from 'react-bootstrap/Form'; 
import Button from 'react-bootstrap/Button';

function Contact(){
    return(
        <section className="getInTouch position-relative" id="contact">
            <Container>
                <Row>
                    <Col md={12} className="mb-3 hrdSec">
                        <h6 className="position-relative text-uppercase fw-400 mb-4">Get In touch</h6>
                        <h2 className="hrd-font mb-md-5 fw-400">
                            <span className="position-relative">
                                 Have a little something <br /> you wanna talk to us about?
                            </span>
                        </h2>
                    </Col>
                </Row> 
                <Row className="align-items-center">
                    <Col md={5} className="pr-md-5">
                        <div className="border-bottom mb-3 mb-md-4 pb-3 pb-md-4">
                            <ul className="list-inline mb-0 locList d-flex align-items-center">
                                <li className="list-inline-item">
                                    <i className="fa fa-map d-flex align-items-center justify-content-center fs-24 rounded-circle"></i>
                                </li>
                                <li className="list-inline-item">
                                    <h4 className="hrd-font fs-22 fw-400 mb-1">Exact Location</h4>
                                    <p>New Delhi, India</p>
                                </li>
                            </ul>
                        </div>
                        <div className="border-bottom mb-3 mb-md-4 pb-3 pb-md-4">
                            <ul className="list-inline mb-0 locList d-flex align-items-center">
                                <li className="list-inline-item">
                                    <i className="fa fa-phone d-flex align-items-center justify-content-center fs-24 rounded-circle"></i>
                                </li>
                                <li className="list-inline-item">
                                    <h4 className="hrd-font fs-22 fw-400 mb-1">Phone Number</h4>
                                    <p><a href="tel:+917291877603" className="text-dark">( +91 ) 7291 - 877 - 603</a></p>
                                </li>
                            </ul> 
                        </div>
                        <div className="border-bottom mb-3 mb-md-4 pb-3 pb-md-4">
                            <ul className="list-inline mb-0 locList d-flex align-items-center">
                                <li className="list-inline-item">
                                    <i className="fa fa-envelope d-flex align-items-center justify-content-center fs-24 rounded-circle"></i>
                                </li>
                                <li className="list-inline-item">
                                    <h4 className="hrd-font fs-22 fw-400 mb-1">Email Address</h4>
                                    <p><a href="mailto:roushan7192.gmail.com" className="text-dark">roushan7192@gmail.com</a></p>
                                </li>
                            </ul>
                        </div>
                        <div className="mb-3 mb-md-4 pb-3 pb-md-4">
                            <ul className="list-inline mb-0 locpList d-flex align-items-center">
                                <li className="list-inline-item">
                                    <i className="fa fa-globe d-flex align-items-center justify-content-center fs-24 rounded-circle"></i>
                                </li>
                                <li className="list-inline-item">
                                    <h4 className="hrd-font fs-22 fw-400 mb-1">Website Link</h4>
                                    <p><a href="#" target="_blank"  className="text-dark">roushan.com</a></p>
                                </li>
                            </ul>
                        </div>
                    </Col>
                    <Col md={7} className="px-0 px-md-3">
                        <Form>
                            <Row className="mx-0">
                                <Col md={6}>
                                    <Form.Control type="text" placeholder="Enter Name" />
                                </Col>
                                <Col md={6}>
                                    <Form.Control type="nuber" placeholder="Phone Number" /> 
                                </Col>
                                <Col md={6}>
                                    <Form.Control type="email" placeholder="Email ID" /> 
                                </Col>
                                <Col md={6}>
                                     <Form.Control type="text" placeholder="Subject" /> 
                                </Col>
                                <Col md={12}>
                                    <Form.Control type="text" as="textarea" placeholder="I would like to..." /> 
                                    {/* <textarea className="form-control" placeholder="I would like to..."></textarea> */}
                                </Col>
                                <Col md={12} className="text-center">
                                    <Button variant="dark" className="text-uppercase px-5 py-2" >Get in touch &nbsp; &#10230; </Button> 
                                </Col>
                            </Row>
                        </Form>
                    </Col>
                </Row>
            </Container>
        </section>
    );
}

export default Contact;