
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Route } from 'react-router-dom';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import './App.scss';
import Trip from '../Trip/Trip'


export class App extends Component {
  async componentDidMount() {

  }

  render = () => {(
      <div className="App">
        <Route to='/'/>
        <Route to='/trip' renter={() => <Trip /> }/>
      </div>
    );
  }
};

export const mapStateToProps = (state) => ({

});

export const mapDispatchToProps = (dispatch) => (bindActionCreators({
  
}, dispatch));

export default connect(mapStateToProps, mapDispatchToProps) (App);
