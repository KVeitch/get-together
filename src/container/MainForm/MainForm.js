/* eslint-disable max-lines-per-function */
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';
import { bindActionCreators } from 'redux';
import PropTypes from 'prop-types';
import airportCodes from '../../util/airports';
import {
  setCityName,
  setMeFlights,
  setMeReturnFlights,
  setYouReturnFlights,
  setYouFlights,
  setStartDate,
  setReturnDate,
  setMeStart,
  setYouStart,
  setDestination,
  setImages
} from '../../actions';
import { getFlights, getPhotos } from '../../util/apiCalls';
import './MainForm.scss';


export class MainForm extends Component {
  constructor() {
    super();
    this.state = {
      destination: '',
      isFormComplete: false,
      meStart: '',
      returnDate: '',
      startDate: '',
      youStart: ''
    };
  }

  handleChange = (e) => {
    const airportCode = e.target.value.split(':')[0].toUpperCase();
    this.setState({ [e.target.name]: airportCode });
  }

  handleDate = (e) => {
    const dateSplit = e.target.value.split('-');
    const date = { 
      year: dateSplit[0],
      month: dateSplit[1],
      day: dateSplit[2]
    };
    this.setState({ [e.target.name]:date });
  }

  handleSubmit = (e) => {
    e.preventDefault();
    e.stopPropagation();
    const { setStartDate, setReturnDate, setMeStart, setYouStart, setDestination, setCityName } = this.props;
    const { meStart, youStart, destination, startDate, returnDate } = this.state;

    setStartDate(startDate);
    setReturnDate(returnDate);
    setMeStart(meStart);
    setYouStart(youStart);
    setDestination(destination);
    setCityName(airportCodes[destination]);
    this.getMeToDestination(startDate, meStart, destination);
    this.getMeToHome(returnDate, destination, meStart);
    this.getYouToDestination(startDate, youStart, destination);
    this.getYouToHome(returnDate, destination, youStart);
    this.getLocationPhotos(airportCodes[destination]);
    this.setState({ isFormComplete : true });
  }

  getLocationPhotos = async (city) => {
    const { setImages } = this.props;
    try {
      const photos = await getPhotos(city);
      setImages(photos);
    } catch (error) {
      console.log(error);
    }
  }

  getMeToDestination = async (date, startingLocation, destination) => {
    const { setMeFlights } = this.props;
    try {
      const flights = await getFlights(date, startingLocation, destination);
      setMeFlights(flights);
    } catch (error) {
      console.log(error);
    }
  }

  getMeToHome = async (date, startingLocation, destination) => {
    const { setMeReturnFlights } = this.props;
    try {
      const flights = await getFlights(date, startingLocation, destination);
      setMeReturnFlights(flights);
    } catch (error) {
      console.log(error);
    }
  }

  getYouToDestination = async (date, startingLocation, destination) => {
    const { setYouFlights } = this.props;
    try {
      const flights = await getFlights(date, startingLocation, destination);
      setYouFlights(flights);
    } catch (error) {
      console.log(error);
    }
  }

  getYouToHome = async (date, startingLocation, destination) => {
    const { setYouReturnFlights } = this.props;
    try {
      const flights = await getFlights(date, startingLocation, destination);
      setYouReturnFlights(flights);
    } catch (error) {
      console.log(error);
    }
  }

  render= () => {
    const { isFormComplete } = this.state;

    if (isFormComplete) {
      return <Redirect to="/trip" />;
    }

    const airports = Object.keys(airportCodes).map((airport, i) => <option key={i} value={`${airport}:${airportCodes[airport]}`} />);

    return (
      <form className="main__form-flight" onSubmit={this.handleSubmit}>
        <h3>Where are we getting together?</h3>
        <section>
          <input
            className="destination"
            type="text"
            placeholder="SDY"
            name="destination"
            list="airportCodes"
            autoComplete="off"
            required
            onChange={this.handleChange}
          />
        </section>
        <h3 className="originatingAirport">Where Are We Traveling From?</h3>
        <section className="form__section" >
          <div className="section__departure-container">
            <label htmlFor="meStart">Me</label>
            <input
              className="airport0"
              type="text"
              placeholder="DEN"
              name="meStart"
              list="airportCodes"
              autoComplete="off"
              required
              onChange={this.handleChange}
            />
          </div>
          <div className="section__departure-container">
            <label htmlFor="youStart">You</label>
            <input
              className="airport1"
              type="text"
              placeholder="JFK"
              name="youStart"
              list="airportCodes"
              autoComplete="off"
              required
              onChange={this.handleChange}
            />
          </div>
        </section>
        <h3>When Are We Going?</h3>
        <section className="form__section">
          <div className="date__container">
            <label htmlFor="startDate">Leaving On</label>
            <input
              className="startDate"
              type="date"
              name="startDate"
              placeholder="mm/dd/yyyy"
              onChange={this.handleDate}
              required
            />
          </div>
          <div className="date__container">
            <label htmlFor="returnDate">Coming Back</label>
            <input
              className="endDate"
              type="date"
              name="returnDate"
              placeholder="mm/dd/yyyy"
              onChange={this.handleDate}
              required
            />
          </div>
        </section>
        <button 
          className="form__btn-submit"
          type="submit"
        >
          Let&apos;s Go!
        </button>
        <datalist id="airportCodes">
          {airports}
        </datalist>
      </form>
    );
  }
}


export const mapDispatchToProps = (dispatch) => (bindActionCreators({
  setCityName,
  setDestination,
  setImages,
  setMeFlights,
  setMeReturnFlights,
  setMeStart,
  setReturnDate,
  setStartDate,
  setYouFlights,
  setYouReturnFlights,
  setYouStart
}, dispatch));

export default connect(null, mapDispatchToProps)(MainForm);

MainForm.propTypes = {
  setCityName: PropTypes.func,
  setDestination: PropTypes.func,
  setImages: PropTypes.func,
  setMeFlights: PropTypes.func,
  setMeReturnFlights: PropTypes.func,
  setMeStart: PropTypes.func,
  setReturnDate: PropTypes.func,
  setStartDate: PropTypes.func,
  setYouFlights: PropTypes.func,
  setYouReturnFlights: PropTypes.func,
  setYouStart: PropTypes.func,
};
