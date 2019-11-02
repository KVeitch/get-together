import { combineReducers } from 'redux';
import cityName from './cityName';
import destination from './destination';
import images from './images';
import meFlights from './meFlights';
import meStart from './meStart';
import returnDate from './returnDate';
import startDate from './startDate';
import youFlights from './youFlights';
import youStart from './youStart';

const rootReducer = combineReducers({
  cityName,
  destination,
  images,
  meFlights,
  meStart,
  returnDate,
  startDate,
  youFlights,
  youStart,
});

export default rootReducer;