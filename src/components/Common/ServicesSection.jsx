import React, { Component } from 'react';
import { Container, Row, Col, Button } from 'react-bootstrap';

export default class ServicesSection extends Component {
    constructor(props) {
        super(props);
        this.state = {
            services: {
                row1: [
                    {
                        "icon": "logo-html5",
                        "title": "HTML 5",
                        "description": "Lorem ipsum dolor sit amet, consectetur adipisicing elit deserunt"
                    },
                    {
                        "icon": "ios-phone-portrait",
                        "title": "Mobile Apps",
                        "description": "Lorem ipsum dolor sit amet, consectetur adipisicing elit deserunt"
                    },
                    {
                        "icon": "ios-desktop",
                        "title": "Web Development",
                        "description": "Lorem ipsum dolor sit amet, consectetur adipisicing elit deserunt"
                    },
                ],
                row2: [
                    {
                        "icon": "ios-bulb",
                        "title": "Brand Strategy",
                        "description": "Lorem ipsum dolor sit amet, consectetur adipisicing elit deserunt"
                    },
                    {
                        "icon": "ios-paper",
                        "title": "Branding",
                        "description": "Lorem ipsum dolor sit amet, consectetur adipisicing elit deserunt"
                    },
                    {
                        "icon": "logo-wordpress",
                        "title": "Wordpress",
                        "description": "Lorem ipsum dolor sit amet, consectetur adipisicing elit deserunt"
                    },
                ]
            }
        }
    }

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
                            {this.state.services.row1.map(
                                (service, i) => <Col key={i} md={4} sm={12}>
                                    <div className="content">
                                        <div className="serv-icon">
                                            <i className={`icon ion-${service.icon}`}></i>
                                            <span className="clone-icon"><i className={`icon ion-${service.icon}`}></i></span>
                                        </div>
                                        <h5>{service.title}</h5>
                                        <p>{service.description}</p>
                                    </div>
                                </Col>
                            )}
                        </Row>
                        <Row>
                        {this.state.services.row2.map(
                                (service, i) => <Col key={i} md={4} sm={12}>
                                    <div className="content">
                                        <div className="serv-icon">
                                            <i className={`icon ion-${service.icon}`}></i>
                                            <span className="clone-icon"><i className={`icon ion-${service.icon}`}></i></span>
                                        </div>
                                        <h5>{service.title}</h5>
                                        <p>{service.description}</p>
                                    </div>
                                </Col>
                            )}
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
                                <Col md={4} sm={12} className="align-self-center">
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
