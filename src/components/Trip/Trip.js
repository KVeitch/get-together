import React from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import FlightList from '../FlightList/FlightList'
import ImageList from '../ImageList/ImageList'
import mockFlightData from '../../util/mockFlightData'


export const Trip = ({ meFlights, youFlights }) => {

const legs = mockFlightData.legs 

const bob = Object.keys(legs).map(leg => ({ 
  depart:legs[leg].depart_iso,
  arrive:legs[leg].arrive_iso,
  from:legs[leg].from_code,
  to:legs[leg].to_code,
  flightNo:legs[leg].marketing_num[1]

}))

return(
  <>
    <section>
      <FlightList className="me_flights_out" flights={bob} />
      {/* <FlightList className="me_flights_back"/> */}
    </section>
    <ImageList />
    <section>
      {/* <FlightList className="you_flights_out" flights={bob}/> */}
      {/* <FlightList className="you_flights_back"/> */}
    </section>
  </>
  )
}



export const mapStateToProps = (state) => ({
meFlights: state.meFlights,
youFlights: state.youFlights,
});

export const mapDispatchToProps = (dispatch) => (bindActionCreators({
  
}, dispatch));

export default connect(mapStateToProps, mapDispatchToProps)(Trip);
