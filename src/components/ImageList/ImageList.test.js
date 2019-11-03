import React from 'react';
import { shallow } from 'enzyme';
import ImageList from './ImageList';

describe('ImageList ', () => {
  const mockImages = [
    'https://images.unsplash.com/photo-1481315555141-253bc71d6f67',
    'https://images.unsplash.com/photo-1566928661283-35dc6abad9ef',
    'https://images.unsplash.com/photo-1532556884697-26324ee63594',
    'https://images.unsplash.com/photo-1545855869-f42702d73d91',
    'https://images.unsplash.com/photo-1545855869-fdd7d4a9753c',
    'https://images.unsplash.com/photo-1545855869-e3bbd54ff4bb',
    'https://images.unsplash.com/photo-1479150328630-b0307b442238',
    'https://images.unsplash.com/photo-1512454049206-bf6d9e5ccc97',
    'https://images.unsplash.com/uploads/14113833185419659518b/db0d71dd',
    'https://images.unsplash.com/photo-1437322810648-079dd4730a3b',
    'https://images.unsplash.com/photo-1536869186265-21d6e115c51a',
    'https://images.unsplash.com/photo-1545238554-660f7944fff4',
    'https://images.unsplash.com/photo-1518138945951-647273bf05aa',
    'https://images.unsplash.com/photo-1534239097568-685ece0e15bf',
    'https://images.unsplash.com/photo-1531166416685-ca5aa511eca1'
  ];
  const wrapper = shallow(<ImageList images={mockImages} />);
  it('should match the snapshot with all the data passed in correctly', () => {
    expect(wrapper).toMatchSnapshot();
  });
});
