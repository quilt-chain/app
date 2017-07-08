import React, { Component } from 'react';
import Navigation from '../Navigation';
import teachers from '../../data/teachers.json';

class App extends Component {

  constructor() {
    super();
    this.state = {
      teachers: teachers,
    };
  }

  render() {
    return (
      <Navigation teachers={this.state.teachers} />
    );
  }
}

export default App;
