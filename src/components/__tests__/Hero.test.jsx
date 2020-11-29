/* eslint-disable */
import React from 'react';
import ReactDOM from 'react-dom';
import Hero from '../Hero/Hero';
import Enzyme, {shallow} from 'enzyme';
import EnzymeAdapter from '@wojtekmaj/enzyme-adapter-react-17';
Enzyme.configure({ adapter: new EnzymeAdapter() });


test('renders component without errors', () => { 
  const wrapper = shallow(<Hero />);
  expect(wrapper).toMatchSnapshot();
})
