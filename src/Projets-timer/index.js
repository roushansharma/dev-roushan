import React from "react";
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';  
import $ from 'jquery';


$(document).ready(function(){
    $(".innerPas").click(function(){
        $(".innerPas").removeClass("innerPasActive");
        $(this).addClass("innerPasActive");
    });
});


function ProjectTimer(){
    return(
        <section>
            <Container  className="timerPro pt-5 position-relative mt-0 mt-md-5">
                <Row className="justify-content-center ">
                    <Col md={3} xs={6} className="p-2 text-center">
                        <div className="timerDv">
                            <span>
                                120+ 
                            </span>
                            <span>
                                Digital 
                                Products
                            </span>
                        </div>
                    </Col>
                    <Col md={3} xs={6} className="p-2 text-center">
                        <div className="timerDv">
                            <span>
                                40+ 
                            </span>
                            <span>
                                Open Source  
                                Products
                            </span>
                        </div>
                    </Col>
                    <Col md={3} xs={6} className="p-2 text-center">
                        <div className="timerDv">
                            <span>
                                10M
                            </span>
                            <span>
                                Lines of  
                                Code    
                            </span>
                        </div>
                    </Col>
                    <Col md={3} xs={6} className="p-2 text-center">
                        <div className="timerDv">
                            <span>
                                40+ 
                            </span>
                            <span>
                                Open Source  
                                Products
                            </span>
                        </div>
                    </Col>
                </Row>   
            </Container> 
            <Container className="passhionDv py-5">
            <Row className="align-items-center justify-content-center wrkingDiffRow">
                <div className="col-md-4 hrdSec">
                        <h6 className="position-relative text-uppercase fw-400 mb-3">Be more Creative</h6>
                        <h2 className="hrd-font mb-4 fw-400 text-white">
                            <span className="position-relative">
                                Creative Brand, <br />
                                Design team.
                            </span>
                        </h2>
                        <p className="fs-14">We're an established, experienced, and trusted  with years of experience in providing successful web design solutions. who specializes in making attractive, user-friendly websites as well as increase organic traffic and leads through digital marketing.</p>
                    </div> 
                    <Col md={{span: 6, offset:1}}>
                        <div className="innerPas innerPasActive">
                            <h4>Custom Solution & Design</h4>
                            <p>
                            Each website is designed with your goal in mind. Whether you are a small business or nonprofit, EightySeven Web will build you a website that attracts visitors, keeps them on your site, and gets results. 
                            </p>
                        </div>

                        <div className="innerPas">
                            <h4>We're responsive.</h4>
                            <p>
                                Ut enim ad minim veniam, quis nostrud exercitation utur adipisicing elit, sed do eiusmod einisha chor amay vebona sukher mohona kobita tumi sopono carini hoye.
                            </p>
                        </div> 

                        <div className="innerPas">
                            <h4>Core Value of Development</h4>
                            <p>
                                Ut enim ad minim veniam, quis nostrud exercitation utur adipisicing elit, sed do eiusmod einisha chor amay vebona sukher mohona kobita tumi sopono carini hoye.
                            </p>
                        </div>


                        <div className="innerPas">
                            <h4>Desire to Work Hard</h4>
                            <p>
                                Ut enim ad minim veniam, quis nostrud exercitation utur adipisicing elit, sed do eiusmod einisha chor amay vebona sukher mohona kobita tumi sopono carini hoye.
                            </p>
                        </div> 
                    </Col>
                </Row>
            </Container>
        </section>  
    );
}


export default ProjectTimer;