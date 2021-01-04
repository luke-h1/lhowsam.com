/* eslint-disable */
import React from 'react';
import renderer from 'react-test-renderer';
import Footer from './Footer';
import { theme } from '../../styles/Themes';


test('Footer matches snapshot', () => {
    // @ts-ignore
  const footer = renderer.create(<Footer theme={theme}/>)


    .toJSON();
  expect(footer).toMatchSnapshot();
});