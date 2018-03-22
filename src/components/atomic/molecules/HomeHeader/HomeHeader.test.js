import React from 'react';
import renderer from 'react-test-renderer';
import 'jest-styled-components';

import HomeHeader from './HomeHeader';

it('renders default HomeHeader snapshot', () => {
  const tree = renderer.create(
    <HomeHeader

    >
       Lorem Ipsum Children
    </HomeHeader>
  ).toJSON();
  expect(tree).toMatchSnapshot();
});
