import React from 'react';
import renderer from 'react-test-renderer';
import 'jest-styled-components';
import {MemoryRouter} from 'react-router-dom';

import HomeTemplate from './HomeTemplate';

it('renders default HomeTemplate snapshot', () => {
  const tree = renderer.create(
    <MemoryRouter>
      <HomeTemplate
  
      >
         Lorem Ipsum Children
      </HomeTemplate>
    </MemoryRouter>
  ).toJSON();
  expect(tree).toMatchSnapshot();
});
