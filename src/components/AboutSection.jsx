import React, { Component } from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import AboutLogo from '../images/about-img.jpg';

export default class AboutSection extends Component {
    render() {
        return (
            <div id="about" className="about">
                <Container>
                    <Row>
                        <Col sm="12" md="6" xs="12">
                            <div className="content-image">
                                <img src={AboutLogo} alt="AboutLogo" />
                            </div>
                        </Col>
                        <Col sm="12" md="6" xs="12">
                            <div className="content">
                                <h3>Why Choose Us?</h3>
                                <p>
                                    We can bring charm to your projects and company.
                                    We deliver beautifully crafted web and software applications with passion. Our core competency is building modern technologies that are easy to use and make people's lives better.
                                </p>
                                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Deserunt debitis ullam temporibus laudantium, repellendus ipsum dicta velit autem tenetur non quisquam ad cum laboriosam vero, ab voluptatem fugiat! Culpa, quam!</p>
                                <ul>
                                    <li><span className="circle-list"></span>Complete features</li>
                                    <li><span className="circle-list"></span>Lorem ipsum dolor sit</li>
                                    <li><span className="circle-list"></span>dolore architecto officiis</li>
                                </ul>
                            </div>
                        </Col>
                    </Row>
                </Container>
            </div>
        )
    }
}
