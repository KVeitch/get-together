/* eslint-disable max-lines-per-function */
import React from 'react';
import { shallow } from 'enzyme';
import {
  Trip,
  mapStateToProps
} from './Trip';

describe('', () => {
  it('should match the snapshot with all the data passed in correctly', () => {
    const wrapper = shallow(<Trip
      meFlights={[]}
      youFlights={[]}
      images={[]}
      youReturnFlights={[]}
      meReturnFlights={[]}
    />);
    expect(wrapper).toMatchSnapshot();
  });
});

describe('Trip Redux', () => {
  it('mapStateToProps give all the needed data from state', () => {
    const mockState = {
      cityName: 'Waco',
      destination: 'ACT',
      images: [
        'https://images.unsplash.com/photo-1564525804722-b444e7459e52?',
        'https://images.unsplash.com/photo-1558406667-86387b34ba00?',
        'https://images.unsplash.com/photo-1527846884039-a29196edc4c5?',
        'https://images.unsplash.com/photo-1549943872-1af399ac7e3a?',
        'https://images.unsplash.com/photo-1550597125-42837a46d834?',
        'https://images.unsplash.com/photo-1511135232973-c3ee80040060?',
        'https://images.unsplash.com/photo-1536098154140-f3385296c8b5?'
      ],
      meFlights: [
        {
          arrival: '01/13/2020',
          arrivalTime: '6 : 14 PM',
          depart: '01/12/2020',
          departTime: '2 : 44 PM',
          from: 'DEN',
          to: 'ACT',
          flights: 'AA 884 and AA 3769'
        },
        {
          arrival: '01/14/2020',
          arrivalTime: '9 : 04 AM',
          depart: '01/12/2020',
          departTime: '9 : 00 AM',
          from: 'DEN',
          to: 'ACT',
          flights: 'AA 2513 and AA 3510'
        }
      ],
      meReturnFlights: [
        {
          arrival: '01/27/2020',
          arrivalTime: '8 : 08 PM',
          depart: '01/25/2020',
          departTime: '10 : 28 AM',
          from: 'ACT',
          to: 'DEN',
          flights: 'AA 3510 and AA 2235'
        },
        {
          arrival: '01/25/2020',
          arrivalTime: '3 : 51 PM',
          depart: '01/25/2020',
          departTime: '4 : 50 AM',
          from: 'ACT',
          to: 'DEN',
          flights: 'AA 3316 and AA 706'
        }
      ],
      meStart: 'DEN',
      returnDate: {
        year: '2020',
        month: '01',
        day: '25'
      },
      startDate: {
        year: '2020',
        month: '01',
        day: '12'
      },
      youFlights: [
        {
          arrival: '01/13/2020',
          arrivalTime: '6 : 14 PM',
          depart: '01/12/2020',
          departTime: '8 : 26 AM',
          from: 'SLC',
          to: 'ACT',
          flights: 'AA 1214 and AA 3769'
        },
        {
          arrival: '01/13/2020',
          arrivalTime: '6 : 14 PM',
          depart: '01/12/2020',
          departTime: '6 : 25 PM',
          from: 'SLC',
          to: 'ACT',
          flights: 'AA 2357 and AA 3769'
        }
      ],
      youReturnFlights: [
        {
          arrival: '01/26/2020',
          arrivalTime: '11 : 11 AM',
          depart: '01/25/2020',
          departTime: '10 : 28 AM',
          from: 'ACT',
          to: 'SLC',
          flights: 'AA 3510 and AA 2367'
        },
        {
          arrival: '01/27/2020',
          arrivalTime: '2 : 51 PM',
          depart: '01/25/2020',
          departTime: '10 : 28 AM',
          from: 'ACT',
          to: 'SLC',
          flights: 'AA 3510 and AA 2357'
        }
      ],
      youStart: 'SLC'
    };

    const expected = {
      meFlights: mockState.meFlights,
      youFlights: mockState.youFlights,
      images: mockState.images,
      youReturnFlights: mockState.youReturnFlights,
      meReturnFlights: mockState.meReturnFlights
    };
    const mappedProps = mapStateToProps(mockState);

    expect(mappedProps).toEqual(expected);
  });
});
