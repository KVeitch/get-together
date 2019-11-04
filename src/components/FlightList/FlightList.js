import React from 'react';
import './FlightList.scss';
import Flight from '../Flight/Flight';

const FlightList = ({ flights }) => {
  if (flights.length === 0) {
    return (
      <section className="section__flights">
        Please be patient we&apos;re finding flights for you...
      </section>
    );
  }

  const flightList = flights.map((flight) => (
    <Flight flight={flight} key={Math.random()} />
  ));

  return <section className="section__flights">{flightList}</section>;
};

export default FlightList;
