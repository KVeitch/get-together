import React, { Component } from 'react';
import airportCodes from '../../util/airports'
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom'
import { bindActionCreators } from 'redux';
import { setCityName, setMeFlights, setYouFlights, setStartDate, setReturnDate, setMeStart, setYouStart, setDestination, setImages } from '../../actions';
import { getFlights, getPhotos } from '../../util/apiCalls'
import './MainForm.scss'


export class Main extends Component {
  constructor() {
    super()
    this.state = {
      destination:'',
      isFormComplete:false,
      meStart:'',
      returnDate:'',
      startDate:'',
      youStart:'',
    }
  }

  handleChange = (e) => {
    const airportCode = e.target.value.split(':')[0].toUpperCase()
    this.setState({ [e.target.name]:airportCode })
  }

  handleDate = (e) => {
    const dateSplit = e.target.value.split('-')
    const date = { 
      year: dateSplit[0],
      month: dateSplit[1],
      day: dateSplit[2]
    }
    this.setState({ [e.target.name]:date })
  }

  handleSubmit = (e) => {
    e.preventDefault()
    const { setStartDate, setReturnDate, setMeStart, setYouStart, setDestination, setCityName } = this.props;
    const { meStart, youStart, destination, startDate, returnDate } = this.state;

    setStartDate(startDate);
    setReturnDate(returnDate);
    setMeStart(meStart);
    setYouStart(youStart);
    setDestination(destination);
    setCityName(airportCodes[destination])
    this.getMeToDestination(startDate, meStart, destination);
    this.getYouToDestination(startDate, youStart, destination);
    this.getLocationPhotos(airportCodes[destination])
    this.setState({ isFormComplete : true });
  }
  
  getLocationPhotos = async (city) => {
    const { setImages } = this.props;
    const photos = await getPhotos(city);
    await console.log('in the bitch',photos)
    setImages(photos);
  }

  getMeToDestination = async (date, startingLocation, destination) => {
    const { setMeFlights } = this.props;
    const flights = await getFlights(date, startingLocation, destination)
    setMeFlights(flights)
  }

  getYouToDestination = async (date, startingLocation, destination) => {
    const { setYouFlights } = this.props;
    const flights = await getFlights(date, startingLocation, destination)
    setYouFlights(flights)
  }

  render= () => {
    const { isFormComplete } = this.state;

    if (isFormComplete) {
      return <Redirect to="/trip" />;
    }

    const airports = Object.keys(airportCodes).map((airport, i) => <option key={i} value={`${airport}:${airportCodes[airport]}`} />)

    return(
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
            <label>Me</label>
            <input
              className="airport0"
              type="text"
              placeholder="DEN"
              name="meStart"
              list="airportCodes"
              autoComplete="on"
              required
              onChange={this.handleChange}
            />
          </div>
          <div className="section__departure-container">
            <label>You</label>
            <input
              className="airport1"
              type="text"
              placeholder="JFK"
              name='youStart'
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
            <label>Leaving On</label>
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
            <label>Coming Back</label>
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
          Let's Go!
        </button>
        <datalist id="airportCodes">
            {airports}
          </datalist>
      </form>
    )}

}

export const mapStateToProps = (state) => ({

});

export const mapDispatchToProps = (dispatch) => (bindActionCreators({
  setCityName,
  setMeFlights,
  setYouFlights,
  setStartDate,
  setReturnDate,
  setMeStart,
  setYouStart,
  setDestination,
  setImages,
}, dispatch));

export default connect(mapStateToProps, mapDispatchToProps) (Main);
