import React, { Component } from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import $ from 'jquery';
import portfolio1 from '../images/portfolio1.jpg';
import portfolio2 from '../images/portfolio2.jpg';
import portfolio3 from '../images/portfolio3.jpg';
import portfolio4 from '../images/portfolio4.jpg';
import portfolio5 from '../images/portfolio5.jpg';
import portfolio6 from '../images/portfolio6.jpg';

export default class PortfolioSection extends Component {
    constructor(props) {
        super(props);
        this.state = {
            portfolios: [
                { "brand": "Color Wall", "message": "Branding", "image": portfolio1, "category": 3 },
                { "brand": "Smooth Flower", "message": "Branding", "image": portfolio2, "category": 2 },
                { "brand": "Vintage Building", "message": "Branding", "image": portfolio3, "category": 1 },
                { "brand": "Theo Digital", "message": "Branding", "image": portfolio4, "category": 3 },
                { "brand": "Painted Wall", "message": "Branding", "image": portfolio5, "category": 2 },
                { "brand": "Blue Lolipop", "message": "Branding", "image": portfolio6, "category": 1 }
            ]
        };
    }

    componentDidMount() {
        // porfolio filterizr
        $('.filter-container').imagesLoaded(function () {
            $('.filter-container').filterizr();
        });

        // portfolio filter
        $('.portfolio-filter-menu li').on('click', function () {
            $('.portfolio-filter-menu li').removeClass('active');
            $(this).addClass('active');
        });

        // portfolio magnific popup
        $('.portfolio').each(function () { // the containers for all your galleries
            $(this).magnificPopup({
                delegate: '.portfolio-popup', // the selector for portfolio item
                type: 'image',
                gallery: {
                    enabled: true
                }
            });
        });
    }

    render() {
        return (
            <div id="portfolio" className="portfolio section-bottom-only">
                <Container>
                    <div className="section-title">
                        <h5 className="title-top">Work</h5>
                        <h3>Our Work Portfolio</h3>
                    </div>
                    <div className="portfolio-filter-menu">
                        <ul>
                            <li data-filter="all" className="active">
                                <span>All</span>
                            </li>
                            <li data-filter="1">
                                <span>Web Design</span>
                            </li>
                            <li data-filter="2">
                                <span>Marketing</span>
                            </li>
                            <li data-filter="3">
                                <span>Branding</span>
                            </li>
                        </ul>
                    </div>
                    <Row noGutters="true" className="filter-container">
                        {this.state.portfolios.map(
                            (portfolio, i) => <Col md={4} sm={6} xs={12} key={i} className="filtr-item" data-category={portfolio.category}>
                                <div className="content-image">
                                    <a href={portfolio.image} className="portfolio-popup">
                                        <img src={portfolio.image} alt="portfolio-logo" />
                                        <div className="image-overlay"></div>
                                        <div className="image-caption">
                                            <h4>{portfolio.brand}</h4>
                                            <span>{portfolio.message}</span>
                                        </div>
                                    </a>
                                </div>
                            </Col>
                        )}
                    </Row>
                </Container>
            </div>
        )
    }
}
