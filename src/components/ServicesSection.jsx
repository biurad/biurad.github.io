import React, { Component } from 'react';
import { Container, Row, Col, Button } from 'react-bootstrap';

export default class ServicesSection extends Component {
    render() {
        return (
            <>
                <div id="services" className="services section-bottom-only">
                    <div className="section-title">
                        <h5 className="title-top">Services</h5>
                        <h3>Our The Best Services</h3>
                    </div>
                    <Container>
                        <Row>
                            <Col md="4" sm="12">
                                <div className="content">
                                    <div className="serv-icon">
                                        <i className="icon ion-logo-html5"></i>
                                        <span className="clone-icon"><i className="icon ion-logo-html5"></i></span>
                                    </div>
                                    <h5>HTML 5</h5>
                                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit deserunt</p>
                                </div>
                            </Col>
                            <Col md="4" sm="12">
                                <div className="content">
                                    <div className="serv-icon">
                                        <i className="icon ion-ios-phone-portrait"></i>
                                        <span className="clone-icon"><i className="icon ion-ios-phone-portrait"></i></span>
                                    </div>
                                    <h5>Mobile Apps</h5>
                                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit deserunt</p>
                                </div>
                            </Col>
                            <Col md="4" sm="12">
                                <div className="content">
                                    <div className="serv-icon">
                                        <i className="icon ion-ios-desktop"></i>
                                        <span className="clone-icon"><i className="icon ion-ios-desktop"></i></span>
                                    </div>
                                    <h5>Web Development</h5>
                                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit deserunt</p>
                                </div>
                            </Col>
                        </Row>
                        <Row>
                            <Col md="4" sm="12">
                                <div className="content">
                                    <div className="serv-icon">
                                        <i className="icon ion-ios-bulb"></i>
                                        <span className="clone-icon"><i className="icon ion-ios-bulb"></i></span>
                                    </div>
                                    <h5>Brand Strategy</h5>
                                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit deserunt</p>
                                </div>
                            </Col>
                            <Col md="4" sm="12">
                                <div className="content">
                                    <div className="serv-icon">
                                        <i className="icon ion-ios-paper"></i>
                                        <span className="clone-icon"><i className="icon ion-ios-paper"></i></span>
                                    </div>
                                    <h5>Branding</h5>
                                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit deserunt</p>
                                </div>
                            </Col>
                            <Col md="4" sm="12">
                                <div className="content">
                                    <div className="serv-icon">
                                        <i className="icon ion-logo-wordpress"></i>
                                        <span className="clone-icon"><i className="icon ion-logo-wordpress"></i></span>
                                    </div>
                                    <h5>Wordpress</h5>
                                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit deserunt</p>
                                </div>
                            </Col>
                        </Row>
                    </Container>
                </div>
                <div className="words-section section-bottom-only">
                    <Container>
                        <div className="content">
                            <Row>
                                <Col md="8" sm="12" className="align-self-center">
                                    <div className="words-wrap">
                                        <h4>Let's work together on your</h4>
                                        <h4>best project</h4>
                                    </div>
                                </Col>
                                <Col md="4" sm="12" className="align-self-center">
                                    <div className="button-wrap">
                                        <Button bsPrefix="button" type="null">Contact Us</Button>
                                    </div>
                                </Col>
                            </Row>
                        </div>
                    </Container>
                </div>
            </>
        )
    }
}
