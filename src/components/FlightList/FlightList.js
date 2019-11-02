import React from 'react';
import './FlightList.scss'
import Flight from '../Flight/Flight'

const FlightList = ({ flights }) => {
  const flightList = flights.map((flight) => <Flight flight={flight} key={flight.flightNo} />)

  return ( 
    <section className="section__flights">
      {flightList}
    </section>
  )
}

export default FlightList;
