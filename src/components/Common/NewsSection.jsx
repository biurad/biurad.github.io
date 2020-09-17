import React, { Component } from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import news1 from '../../images/news1.png';
import news2 from '../../images/news2.png';

export default class NewsSection extends Component {
    constructor(props) {
        super(props);
        this.state = {
            news: [
                {
                    "title": "Graphic Design and Photography Workshop",
                    "description": "Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque",
                    "image": news1,
                    "link": "#home"
                },
                {
                    "title": "10 Best Website Design for Inspiration",
                    "description": "Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque",
                    "image": news2,
                    "link": "#home"
                }
            ]
        }
    }

    render() {
        return (
            <div id="news" className="news section-bottom-only">
                <Container>
                    <Row>
                        <Col md={6} sm={12}>
                            <div className="section-title section-title-left">
                                <h5 className="title-top">News</h5>
                                <h3>Latest Post</h3>
                                <div className="title-desc">
                                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Veniam repellat nobis impedit, distinctio eius cupiditate doloribus labore sunt totam!</p>
                                </div>
                            </div>
                        </Col>
                        <Col md={6} sm={12}>
                            <Row>
                                {this.state.news.map(
                                    (post, i) => <Col key={i} md={6} sm={12}>
                                        <a href={post.link}>
                                            <div className="content">
                                                <img src={post.image} alt="news-logo" />
                                                <h4>{post.title}</h4>
                                                <p>{post.description}</p>
                                            </div>
                                        </a>
                                    </Col>
                                )}
                            </Row>
                        </Col>
                    </Row>
                </Container>
            </div>
        )
    }
}
