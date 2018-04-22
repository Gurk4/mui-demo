import React, { Component, Fragment } from 'react';

import { Header, Footer } from './Layouts';
import Exercises from './Exercises';
import { exercises, muscles } from '../store.js';

export default class extends Component {
  state = {
    exercises,
    tabValue: 0,
    category: null
  };

  handleMuscleCategorySelect = category => {
    this.setState({ category });
  };

  getExercisesByCategory = () => {
    return Object.entries(
      this.state.exercises.reduce((exercises, exercise) => {
        const { muscles } = exercise;
        exercises[muscles] = exercises[muscles]
          ? [...exercises[muscles], exercise]
          : [exercise];
        return exercises;
      }, {})
    );
  };

  render() {
    return (
      <Fragment>
        <Header />

        <Exercises exercises={this.getExercisesByCategory()} />

        <Footer
          muscles={muscles}
          category={this.state.category}
          onChange={this.handleMuscleCategorySelect}
        />
      </Fragment>
    );
  }
}
