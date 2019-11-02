import { combineReducers } from 'redux';
import meFlights from './meFlights';
import meStart from './meStart';
import returnDate from './returnDate'
import startDate from './startDate'
import youStart from './youStart'
import youFlights from './youFlights'
import destination from './destination'

const rootReducer = combineReducers({
  destination,
  meFlights,
  meStart,
  returnDate,
  startDate,
  youFlights,
  youStart,
});

export default rootReducer;