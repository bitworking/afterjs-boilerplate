// @flow
import React, { Component, Fragment } from 'react';
import { Helmet } from 'react-helmet';
import HomeTemplate from '../../atomic/templates/HomeTemplate/HomeTemplate';
import type {Node} from 'react';

type Props = {
  /** please describe the prop children */
  children?: Node,
}

type InitialProps = {
  req: any,
  res: any,
  match: any,
  history: any,
  location: any,
}

class Home extends Component<Props> {
  static async getInitialProps({ req, res, match, history, location, ...ctx }: InitialProps) {
    return { whatever: 'stuff' };
  }

  render() {
    return (
      <Fragment>
        <Helmet>
          <title>Home</title>
        </Helmet>
        <HomeTemplate />
      </Fragment>
    );
  }
}

export default Home;
