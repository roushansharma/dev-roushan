import React from "react";
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';  

function Service(){
    return(
        <section className="servSec position-relative" id="services">
            <Container>
                <Row className="align-items-center">
                    <Col md={12} className=" mb-3 mb-md-5 hrdSec">
                        <h6 className="position-relative text-uppercase fw-400 mb-4">My Services</h6>
                        <h2 className="hrd-font mb-2 mb-md-4 fw-400 text-white">
                            <span className="position-relative">
                                We Help For Overcome The Fears <br />
                                And Obstacles In Your Life.
                            </span>
                        </h2>
                    </Col>

                    <Col md={12} className="crouselP">
                        <Row className="mx-0 justify-content-center">
                            <Col lg={3} md={4} xs={6} className="p-1 p-md-2">
                                <div className="innerS h-100">
                                    <img src="Images/ic-1.png"  alt="" />
                                    <h4 className="mb-2 mt-2 mt-md-4 text-white fw-400 fs-24">Branding</h4>
                                    <p className="position-relative fs-14 fw-200">Branding is one of the most important ingredients for the success of any business. It tells customers who you are and distinguishes you from your competitors. We strategically pour your identity into the final product in a way that produces imaging concepts that will resonate with your target audience and make you stand out among even the largest crowd.</p>
                                </div>
                            </Col>
                            <Col lg={3} md={4} xs={6} className="p-1 p-md-2">
                                <div className="innerS h-100">
                                <img src="Images/ic-2.png"  alt="" />
                                    <h4 className="mb-2 mt-2 mt-md-4 text-white fw-400 fs-24">UI/UX</h4>
                                    <p className="position-relative fs-14 fw-200">The reason you go to your favorite bar isn't because of the low prices or convenient location; you go there because of the overall experience. We take that same approach with the apps and websites we create. We focus on overall usability, ease of use, and the interaction between the user and product. The result is engagement, social interaction, and sales.</p>
                                </div>
                            </Col>
                            <Col lg={3} md={4} xs={6} className="p-1 p-md-2">
                                <div className="innerS h-100">
                                <img src="Images/ic-3.png"  alt="" />
                                    <h4 className="mb-2 mt-2 mt-md-4 text-white fw-400 fs-24">Web Design</h4>
                                    <p className="position-relative fs-14 fw-200">My approach to digital design and marketing is about more than just creating attractive design work. Working closely with you and gaining a deeper understanding of your business is essential, as it helps me to create a unique identity for your website, which will immediately convey your story as soon as your customer lands on your homepage.</p>
                                </div>
                            </Col>
                            <Col lg={3} md={4} xs={6} className="p-1 p-md-2">
                                <div className="innerS h-100">
                                <img src="Images/ic-4.png"  alt="" />
                                    <h4 className="mb-2 mt-2 mt-md-4 text-white fw-400 fs-24">Web Development</h4>
                                    <p className="position-relative fs-14 fw-200">Beauty is only skin deep and it's important that your website performs as well as it looks. I build clean websites that perform brilliantly, are fast, smooth and fluid making for a better user experience and a greater ROI.</p>
                                </div>
                            </Col>
                            <Col lg={3} md={4} xs={6} className="p-1 p-md-2">
                                <div className="innerS h-100">
                                <img src="Images/ic-5.png"  alt="" />
                                    <h4 className="mb-2 mt-2 mt-md-4 text-white fw-400 fs-24">Digital Marketing</h4>
                                    <p className="position-relative fs-14 fw-200">At a high level, digital marketing refers to advertising delivered through digital channels such as search engines, websites, social media, email, and mobile apps. Using these online media channels, digital marketing is the method by which companies endorse goods, services, and brands. </p>
                                </div>
                            </Col>
                            <Col lg={3} md={4} xs={6} className="p-1 p-md-2">
                                <div className="innerS h-100">
                                <img src="Images/ic-6.png"  alt="" />
                                    <h4 className="mb-2 mt-2 mt-md-4 text-white fw-400 fs-24">Social Media</h4>
                                    <p className="position-relative fs-14 fw-200">Social Media Marketing helps the online business to grow Brand Awareness, Engagement & Traffic. I'm social media manager is a social media marketing expert who provides on-demand services. </p>
                                </div>
                            </Col> 
                        </Row> 
                    </Col> 
                </Row>
            </Container>
        </section> 
    );
}
export  default Service;