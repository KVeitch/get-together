import React from 'react';
import ReactDOM from 'react-dom';
import { shallow } from 'enzyme';
import App from './App';

describe('App', () => {
  const wrapper = shallow(<App />);

  it('should match the snapshot with all the data passed in correctly', () => {
    expect(wrapper).toMatchSnapshot();
  });
});
