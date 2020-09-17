import React, { Component } from 'react';
import NavLayout from './NavLayout';
import FooterLayout from "./FooterLayout";

export default class BasePage extends Component {
    render() {
        return (
            <>
                <NavLayout data={this.props.menus} />
                { this.props.children }
                <FooterLayout />
            </>
        )
    }
}
