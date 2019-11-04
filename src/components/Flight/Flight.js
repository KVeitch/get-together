import React from 'react'
import './Flight.scss'

const Flight = ({ flight }) => {
  const {depart, arrival, from, to, arrivalTime, departTime, flights} = flight
  return (
    <section className="section__flight">
      <h3>{from} &rarr; {to}</h3>
      <p>Departs on {depart} at {departTime}</p>
      <p>Arrives on {arrival} at {arrivalTime}</p>
      <p>Flight {flights}</p>
    </section>
  )
}

export default Flight
