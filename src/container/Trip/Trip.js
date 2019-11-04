import React from 'react';
import { connect } from 'react-redux';
import FlightList from '../../components/FlightList/FlightList';
import ImageList from '../../components/ImageList/ImageList';
import './Trip.scss';

export const Trip = ({ meFlights, youFlights, images, youReturnFlights, meReturnFlights }) => {
  const meFlightsOut = meFlights.length < 11 ? meFlights : meFlights.splice(0, 10);
  const meFlightsBack = meReturnFlights.length <11 ? meReturnFlights : meReturnFlights.splice(0, 10);
  const youFlightsOut = youFlights.length < 11 ? youFlights : youFlights.splice(0, 10);
  const youFlightsBack = youReturnFlights.length < 11 ? youReturnFlights : youReturnFlights.splice(0, 10);
  return (
    <div className="trips">
      <section>
        <div className="me_flights_out flight_list">
          <h3>Me &rarr; Us</h3>
          <FlightList flights={meFlightsOut} />
        </div>
        <div className="me_flights_back flight_list">
          <h3>Home &larr; Me</h3>
          <FlightList flights={meFlightsBack} />
        </div>
      </section>
      <ImageList images={images} />
      <section>
        <div className="you_flights_out flight_list">
          <h3>Us &larr; You</h3>
          <FlightList className="you_flights_out" flights={youFlightsOut} />
        </div>
        <div className="you_flights_back flight_list">
          <h3>You &rarr; Home</h3>
          <FlightList flights={youFlightsBack} />
        </div>
      </section>
    </div>
  );};

export const mapStateToProps = (state) => ({
  meFlights: state.meFlights,
  youFlights: state.youFlights,
  images: state.images,
  youReturnFlights: state.youReturnFlights,
  meReturnFlights: state.meReturnFlights
});

export default connect(mapStateToProps)(Trip);
