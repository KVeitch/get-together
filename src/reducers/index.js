import { combineReducers } from 'redux'
import cityName from './cityName'
import destination from './destination'
import images from './images'
import meFlights from './meFlights'
import meReturnFlights from './meReturnFlights'
import meStart from './meStart'
import returnDate from './returnDate'
import startDate from './startDate'
import youFlights from './youFlights'
import youReturnFlights from './youReturnFlights'
import youStart from './youStart'

const rootReducer = combineReducers({
  cityName,
  destination,
  images,
  meFlights,
  meReturnFlights,
  meStart,
  returnDate,
  startDate,
  youFlights,
  youReturnFlights,
  youStart
})

export default rootReducer
