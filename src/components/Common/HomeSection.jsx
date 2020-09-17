import React, { Component } from 'react';
import { Container, Row, Col, Button } from 'react-bootstrap';
import headerLogo from '../../images/header-img.png';

export default class HomeSection extends Component {
    render() {
        return (
            <div id="home" className="home-intro">
                <Container>
                    <Row>
                        <Col md={6} sm={12} xs={12}>
                            <div className="content">
                                <h2><span className="color-highlight">Build</span> Your</h2>
                                <h2>Project <span className="color-highlight">with Us</span></h2>
                                <p>Hello, will you like to get started with us. We provide solutions for your business! Everything we work on is a big deal to us.</p>
                                <ul>
                                    <li><Button href="#home" bsPrefix="button">Get Started</Button></li>
                                    <li><Button href="#services" bsPrefix="button" variant="secondary">Our Services</Button></li>
                                </ul>
                            </div>
                        </Col>
                        <Col md={6} sm={12} xs={12}>
                            <div className="content-image">
                                <img src={headerLogo} alt="BrandLogo" />
                            </div>
                        </Col>
                    </Row>
                </Container>
            </div>
        )
    }
}
