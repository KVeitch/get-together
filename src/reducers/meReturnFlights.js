const meReturnFlights = (state = [], action) => {
  switch (action.type) {
    case 'SET_ME_RETURN_FLIGHTS':
      return action.flights;
    default:
      return state;
  }
};

export default meReturnFlights;