import React, { Component } from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import news1 from '../images/news1.png';
import news2 from '../images/news2.png';

export default class NewsSection extends Component {
    render() {
        return (
            <div id="news" className="news section-bottom-only">
                <Container>
                    <Row>
                        <Col md="6" sm="12">
                            <div className="section-title section-title-left">
                                <h5 className="title-top">News</h5>
                                <h3>Latest Post</h3>
                                <div className="title-desc">
                                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Veniam repellat nobis impedit, distinctio eius cupiditate doloribus labore sunt totam!</p>
                                </div>
                            </div>
                        </Col>
                        <Col md="6" sm="12">
                            <Row>
                                <Col md="6" sm="12">
                                    <a href="#home">
                                        <div className="content">
                                            <img src={news1} alt="news-logo" />
                                            <h4>Graphic Design and Photography Workshop</h4>
                                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque</p>
                                        </div>
                                    </a>
                                </Col>
                                <Col md="6" sm="12">
                                    <a href="#home">
                                        <div className="content">
                                            <img src={news2} alt="news-logo" />
                                            <h4>10 Best Website Design for Inspiration</h4>
                                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque</p>
                                        </div>
                                    </a>
                                </Col>
                            </Row>
                        </Col>
                    </Row>
                </Container>
            </div>
        )
    }
}
