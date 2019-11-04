const cityName = (state = '', action) => {
  switch (action.type) {
    case 'SET_CITY_NAME':
      return action.cityName;
    default:
      return state;
  }
};

export default cityName;
