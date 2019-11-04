const meStart = (state = '', action) => {
  switch (action.type) {
    case 'SET_ME_START':
      return action.airport;
    default:
      return state;
  }
};

export default meStart;
