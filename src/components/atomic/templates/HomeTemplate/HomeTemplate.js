// @flow
import React from 'react';
import type { Node } from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import HomeHeader from '../../molecules/HomeHeader/HomeHeader';

type Props = {
  /** please describe the prop children */
  children?: Node,
}

const HomeTemplateStyled = styled.div`
  text-align: center;
`;

const HomeIntro = styled.p`
  font-size: large;
`;

const HomeTemplate = (props: Props): Node => (
  <HomeTemplateStyled>
    <HomeHeader />
    <HomeIntro>
      To get started, edit <code>src/Home.js</code> or{' '}
      <code>src/About.js</code>and save to reload.
    </HomeIntro>
    <Link to="/about">About</Link>
  </HomeTemplateStyled>
);

HomeTemplate.defaultProps = {

}; 

export default HomeTemplate;
