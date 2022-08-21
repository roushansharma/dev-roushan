import React, { useState } from "react";
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';  
import classNames from 'classnames'

function Myheader() { 
    const [isHeaderOpen, setHeaderOpen] = useState(false);

    const toggleClick = () => {
        setHeaderOpen(!isHeaderOpen);
    }

    return (
      
      <section className={classNames({"banner position-relative": true, 'open': isHeaderOpen})} id="home"> 
              <header className="py-2 py-md-4 position-relative">
                  <Container>
                      <Row className="align-items-center">
                          <Col md={2} xs={6}>
                              <a  className="d-inline-block"> 
                                  <img src="Images/logo-white.png" alt="" className="w-75" /> 
                              </a>
                          </Col>
                          <Col md={10} xs={6} className="text-right d-flex align-items-center justify-content-end">
                              <div className="d-none d-md-block callTop">
                                  <a href="tel:+917291877603" className="fw-300 fs-15 d-inline-block"><i className="fa fa-phone d-inline-block"></i>( +91 ) 7291 - 877 - 602</a>
                                  <a href="mailto:roushan7192@gmail.com" className="fw-300 fs-15 d-inline-block"><i className="fa fa-envelope-open d-inline-block"></i>roushan7192@gmail.com</a>
                              </div>
                              <div className="d-inline-block menuBar" id="nav-icon1" onClick={() => toggleClick()}>
                                  <span></span>
                                  <span></span>
                                  <span></span>
                              </div>
                          </Col>
                      </Row>
                  </Container>
              </header>
              <main className="position-relative">
                  <div className="container h-100">
                      <div className="row h-100 align-items-center">
                          <Col  md={12} lg={7}>
                          {/* <Col  md={{span: 4, offset: 3}} lg={{offset: 2}}> */}
                             {/* <h1 className="text-white hrd-font fw-400">Hello, I'm <span>Roushan.</span></h1> */}
                              <h1 className="text-white hrd-font fw-400 text-uppercase">We do big things <span>with big ideas.</span></h1> 
                              <p className="fs-15 my-4 fw-300">A creative person with solid design and development expertise. I build awesome websites, mobile applications, and elaborate online business services.</p> 
                              <h4 className="fs-16 fw-300 position-relative">Web &amp; Graphic Design</h4>
                              <h4 className="fs-16 fw-300 position-relative">Web Development</h4>
                              <h4 className="fs-16 fw-300 position-relative">Digital Marketing</h4>
                              <a href="google.com" className="cv_down d-inline-block fw-300 fs-14 rounded">Download CV &nbsp; <i className="fa fa-download"></i></a>
                          </Col>
                          <Col md={5}  className="d-none d-lg-block">
                              <div className="d-inline-block">
                                  <img src="Images/bnr.png" alt="" className="w-100" />
                              </div>
                          </Col>
                      </div>
                  </div>
              </main>
  
              <div className="socialDv position-absolute d-flex align-items-center">
                  <span className="fw-200 d-inline-block">Find Me: </span>
                  <a href="https://www.linkedin.com/in/roushankumar55" target="_blank" className="text-white fs-20"><i className="fa fa-linkedin"></i></a>
                  <a href="https://github.com/roushansharma" target="_blank" className="text-white fs-20"><i className="fa fa-github"></i></a> 
              </div>
              <div className="slideRight position-fixed" onClick={() => toggleClick()}>
                  <div className="innerSlide p-4 h-100">
                      <div className="my-3">
                          <a  className="d-inline-block">
                              <img src="images/logo-white.png" className="w-100" />
                          </a>
                      </div>
                      <div className="navList">
                          <a href="#home" className="d-block position-relative">Home</a>
                          <a href="#about" className="d-block position-relative">About Us</a>
                          <a href="#portfolio" className="d-block position-relative">Portfolio</a>
                          <a href="#skills" className="d-block position-relative">Skills</a>
                          <a href="#services" className="d-block position-relative">What i do</a>
                          <a href="#contact" className="d-block position-relative">Get in Touch</a>
                      </div>
                      <div className="callSlide">
                          <a href="tel:917291877603">( +91 ) 7291 - 877 - 603</a>
                          <a href="mailto:roushan7192@gmail.com">roushan7192@gmail.com</a>
                      </div>
                  </div>
              </div>
          </section> 
  
  
  
  
    );
  }
  
  export default Myheader;