const youStart = (state = [], action) => {
  switch (action.type) {
    case 'SET_YOU_START':
      return action.airport;
    default:
      return state;
  }
};

export default youStart;