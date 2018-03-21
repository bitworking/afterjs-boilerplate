import React, { Component } from 'react';
import logo from '../../assets/react.svg';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { Helmet } from 'react-helmet';

const HomeWrapper = styled.div`
  text-align: center;
`;

const HomeHeader = styled.div`
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

const HomeIntro = styled.p`
  font-size: large;
`;

class Home extends Component {
  static async getInitialProps({ req, res, match, history, location, ...ctx }) {
    return { whatever: 'stuff' };
  }

  render() {
    return (
      <HomeWrapper>
        <Helmet>
          <title>Home</title>
        </Helmet>
        <HomeHeader>
          <img src={logo} alt="logo" />
          <h2>Welcome to After.js</h2>
        </HomeHeader>
        <HomeIntro>
          To get started, edit <code>src/Home.js</code> or{' '}
          <code>src/About.js</code>and save to reload.
        </HomeIntro>
        <Link to="/about">About</Link>
      </HomeWrapper>
    );
  }
}

export default Home;
