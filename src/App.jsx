import React, { Component } from 'react';
import { BrowserRouter } from 'react-router-dom';
import Routes from './Routes';
import './scripts/bootstrap';
import './theme/index.css';

const PUBLIC_URL = window.PUBLIC_URL = '/';

export default class App extends Component {
  render() {
    // specify base href from env varible 'PUBLIC_URL'
    // use only if application isn't served from the root
    // for development it is forced to root only
    /* global PUBLIC_URL */
    const basename = process.env.NODE_ENV === 'developme' ? '/' : (PUBLIC_URL || '/');

    return (
      <BrowserRouter basename={basename}>
        <Routes />
      </BrowserRouter>
    );
  }
}
