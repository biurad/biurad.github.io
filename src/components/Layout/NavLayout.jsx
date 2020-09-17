import React, { Component } from 'react';
import { Navbar, Container, Nav } from 'react-bootstrap';
import NavbarToggle from 'react-bootstrap/NavbarToggle';
import NavbarCollapse from 'react-bootstrap/NavbarCollapse';
import $ from 'jquery';
import { Link } from 'react-router-dom';
import logo from '../../images/logo.png';

export default class NavLayout extends Component {
    componentDidMount() {
        // hide navbar on mobile after click
        $('.navbar-nav a').on('click', function () {
            $('.navbar-collapse').collapse('hide');
        });

        // navbar on scroll
        $(window).on("scroll", function () {

            let onScroll = $(this).scrollTop();

            if (onScroll > 50) {
                $(".navbar").addClass("navbar-fixed");

                $(".navbar-ng .navbar-collapse .current a").css({
                    "color": "blue"
                });
            }
            else {
                $(".navbar").removeClass("navbar-fixed");
                $(".navbar-ng .navbar-collapse .current a").css({
                    "background-color": "#ffc107"
                });
            }

        });
    }

    render() {
        return (
            <Navbar expand="md" fixed="top">
                <Container>
                    <Navbar.Brand href="./"><img src={logo} alt="Logo" /></Navbar.Brand>
                    <NavbarToggle data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent">
                        <i className="icon ion-ios-menu"></i>
                    </NavbarToggle>
                    <NavbarCollapse id="navbarSupportedContent">
                        <Nav className="ml-auto" as="ul">
                            {this.props.data.map(
                                (menu, i) => <Nav.Item as="li" key={i}>
                                    <Link to={menu.link} className="nav-link">{menu.name}</Link>
                                </Nav.Item>
                            )}
                        </Nav>
                    </NavbarCollapse>
                </Container>
            </Navbar>
        )
    }
}
