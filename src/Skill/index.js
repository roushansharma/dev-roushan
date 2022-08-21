import React from "react";
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Tab from 'react-bootstrap/Tab';
import Tabs from 'react-bootstrap/Tabs';
function Skill() {
    return (
        <section className="skillsDv py-3 py-md-5" id="skills">
            <Container>
                <Row className="align-items-center justify-content-center wrkingDiffRow pt-4">
                    <Col lg={4} md={5} className="hrdSec">
                        <h6 className="position-relative text-uppercase fw-400 mb-3">Be more Creative</h6>
                        <h2 className="hrd-font mb-4 fw-400">
                            <span className="position-relative">
                            I have high skills  in developing and programming
                            </span>
                        </h2>
                        <p className="fs-14">I am working on a professional, visually sophisticated and technologically proficient, responsive and multi-functional personal portfolio template Shane.</p>
                    </Col>
                    <Col lg={{ span: 6, offset: 1 }} md={7} className="px-md-0">
                        <Tabs defaultActiveKey="home" transition={false} id="skillTab" className="mb-3 tabExp border-0" >
                            <Tab eventKey="home" title="Skills">
                                <ul className="list-inline skillLogoList mb-0 text-center">
                                    <li className="list-inline-item bg-white text-center rounded">
                                        <div className="d-inline-block">
                                            <img src="Images/sk-1.png" alt="" />
                                        </div>
                                        <p className="mb-0 fs-14 fw-400">HTML</p>
                                    </li>
                                    <li className="list-inline-item bg-white text-center rounded">
                                        <div className="d-inline-block">
                                            <img src="Images/sk-2.png" alt="" />
                                        </div>
                                        <p className="mb-0 fs-14 fw-400">CSS</p>
                                    </li>
                                    <li className="list-inline-item bg-white text-center rounded">
                                        <div className="d-inline-block">
                                            <img src="Images/sk-3.png" alt="" />
                                        </div>
                                        <p className="mb-0 fs-14 fw-400">JAVASCRIPT</p>
                                    </li>
                                    <li className="list-inline-item bg-white text-center rounded">
                                        <div className="d-inline-block">
                                            <img src="Images/sk-4.png" alt="" />
                                        </div>
                                        <p className="mb-0 fs-14 fw-400">BOOTSTRAP</p>
                                    </li>
                                    <li className="list-inline-item bg-white text-center rounded">
                                        <div className="d-inline-block">
                                            <img src="Images/sk-5.png" alt="" />
                                        </div>
                                        <p className="mb-0 fs-14 fw-400">JQUERY</p>
                                    </li>
                                    <li className="list-inline-item bg-white text-center rounded">
                                        <div className="d-inline-block">
                                            <img src="Images/sk-6.png" alt="" />
                                        </div>
                                        <p className="mb-0 fs-14 fw-400">SASS</p>
                                    </li>
                                    <li className="list-inline-item bg-white text-center rounded">
                                        <div className="d-inline-block">
                                            <img src="Images/sk-7.png" alt="" />
                                        </div>
                                        <p className="mb-0 fs-14 fw-400">WORDPRESS</p>
                                    </li>
                                    <li className="list-inline-item bg-white text-center rounded">
                                        <div className="d-inline-block">
                                            <img src="Images/sk-9.png" alt="" />
                                        </div>
                                        <p className="mb-0 fs-14 fw-400">GITHUB</p>
                                    </li>
                                    <li className="list-inline-item bg-white text-center rounded">
                                        <div className="d-inline-block">
                                            <img src="Images/sk-11.png" alt="" />
                                        </div>
                                        <p className="mb-0 fs-14 fw-400">PHOTOSHOP</p>
                                    </li>
                                    <li className="list-inline-item bg-white text-center rounded">
                                        <div className="d-inline-block">
                                            <img src="Images/sk-12.png" alt="" />
                                        </div>
                                        <p className="mb-0 fs-14 fw-400">ILLUSTRATOR</p>
                                    </li>
                                </ul>
                            </Tab>
                            <Tab eventKey="profile" title="Experiance">
                                <div className="expDetails position-relative mt-4">
                                    <h5 className="fs-16 fw-300">Vouchagram Pvt Ltd. <span>( 2021 — Present )</span></h5>
                                    <h4 className="hrd-font fw-500">HTML Developer</h4>
                                    <p className="mb-0 fs-14">
                                        Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.
                                    </p>
                                    <div className="numDiv position-absolute fw-400">02</div>
                                </div>

                                <div className="expDetails position-relative d-block mt-3">
                                    <h5 className="fs-16 fw-300">Infinite It Soulation <span>( 2019 — 2020 )</span></h5>
                                    <h4 className="hrd-font fw-500">Website Designer</h4>
                                    <p className="mb-0 fs-14 ">
                                        Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.
                                    </p>
                                    <div className="numDiv position-absolute fw-400">01</div>
                                </div>
                            </Tab>
                            <Tab eventKey="contact" title="Education">
                                <div className="expDetails position-relative">
                                    <h5 className="fs-16 fw-300">Arena Animation South Ex. <span>( 2016 - 2019 )</span></h5>
                                    <h4 className="hrd-font fw-500">Graphic &amp; Web Development</h4>
                                    <p className="mb-0 fs-14">
                                        Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.
                                    </p>
                                    <div className="numDiv position-absolute fw-400">01</div>
                                </div>

                                <div className="expDetails position-relative mt-4">
                                    <h5 className="fs-16 fw-300">Subharti University <span>( 2021 - Present )</span></h5>
                                    <h4 className="hrd-font fw-500">MCA</h4>
                                    <p className="mb-0 fs-14">
                                        Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.
                                    </p>
                                    <div className="numDiv position-absolute fw-400">02</div>
                                </div>
                            </Tab>
                        </Tabs>
                    </Col>
                </Row>
            </Container>
        </section>
    );
}

export default Skill;