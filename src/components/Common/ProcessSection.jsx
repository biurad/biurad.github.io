import React, { Component } from 'react';
import { Container, Row, Col } from 'react-bootstrap';

export default class ProcessSection extends Component {
    render() {
        return (
            <div id="process-work" className="process-work section">
                <Container>
                    <div className="section-title">
                        <h5 className="title-top">Process</h5>
                        <h3>Process Our Work</h3>
                    </div>
                    <Row>
                        <Col md={3} sm={6} xs={12}>
                            <div className="content">
                                <i className="icon ion-ios-chatboxes"></i>
                                <h5>Chat</h5>
                                <p>We get involved and integrated into our projects as we can. We revamp our approaches to the needs that best fit the situation to get the best results.</p>
                            </div>
                        </Col>
                        <Col md={3} sm={6} xs={12} className="align-self-end">
                            <div className="content">
                                <i className="icon ion-ios-cash"></i>
                                <h5>Transaction</h5>
                                <p>We provide value to your project and our services, and offer money back guarantee</p>
                            </div>
                        </Col>
                        <Col md={3} sm={6} xs={12}>
                            <div className="content">
                                <i className="icon ion-ios-search"></i>
                                <h5>Research</h5>
                                <p>We don't just execute, but need to be proud of our work. That's why we love to work in partnerships and teams. So we can research, develop and deliver results</p>
                            </div>
                        </Col>
                        <Col md={3} sm={6} xs={12} className="align-self-end">
                            <div className="content">
                                <i className="icon ion-ios-checkmark-circle"></i>
                                <h5>Deal</h5>
                                <p>Throughout the entire process of a project we make sure the project is monitored closely and handled by our expertise team in delivering the best results.</p>
                            </div>
                        </Col>
                    </Row>
                </Container>
            </div>
        )
    }
}
