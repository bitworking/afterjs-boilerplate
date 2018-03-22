// @flow
import React, { Component, Fragment } from 'react';
import { Helmet } from 'react-helmet';
import type {Node} from 'react';

type Props = {
  /** please describe the prop children */
  children?: Node,
}

class Home extends Component<Props> {
  render() {
    return (
      <Fragment>
        <Helmet>
          <title>About</title>
        </Helmet>
        <div>about</div>
      </Fragment>
    );
  }
}

export default Home;
