import React, { Component, Fragment } from 'react';

import { Header, Footer } from './Layouts';
import Exercises from './Exercises';

const styles = {
  fontFamily: 'sans-serif',
  textAlign: 'center'
};

export default class extends Component {
  render() {
    return (
      <Fragment>
        <Header />

        <Exercises />

        <Footer />
      </Fragment>
    );
  }
}
