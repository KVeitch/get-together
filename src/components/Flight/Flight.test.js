import React from 'react';
import { shallow } from 'enzyme';
import Flight from './Flight';


describe('Flight', () => {
  const mockFlight = {
    arrival: '01/15/2020',
    arrivalTime: '1 : 05 PM',
    depart: '01/12/2020',
    departTime: '7 : 51 PM',
    from: 'DEN',
    to: 'MRY',
    flights: 'AA 420 and AA 5718'
  };
  const wrapper = shallow(<Flight flight={mockFlight} />);

  it('should match the snapshot with all the data passed in correctly', () => {
    expect(wrapper).toMatchSnapshot();
  });
});
