import React, { Component } from 'react';
import airportCodes from '../../util/airports'
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { setMeFlights, setYouFlights, setStartDate, setReturnDate, setMeStart, setYouStart, setDestination } from '../../actions';
import { getFlights } from '../../util/apiCalls'
import './Main.scss'

export class Main extends Component {
  constructor() {
    super()
    this.state = {
      meStart:'',
      youStart:'',
      destination:'',
      startDate:'',
      returnDate:'',
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
    const { setStartDate, setReturnDate, setMeStart, setYouStart, setDestination } = this.props;
    const { meStart, youStart, destination, startDate, returnDate } = this.state;

    setStartDate(startDate)
    setReturnDate(returnDate)
    setMeStart(meStart)
    setYouStart(youStart)
    setDestination(destination)
    
    // getFlights(date, startingLocation, destination)

  }


  render= () =>{
    
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
          onClick={this.handleClick}
          type="submit">Let's Go!</button>
        <datalist id="airportCodes">
            {airports}
          </datalist>
      </form>
    )}

}

export const mapStateToProps = (state) => ({

});

export const mapDispatchToProps = (dispatch) => (bindActionCreators({
  setMeFlights,
  setYouFlights,
  setStartDate,
  setReturnDate,
  setMeStart,
  setYouStart,
  setDestination,
}, dispatch));

export default connect(mapStateToProps, mapDispatchToProps) (Main);
