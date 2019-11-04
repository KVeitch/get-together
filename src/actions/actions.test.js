import { 
  setCityName,
  setMeFlights,
  setMeReturnFlights,
  setYouReturnFlights,
  setYouFlights,
  setStartDate,
  setReturnDate,
  setMeStart,
  setYouStart,
  setDestination,
  setImages,
} from './index.js';


describe('Action Creators',() => {
  it('setCityName should return the correct object', () => {
    const cityName = 'Denver';
    const expected = {
      type: 'SET_CITY_NAME',
      cityName
    };
    const results = setCityName(cityName);
    expect(results).toEqual(expected);
  });

  it('setImages should return the correct object', () => {
    const mockImageArray = [
      'https://images.unsplash.com/photo-1469248620856-e8c981d98aff?',
      'https://images.unsplash.com/photo-1463085154687-27abe97620ab?',
      'https://images.unsplash.com/photo-1563050290-3e3f37cf643f?',
      'https://images.unsplash.com/photo-1561930186-61e986a49542?',
      'https://images.unsplash.com/photo-1557804486-8b6751e4e8eb?',
    ]
    const expected = {
      type: 'SET_IMAGES',
      images:mockImageArray,
    }
    const results =setImages(mockImageArray);
    expect(results).toEqual(expected)
  })

  it('setDestination should return the correct object', () => {
    const mockDestination = 'Waco'
    const expected = {
      type: 'SET_DESTINATION',
      destination:mockDestination,
    }
    const results = setDestination(mockDestination);
    expect(results).toEqual(expected)
  })

  it('setYouStart should return the correct object', () => {
    const mockAirport = 'DEN'
    const expected = {
      type: 'SET_YOU_START',
      airport:mockAirport,
    };
    const results = setYouStart(mockAirport);
    expect(results).toEqual(expected)
  })

  it('setMeStart should return the correct object', () => {
    const mockAirport = 'DEN'
    const expected = {
      type: 'SET_ME_START',
      airport:mockAirport,
    };
    const results = setMeStart(mockAirport);
    expect(results).toEqual(expected)
  })

  it('setReturnDate should return the correct object', () => {
    const mockDate ={
      year: '1234',
      month: '56',
      day: '78'
    }
    const expected = {
      type: 'SET_RETURN_DATE',
      date:mockDate,
    };
    const results = setReturnDate(mockDate);
    expect(results).toEqual(expected)
  })

  it('setStartDate should return the correct object', () => {
    const mockDate = {
      year: '5678',
      month: '34',
      day: '12'
    }
    const expected = {
      type: 'SET_START_DATE',
      date:mockDate,
    }
    const results = setStartDate(mockDate);
    expect(results).toEqual(expected)
  })
  describe('Flight Data Actions',() => { 
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
    ]
  
    it('setYouReturnFlights should return the correct object', () => {
      const expected = {
        type: 'SET_YOU_RETURN_FLIGHTS',
        flights:mockFlights,
      };
      const results =setYouReturnFlights(mockFlights);
      expect(results).toEqual(expected)
    })

    it('setYouFlights should return the correct object', () => {
      const expected = {
        type: 'SET_YOU_FLIGHTS',
        flights:mockFlights,
      }
      const results = setYouFlights(mockFlights);
      expect(results).toEqual(expected)
    })

    it('setMeReturnFlights should return the correct object', () => {
      const expected = {
        type: 'SET_ME_RETURN_FLIGHTS',
        flights:mockFlights,
      }
      const results =setMeReturnFlights(mockFlights);
      expect(results).toEqual(expected)
    })

    it('setMeFlights should return the correct object', () => {
      const expected = {
        type: 'SET_ME_FLIGHTS',
        flights:mockFlights,
      }
      const results = setMeFlights(mockFlights);
      expect(results).toEqual(expected)
    })
  })

})