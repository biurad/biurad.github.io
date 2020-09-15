import React, { Component } from 'react';
import { Container, Row, Col, Form, Button } from 'react-bootstrap';
import $ from 'jquery';

export default class ContactSection extends Component {
    constructor(props) {
        super(props);
        this.state = {
            values: { name: "", email: "", subject: "", message: "" },
            isSubmitting: false,
            isError: false
        };
    }

    submitForm = async e => {
        // remove the error class
        $('.form-group').removeClass('has-error');
        $('.help-block').remove();

        e.preventDefault();
        this.setState({ isSubmitting: true });

        // process the form
        $.ajax({
            type: 'POST',
            url: 'https://api.biurad.com/contact',
            data: this.state.values,
            dataType: 'json',
            encode: true
        }).done(response => {
            // handle errors
            if (!response.success) {
                if (response.errors.name) {
                    $('#name-field').addClass('has-error');
                    $('#name-field').find('.col-lg-10').append('<span class="help-block">' + response.errors.name + '</span>');
                }

                if (response.errors.email) {
                    $('#email-field').addClass('has-error');
                    $('#email-field').find('.col-lg-10').append('<span class="help-block">' + response.errors.email + '</span>');
                }

                if (response.errors.subject) {
                    $('#subject-field').addClass('has-error');
                    $('#subject-field').find('.col-lg-10').append('<span class="help-block">' + response.errors.subject + '</span>');
                }

                if (response.errors.message) {
                    $('#message-field').addClass('has-error');
                    $('#message-field').find('.col-lg-10').append('<span class="help-block">' + response.errors.message + '</span>');
                }
            } else {
                this.setState({ note: response.message, isSubmitting: false });
                // display success message
                $('#contact-form').html('<div class="alert alert-success">' + this.state.note + '</div>');
            }
        }).fail(response => {
            this.setState({ note: response.error || response.statusText, isError: true, isSubmitting: false });
        });
    };

    handleInputChange = e =>
        this.setState({
            values: { ...this.state.values, [e.target.name]: e.target.value }
        });

    render() {
        return (
            <div id="contact" className="contact section-bottom-only">
                <Container>
                    <div className="section-title">
                        <h5 className="title-top">Contact Us</h5>
                        <h3>Let's Join Us</h3>
                    </div>
                    <div className="box-content">
                        <Row>
                            <Col md={4} sm={12}>
                                <div className="content">
                                    <h5>Address</h5>
                                    <p>121 King Street, Melbourne Victoria 3000 Australia</p>
                                    <h5>Phone</h5>
                                    <p>+61 3 8376 6284</p>
                                    <h5>Email</h5>
                                    <p>support@example.com</p>
                                </div>
                            </Col>
                            <Col md={8} sm={12}>
                                <div className="content-right">
                                    <Form className="contact-form" id="contact-form" onSubmit={this.submitForm}>
                                        <Row>
                                            <Col>
                                                <div id="first-name-field">
                                                    <input
                                                        type="text"
                                                        placeholder="Name"
                                                        value={this.state.values.name}
                                                        onChange={this.handleInputChange}
                                                        name="name"
                                                    />
                                                </div>
                                            </Col>
                                            <Col>
                                                <div id="email-field">
                                                    <input
                                                        type="email"
                                                        placeholder="Email Address"
                                                        value={this.state.values.email}
                                                        onChange={this.handleInputChange}
                                                        name="email"
                                                    />
                                                </div>
                                            </Col>
                                        </Row>
                                        <Row>
                                            <Col>
                                                <div id="subject-field">
                                                    <input
                                                        type="text"
                                                        placeholder="Subject"
                                                        value={this.state.values.subject}
                                                        onChange={this.handleInputChange}
                                                        name="subject"
                                                    />
                                                </div>
                                            </Col>
                                        </Row>
                                        <Row>
                                            <Col>
                                                <div id="message-field">
                                                    <textarea
                                                        cols="30"
                                                        rows="5"
                                                        id="form-message"
                                                        value={this.state.values.message}
                                                        onChange={this.handleInputChange}
                                                        name="message"
                                                        placeholder="Message"
                                                    >
                                                    </textarea>
                                                </div>
                                            </Col>
                                        </Row>
                                        <Button type="submit" id="submit" name="submit" bsPrefix="button" disabled={this.state.isSubmitting}>Send Message</Button>
                                    </Form>
                                </div>
                            </Col>
                        </Row>
                    </div>
                </Container>
            </div>
        )
    }
}
