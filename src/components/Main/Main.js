import React, { Component } from 'react';
import airportCodes from '../../util/airports'

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
    console.log('Sub click')
  }


  render= () =>{
    
    const airports = Object.keys(airportCodes).map((airport) => <option value={`${airport}:${airportCodes[airport]}`} />)


    return(
      <form class="flightSearchForm" onSubmit={this.handleSubmit}>
        <h3>Where are we getting together?</h3>
        <section class="enterDestination" >
          <input
            class="destination"
            type="text"
            placeholder="SDY"
            name="destination"
            list="airportCodes"
            autocomplete="off"
            required
            onChange={this.handleChange}
          />
        </section>
        <h3 class="originatingAirport">Where Are We Traveling From?</h3>
        <section class="enterOrigin" >
          <div class="formSection">
            <label>Me</label>
            <input
              class="airport0"
              type="text"
              placeholder="DEN"
              name="meStart"
              list="airportCodes"
              autocomplete="on"
              required
              onChange={this.handleChange}
            />
          </div>
          <div class="formSection">
            <label>You</label>
            <input
              class="airport1"
              type="text"
              placeholder="NYC"
              name='youStart'
              list="airportCodes"
              autocomplete="off"
              required
              onChange={this.handleChange}
            />
          </div>
        </section>
        <h3 class="whereTitle">When Are We Going?</h3>
        <section class="enterTripDates">
          <div class="formSection">
            <label>Leaving On</label>
            <input
              class="startDate"
              type="date"
              name="startDate"
              placeholder="mm/dd/yyyy"
              onChange={this.handleDate}
              required
            />
          </div>
          <div class="formSection">
            <label>Coming Back</label>
            <input
              class="endDate"
              type="date"
              name="returnDate"
              placeholder="mm/dd/yyyy"
              onChange={this.handleDate}
              required
            />
          </div>
        </section>
        <button 
          class="letsGo"
          onClick={this.handleClick}
          type="submit">Let's Go!</button>
        <datalist id="airportCodes">
            {airports}
          </datalist>
      </form>
    )}

}

export default Main;
