
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Route, Link} from 'react-router-dom';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import './App.scss';
import Trip from '../Trip/Trip';
import Main from '../Main/Main';
import bluePlane from '../../images/blue-plane.png'

export class App extends Component {
  async componentDidMount() {

  }

  render = () => (
      <div className="App">
         <header className="title">
           <div className='title-container'>
            <Link to='/'>
            <img className='plane-image' src={bluePlane} />
            </Link>
            <Link to='/'>
              <h1>Connection</h1>
            </Link>
            <img className='plane-image image-mirror' src={bluePlane} />
            </div>
        </header>
        <Route exact path='/' render={()=> <Main />}/>
        <Route exact path='/trip' render={() => <Trip /> }/>
      </div>
    );
  
};

export const mapStateToProps = (state) => ({

});

export const mapDispatchToProps = (dispatch) => (bindActionCreators({
  
}, dispatch));

export default connect(mapStateToProps, mapDispatchToProps) (App);
