/* eslint-disable max-lines-per-function */
import React from 'react';
import { shallow } from 'enzyme';
import { MainForm, mapDispatchToProps } from './MainForm';
import * as actions from '../../actions';
import { getPhotos, getFlights } from '../../util/apiCalls';

jest.mock('../../util/apiCalls');

describe('MainForm', () => {
  let wrapper = shallow(<MainForm />);
  it('should match the initial snapshot', () => {
    expect(wrapper).toMatchSnapshot();
  });

  describe('handleChange', () => {
    wrapper = shallow(<MainForm />);

    it('should update state if a user puts in a destination', () => {
      const mockEvent = {
        target: { name: 'destination', value: 'SFO:San Fransisco' }
      };
      expect(wrapper.state('destination')).toEqual('');
      wrapper.instance().handleChange(mockEvent);
      expect(wrapper.state('destination')).toEqual('SFO');
    });

    it('should update state if a user inputs thier starting location', () => {
      const mockEvent = { target: { name: 'meStart', value: 'DEN:Denver' } };
      expect(wrapper.state('meStart')).toEqual('');
      wrapper.instance().handleChange(mockEvent);
      expect(wrapper.state('meStart')).toEqual('DEN');
    });

    it('should update state if a user inputs thier friends starting location', () => {
      const mockEvent = {
        target: { name: 'youStart', value: 'ABQ:Albuquerque' }
      };
      expect(wrapper.state('youStart')).toEqual('');
      wrapper.instance().handleChange(mockEvent);
      expect(wrapper.state('youStart')).toEqual('ABQ');
    });
  });

  describe('handleDate', () => {
    wrapper = shallow(<MainForm />);

    it('should update state if a user puts in a departure date', () => {
      const mockEvent = { target: { name: 'startDate', value: '2019-10-11' } };
      const expected = {
        year: '2019',
        month: '10',
        day: '11'
      };
      expect(wrapper.state('startDate')).toEqual('');
      wrapper.instance().handleDate(mockEvent);
      expect(wrapper.state('startDate')).toEqual(expected);
    });

    it('should update state if a user puts in a return date', () => {
      const mockEvent = { target: { name: 'returnDate', value: '2020-12-16' } };
      const expected = {
        year: '2020',
        month: '12',
        day: '16'
      };
      expect(wrapper.state('returnDate')).toEqual('');
      wrapper.instance().handleDate(mockEvent);
      expect(wrapper.state('returnDate')).toEqual(expected);
    });
  });

  it('should fire multiple actions when the for is submitted', () => {
    const mockEvent = {
      preventDefault: jest.fn(),
      stopPropagation: jest.fn()
    };
    const mockMeStart = 'DEN';
    const mockYouStart = 'SFO';
    const mockDestination = 'JFK';
    const mockStartDate = { month: '10', day: '11', year: '2020' };
    const mockReturnDate = { month: '12', day: '13', year: '2020' };


    const wrapperSubmit = shallow(<MainForm
      setStartDate={jest.fn()}
      setReturnDate={jest.fn()}
      setMeStart={jest.fn()}
      setYouStart={jest.fn()}
      setDestination={jest.fn()}
      setCityName={jest.fn()}
    />);
    wrapperSubmit.instance().setState({
      meStart: mockMeStart,
      youStart: mockYouStart,
      destination: mockDestination,
      startDate: mockStartDate,
      returnDate: mockReturnDate
    });
    wrapperSubmit.instance().getMeToDestination = jest.fn();
    wrapperSubmit.instance().getMeToHome = jest.fn();
    wrapperSubmit.instance().getYouToDestination = jest.fn();
    wrapperSubmit.instance().getYouToHome = jest.fn();
    wrapperSubmit.instance().getLocationPhotos = jest.fn();

    wrapperSubmit.instance().handleSubmit(mockEvent);

    expect(wrapperSubmit.instance().getMeToDestination).toHaveBeenCalledWith(mockStartDate, mockMeStart, mockDestination);
    expect(wrapperSubmit.instance().getMeToHome).toHaveBeenCalledWith(mockReturnDate, mockDestination, mockMeStart);
    expect(wrapperSubmit.instance().getYouToDestination).toHaveBeenCalledWith(mockStartDate, mockYouStart, mockDestination);
    expect(wrapperSubmit.instance().getYouToHome).toHaveBeenCalledWith(mockReturnDate, mockDestination, mockYouStart);
  });

  it('should run handleSubmit when the form is submitted', () => {
    const event = { preventDefault: jest.fn(), stopPropagation: jest.fn() };
    wrapper.instance().handleSubmit = jest.fn();
    wrapper.instance().forceUpdate();
    wrapper.find('form').simulate('submit', event);
    expect(wrapper.instance().handleSubmit).toHaveBeenCalled();
    expect(wrapper.instance().handleSubmit).toHaveBeenCalledWith(event);
  });

  it('should get location photos', () => {
    wrapper.instance().getLocationPhotos('denver');
    expect(getPhotos).toHaveBeenCalled();
  });

  it('should get user flights to destination', () => {
    const mockDate = { month: '12', day: '22', year: '1976' };
    const mockStart = 'SFO';
    const mockDestination = 'DEN';
    wrapper.instance().getMeToDestination(mockDate, mockStart, mockDestination);
    expect(getFlights).toHaveBeenCalled();
  });

  it('should get user return flights', () => {
    const mockDate = { month: '12', day: '22', year: '1976' };
    const mockStart = 'SFO';
    const mockDestination = 'DEN';
    wrapper.instance().getMeToHome(mockDate, mockStart, mockDestination);
    expect(getFlights).toHaveBeenCalled();
  });

  it('should get friend flights to destination', () => {
    const mockDate = { month: '12', day: '22', year: '1976' };
    const mockStart = 'SFO';
    const mockDestination = 'DEN';
    wrapper.instance().getYouToDestination(mockDate, mockStart, mockDestination);
    expect(getFlights).toHaveBeenCalled();
  });

  it('should get friend return flights', () => {
    const mockDate = { month: '12', day: '22', year: '1976' };
    const mockStart = 'SFO';
    const mockDestination = 'DEN';
    wrapper.instance().getYouToHome(mockDate, mockStart, mockDestination);
    expect(getFlights).toHaveBeenCalled();
  });
});

