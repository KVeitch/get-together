/* eslint-disable max-lines-per-function */
import React from 'react';
import { shallow } from 'enzyme';
import FlightList from './FlightList';

describe('FlightList with data', () => {
  const mockFlights = [];
  const mockMath = Object.create(global.Math);
  mockMath.random = () => 0.5;
  global.Math = mockMath;
  const wrapper = shallow(<FlightList flights={mockFlights} />);
  it('should match the snapshot with all the data passed in correctly', () => {
    expect(wrapper).toMatchSnapshot();
  });
});

describe('FlightList with data', () => {
  const mockMath = Object.create(global.Math);
  mockMath.random = () => 0.5;
  global.Math = mockMath;
  const mockFlights = [
    {arrival: '01/15/2020', arrivalTime: '1 : 05 PM', depart: '01/12/2020', departTime: '7 : 51 PM', from: 'DEN', to: 'MRY', flights: 'AA 420 and AA 5718'},
    {
      arrival: '01/14/2020',
      arrivalTime: '7 : 36 PM',
      depart: '01/12/2020',
      departTime: '2 : 35 PM',
      from: 'DEN',
      to: 'MRY',
      flights: 'AA 482 and AA 5905'
    },
    {
      arrival: '01/15/2020',
      arrivalTime: '1 : 05 PM',
      depart: '01/12/2020',
      departTime: '5 : 16 PM',
      from: 'DEN',
      to: 'MRY',
      flights: 'AA 2065 and AA 5718'
    },
    {
      arrival: '01/12/2020',
      arrivalTime: '7 : 36 PM',
      depart: '01/12/2020',
      departTime: '5 : 16 PM',
      from: 'DEN',
      to: 'MRY',
      flights: 'AA 2065 and AA 5905'
    },
    {
      arrival: '01/13/2020',
      arrivalTime: '1 : 05 PM',
      depart: '01/12/2020',
      departTime: '2 : 35 PM',
      from: 'DEN',
      to: 'MRY',
      flights: 'AA 482 and AA 5718'
    },
    {
      arrival: '01/12/2020',
      arrivalTime: '11 : 03 PM',
      depart: '01/12/2020',
      departTime: '7 : 51 PM',
      from: 'DEN',
      to: 'MRY',
      flights: 'AA 420 and AA 5837'
    }
  ];
  const wrapper = shallow(<FlightList flights={mockFlights} />);

  it('should match the snapshot with all the data passed in correctly', () => {
    expect(wrapper).toMatchSnapshot();
  });
});
