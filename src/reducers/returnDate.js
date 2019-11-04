const returnDate = (state = {}, action) => {
  switch (action.type) {
    case 'SET_RETURN_DATE':
      return action.date;
    default:
      return state;
  }
};

export default returnDate;
