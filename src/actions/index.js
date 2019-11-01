export const setMeFlights = (flights) => ({
  type: 'SET_ME_FLIGHTS',
  flights,
});

export const setYouFlights = (flights) => ({
  type: 'SET_YOU_FLIGHTS',
  flights,
});

export const setLocationPictures = (pictures) => ({
  type: 'SET_LOCATION_PICTURES',
  pictures,
});

export const setStartDate = (date) => ({
  type: 'SET_START_DATE',
  date
});

export const setReturnDate = (date) => ({
  type: 'SET_RETURN_DATE',
  date
});

export const setMeStart = (airport) => ({
  type: 'SET_ME_START',
  airport,
});

export const setYouStart = (airport) => ({
  type: 'SET_YOU_START',
  airport
});