describe('MainForm mapDispatchToProps', () => {
  it('should call dispatch with setCityName action when setCityName is called', () => {
    const mockDispatch = jest.fn();
    const mockCityName = 'Denver';
    const actionToDispatch = actions.setCityName('SET_CITY_NAME', mockCityName);
    const mappedProps = mapDispatchToProps(mockDispatch);
    mappedProps.setCityName('SET_CITY_NAME', mockCityName);
    expect(mockDispatch).toHaveBeenCalledWith(actionToDispatch);
  });

  it('should call dispatch with setDestination action when setDestination is called', () => {
    const mockDispatch = jest.fn();
    const mockDestination = 'DEN';
    const actionToDispatch = actions.setDestination('SET_DESTINATION',mockDestination);
    const mappedProps = mapDispatchToProps(mockDispatch);
    mappedProps.setDestination('SET_DESTINATION',mockDestination);
    expect(mockDispatch).toHaveBeenCalledWith(actionToDispatch);
  });

  it('should call dispatch with setImages action when setImages is called', () => {
    const mockDispatch = jest.fn();
    const mockImageData = [
      'https://images.unsplash.com/photo-1469248620856-e8c981d98aff?',
      'https://images.unsplash.com/photo-1463085154687-27abe97620ab?',
      'https://images.unsplash.com/photo-1563050290-3e3f37cf643f?',
      'https://images.unsplash.com/photo-1561930186-61e986a49542?',
      'https://images.unsplash.com/photo-1557804486-8b6751e4e8eb?'
    ];
    const actionToDispatch = actions.setImages('SET_IMAGES', mockImageData);
    const mappedProps = mapDispatchToProps(mockDispatch);
    mappedProps.setImages('SET_IMAGES', mockImageData);
    expect(mockDispatch).toHaveBeenCalledWith(actionToDispatch);
  });

  it('should call dispatch with setMeFlights action when setMeFlights is called', () => {
    const mockDispatch = jest.fn();
    const mockFlightData = [
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
      }
    ];
    const actionToDispatch = actions.setMeFlights('SET_ME_FLIGHTS', mockFlightData);
    const mappedProps = mapDispatchToProps(mockDispatch);
    mappedProps.setMeFlights('SET_ME_FLIGHTS', mockFlightData);
    expect(mockDispatch).toHaveBeenCalledWith(actionToDispatch);
  });

  it('should call dispatch with setMeReturnFlights action when setMeReturnFlights is called', () => {
    const mockDispatch = jest.fn();
    const mockFlightData = [
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
      }
    ];
    const actionToDispatch = actions.setMeReturnFlights('SET_ME_RETURN_FLIGHTS', mockFlightData);
    const mappedProps = mapDispatchToProps(mockDispatch);
    mappedProps.setMeReturnFlights('SET_ME_RETURN_FLIGHTS', mockFlightData);
    expect(mockDispatch).toHaveBeenCalledWith(actionToDispatch);
  });

  it('should call dispatch with setMeStart action when setMeStart is called', () => {
    const mockDispatch = jest.fn();
    const mockStart = 'JFK';
    const actionToDispatch = actions.setMeStart('SET_ME_START', mockStart);
    const mappedProps = mapDispatchToProps(mockDispatch);
    mappedProps.setMeStart('SET_ME_START', mockStart);
    expect(mockDispatch).toHaveBeenCalledWith(actionToDispatch);
  });

  it('should call dispatch with setReturnDate action when setReturnDate is called', () => {
    const mockDispatch = jest.fn();
    const mockDate = {
      year: '1234',
      month: '56',
      day: '78'
    };
    const actionToDispatch = actions.setReturnDate('SET_RETURN_DATE', mockDate);
    const mappedProps = mapDispatchToProps(mockDispatch);
    mappedProps.setReturnDate('SET_RETURN_DATE', mockDate);
    expect(mockDispatch).toHaveBeenCalledWith(actionToDispatch);
  });

  it('should call dispatch with setStartDates action when setStartDate is called', () => {
    const mockDispatch = jest.fn();
    const mockDate = {
      year: '1234',
      month: '56',
      day: '78'
    };
    const actionToDispatch = actions.setStartDate('SET_START_DATE', mockDate);
    const mappedProps = mapDispatchToProps(mockDispatch);
    mappedProps.setStartDate('SET_START_DATE', mockDate);
    expect(mockDispatch).toHaveBeenCalledWith(actionToDispatch);
  });

  it('should call dispatch with setYouFlights action when setYouFlights is called', () => {
    const mockDispatch = jest.fn();
    const mockFlightData = [
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
      }
    ];
    const actionToDispatch = actions.setYouFlights('SET_YOU_FLIGHT', mockFlightData);
    const mappedProps = mapDispatchToProps(mockDispatch);
    mappedProps.setYouFlights('SET_YOU_FLIGHT', mockFlightData);
    expect(mockDispatch).toHaveBeenCalledWith(actionToDispatch);
  });

  it('should call dispatch with setYouReturnFlights action when setYouReturnFlights is called', () => {
    const mockDispatch = jest.fn();
    const mockFlightData = [
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
      }
    ];
    const actionToDispatch = actions.setYouReturnFlights('SET_YOU_RETURN_FLIGHTS', mockFlightData);
    const mappedProps = mapDispatchToProps(mockDispatch);
    mappedProps.setYouReturnFlights('SET_YOU_RETURN_FLIGHTS', mockFlightData);
    expect(mockDispatch).toHaveBeenCalledWith(actionToDispatch);
  });

  it('should call dispatch with setYouStart action when setYouStart is called', () => {
    const mockDispatch = jest.fn();
    const mockDate = {
      year: '1234',
      month: '56',
      day: '78'
    };
    const actionToDispatch = actions.setYouStart('SET_YOU_START', mockDate);
    const mappedProps = mapDispatchToProps(mockDispatch);
    mappedProps.setYouStart('SET_YOU_START', mockDate);
    expect(mockDispatch).toHaveBeenCalledWith(actionToDispatch);
  });
});

describe('MainForm conditional render', () => {
  it('should render a redirect when the form is completed', () => {
    const wrapperCond = shallow(<MainForm />);
    wrapperCond.instance().setState({ isFormComplete: true });
    expect(wrapperCond).toMatchSnapshot();
  });
});
