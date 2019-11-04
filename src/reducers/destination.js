const destination = (state = '', action) => {
  switch (action.type) {
    case 'SET_DESTINATION':
      return action.destination;
    default:
      return state;
  }
};

export default destination;
