const meFlights = (state = [], action) => {
  switch (action.type) {
    case 'SET_ME_FLIGHTS':
      return action.flights;
    default:
      return state;
  }
};

export default meFlights;
