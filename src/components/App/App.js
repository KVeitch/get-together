
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Route } from 'react-router-dom';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import './App.scss';

import logo from '../../logo.svg'

export class App extends Component {
  async componentDidMount() {

  }


  render = () => {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            Edit <code>src/App.js</code> and save to reload.
          </p>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>
        </header>
      </div>
      
    );
  }
}

export const mapStateToProps = (state) => ({

});

export const mapDispatchToProps = (dispatch) => (bindActionCreators({
  
}, dispatch));

export default connect(mapStateToProps, mapDispatchToProps) (App);
