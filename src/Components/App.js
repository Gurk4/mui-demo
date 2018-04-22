import React, { Component, Fragment } from 'react';

import { Header, Footer } from './Layouts';
import Exercises from './Exercises';
import { exercises, muscles } from '../store.js';

export default class extends Component {
  state = {
    exercises,
    selectedExercise: null,
    category: null
  };

  handleMuscleCategorySelect = category => {
    this.setState({ category });
  };

  handleExerciseSelect = id => {
    this.setState(({ exercises }) => ({
      selectedExercise: exercises.find(e => e.id === id)
    }));
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

        <Exercises
          exercises={this.getExercisesByCategory()}
          selectedExercise={this.state.selectedExercise}
          category={this.state.category}
          onSelect={this.handleExerciseSelect}
        />

        <Footer
          muscles={muscles}
          category={this.state.category}
          onChange={this.handleMuscleCategorySelect}
        />
      </Fragment>
    );
  }
}
