import cityName from './cityName';
import destination from './destination';
import images from './images';
import meFlights from './meFlights';
import meReturnFlights from './meReturnFlights';
import meStart from './meStart';
import returnDate from './returnDate';
import startDate from './startDate';
import youFlights from './youFlights';
import youReturnFlights from './youReturnFlights';
import youStart from './youStart';

const mockFlights = [
  {
    arrival: '11/30/2019',
    arrivalTime: '6 : 24 PM',
    depart: '11/30/2019',
    departTime: '6 : 24 PM',
    from: 'DEN',
    to: 'COS',
    flights: 'X2 -1'
  },
  {
    arrival: '11/30/2019',
    arrivalTime: '10 : 35 AM',
    depart: '11/30/2019',
    departTime: '10 : 35 AM',
    from: 'DEN',
    to: 'COS',
    flights: 'X2 -1'
  },
  {
    arrival: '11/30/2019',
    arrivalTime: '6 : 41 AM',
    depart: '11/30/2019',
    departTime: '6 : 41 AM',
    from: 'DEN',
    to: 'COS',
    flights: 'X2 -1'
  },
  {
    arrival: '11/30/2019',
    arrivalTime: '2 : 30 PM',
    depart: '11/30/2019',
    departTime: '2 : 30 PM',
    from: 'DEN',
    to: 'COS',
    flights: 'X2 -1'
  },
  {
    arrival: '11/30/2019',
    arrivalTime: '10 : 19 PM',
    depart: '11/30/2019',
    departTime: '10 : 19 PM',
    from: 'DEN',
    to: 'COS',
    flights: 'X2 -1'
  }
];

describe('cityName reducer', () => {
  it('should return the default state as an empty string', () => {
    const result = cityName(undefined, {});
    expect(result).toEqual('');
  });

  it('cityName should return new state when the action type is SET_CITY_NAME', () => {
    const mockAction = {
      type: 'SET_CITY_NAME',
      cityName: 'Paris'
    };
    const results = cityName('', mockAction);
    expect(results).toEqual(mockAction.cityName);
  });
});

describe('destination reducer', () => {
  it('should return the default state as an empty string', () => {
    const result = destination(undefined, {});
    expect(result).toEqual('');
  });

  it('should return new state when the action type is SET_DESTINATION', () => {
    const mockAction = {
      type: 'SET_DESTINATION',
      destination: 'SFO'
    };
    const results = destination('', mockAction);
    expect(results).toEqual(mockAction.destination);
  });
});

describe('images reducer', () => {
  it('should return the default state as an empty array', () => {
    const result = images(undefined, {});
    expect(result).toEqual([]);
  });

  it('should return new state when the action type is SET_IMAGES', () => {
    const mockImageArray = [
      'https://images.unsplash.com/photo-1469248620856-e8c981d98aff?',
      'https://images.unsplash.com/photo-1463085154687-27abe97620ab?',
      'https://images.unsplash.com/photo-1563050290-3e3f37cf643f?',
      'https://images.unsplash.com/photo-1561930186-61e986a49542?',
      'https://images.unsplash.com/photo-1557804486-8b6751e4e8eb?'
    ];
    const mockAction = {
      type: 'SET_IMAGES',
      images: mockImageArray
    };
    const results = images(undefined, mockAction);
    expect(results).toEqual(mockImageArray);
  });
});

describe('meFlights reducer', () => {
  it('should return the default state as an empty array', () => {
    const result = meFlights(undefined, {});
    expect(result).toEqual([]);
  });

  it('should return new state when the action type is ET_ME_FLIGHTS', () => {
    const mockAction = {
      type: 'SET_ME_FLIGHTS',
      flights: mockFlights
    };
    const results = meFlights([], mockAction);
    expect(results).toEqual(mockFlights);
  });
});

describe('meReturnFlights reducer', () => {
  it('should return the default state as an empty array', () => {
    const result = meReturnFlights(undefined, {});
    expect(result).toEqual([]);
  });

  it('should return new state when the action type is SET_ME_RETURN_FLIGHTS', () => {
    const mockAction = {
      type: 'SET_ME_RETURN_FLIGHTS',
      flights: mockFlights
    };
    const results = meReturnFlights([], mockAction);
    expect(results).toEqual(mockFlights);
  });
});

describe('meStart reducer', () => {
  it('should return the default state as an empty string', () => {
    const result = meStart(undefined, {});
    expect(result).toEqual('');
  });

  it('should return new state when the action type is SET_ME_START', () => {
    const mockAirport = 'DEN';
    const mockAction = {
      type: 'SET_ME_START',
      airport: mockAirport
    };
    const results = meStart('', mockAction);
    expect(results).toEqual(mockAirport);
  });
});

describe('returnDate reducer', () => {
  it('should return the default state as an empty object', () => {
    const result = returnDate(undefined, {});
    expect(result).toEqual({});
  });

  it('should return new state when the action type is SET_RETURN_DATE', () => {
    const mockDate = {
      year: '1234',
      month: '56',
      day: '78'
    };
    const mockAction = {
      type: 'SET_RETURN_DATE',
      date: mockDate
    };
    const results = returnDate({}, mockAction);
    expect(results).toEqual(mockDate);
  });
});

describe('startDate reducer', () => {
  it('should return the default state as an empty object', () => {
    const result = startDate(undefined, {});
    expect(result).toEqual({});
  });

  it('should return new state when the action type is SET_START_DATE', () => {
    const mockDate = {
      year: '5678',
      month: '34',
      day: '12'
    };
    const mockAction = {
      type: 'SET_START_DATE',
      date: mockDate
    };
    const results = startDate({}, mockAction)
    expect(results).toEqual(mockDate);
  });
});

describe('youFlights reducer', () => {
  it('should return the default state as an empty array', () => {
    const result = youFlights(undefined, {});
    expect(result).toEqual([]);
  });

  it('should return new state when the action type is SET_YOU_FLIGHTS', () => {
    const mockAction = {
      type: 'SET_YOU_FLIGHTS',
      flights: mockFlights
    };
    const results = youFlights([], mockAction);
    expect(results).toEqual(mockFlights);
  });
});

describe('youReturnFlights reducer', () => {
  it('should return the default state as an empty array', () => {
    const result = youReturnFlights(undefined, {});
    expect(result).toEqual([]);
  });

  it('should return new state when the action type is SET_YOU_RETURN_FLIGHTS', () => {
    const mockAction = {
      type: 'SET_YOU_RETURN_FLIGHTS',
      flights:mockFlights,
    }
    const results = youReturnFlights([], mockAction);
    expect(results).toEqual(mockFlights);
  });
});

describe('youStart reducer', () => {
  it('should return the default state as an empty string', () => {
    const result = youStart(undefined, {});
    expect(result).toEqual('');
  });

  it('should return new state when the action type is XXXXXXXX', () => {
    const mockAirport = 'DEN'
    const mockAction = {
      type: 'SET_YOU_START',
      airport:mockAirport,
    };
    const results = youStart('', mockAction);
    expect(results).toEqual(mockAirport);
  });
});
