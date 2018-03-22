// @flow
import React from 'react';
import type { Node } from 'react';
import styled from 'styled-components';
import logo from '../../../../assets/react.svg';

type Props = {
  /** please describe the prop children */
  children?: Node,
}

const HomeHeaderStyled = styled.div`
  background-color: #222;
  height: 150px;
  padding: 20px;
  color: white;
  
  img {
    animation: logo-spin infinite 20s linear;
    height: 80px;
  }
  
  @keyframes logo-spin {
    from {
      transform: rotate(0deg);
    }
    to {
      transform: rotate(360deg);
    }
  }
`;

const HomeHeader = (props: Props): Node => (
  <HomeHeaderStyled>
    <img src={logo} alt="logo" />
    <h2>Welcome to After.js</h2>
  </HomeHeaderStyled>
);

HomeHeader.defaultProps = {

}; 

export default HomeHeader;
