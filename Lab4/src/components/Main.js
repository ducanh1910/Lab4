import React from 'react'
import { useState } from 'react';
import { Films } from '../shared/ListOfFilms';
import FilmsPresentation from './PlayersPresentation'
export class Main extends Component {
  constructor() {
    super();
    this.state = {
      films: Films,
    };
  }

  render() {
    return <FilmsPresentation Films={this.state.films} />
  }

}
export default Main;

