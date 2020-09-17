import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import Routes from './Routes';
import './scripts/bootstrap';
import './theme/index.css';

export default class App extends React.Component {
  render() {
    return (
      <BrowserRouter basename="/"><Routes /></BrowserRouter>
    );
  }
}
