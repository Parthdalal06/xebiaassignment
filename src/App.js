import React, { Component } from 'react';
import './App.css';
import Main from './components/maincomponent'
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter } from 'react-router-dom';

class App extends Component {
  render() {
    return (
      <BrowserRouter>
      <Main/>
      </BrowserRouter>
    );
  }
}

export default App;
