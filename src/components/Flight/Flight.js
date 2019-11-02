import React from 'react';
import './Flight.scss'
const Flight = ({ flight }) => {
  const {depart, arrive, from, to, flightNo} = flight;    
  return(
    <section>
      <p>{from} → {to}</p>
      <p>Departs at {depart}</p>
      <p>Arrives at {arrive}</p>
      <p>Flight No. {flightNo}</p>
    </section>
  )
}

export default Flight;