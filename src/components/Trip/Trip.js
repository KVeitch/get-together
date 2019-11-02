import React from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import FlightList from '../FlightList/FlightList'
import ImageList from '../ImageList/ImageList'
import './Trip.scss'

export const Trip = ({ meFlights, youFlights, images }) => {
console.log('Trip: ',images)
return(
  <div className="trips">
    <section>
      <div className="me_flights_out flight_list">
        <h3>Me &rarr; Us</h3>
        <FlightList  flights={meFlights} />
      </div>
      <div className="me_flights_back flight_list">
        <h3>Home &larr; Me</h3>
        {/* <FlightList flights={meFlightsBack} /> */}
      </div>
    </section>
    <ImageList images={images} />
    <section>
      <div className="you_flights_out flight_list">
        <h3>Us &larr; You</h3>
        <FlightList className="you_flights_out" flights={youFlights} />
      </div>
      <div className="you_flights_back flight_list">
      <h3>You → Home</h3>  
        {/* <FlightList flights={youFlightsBack} /> */}
      </div>
    </section>
  </div>
  )
}

export const mapStateToProps = (state) => ({
meFlights: state.meFlights,
youFlights: state.youFlights,
images: state.images
});

export const mapDispatchToProps = (dispatch) => (bindActionCreators({
  
}, dispatch));

export default connect(mapStateToProps, mapDispatchToProps)(Trip);
