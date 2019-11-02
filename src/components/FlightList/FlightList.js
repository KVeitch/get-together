import React from 'react';
import Flight from '../Flight/Flight'

const FlightList = ({ flights }) => {
  console.log(flights)
  const flightList = flights.map((flight, i) => <Flight flight={flight} key={flight.flightNo} />)
  console.log('FL:', flightList)

  return ( 
    <section className="section__flights">
      {flightList}
    </section>
  )
}

export default FlightList;
