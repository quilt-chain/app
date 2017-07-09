import React, { Component } from 'react';
import Navigation from '../Navigation';
import teachers from '../../data/teachers.json';

class App extends Component {

  constructor() {
    super();
    this.state = {
      teachers,
    };
    this.setRating = this.setRating.bind(this);
  }

  setRating(id, rating) {
    if (this.state.teachers[id]) {
      const tempTeachers = this.state.teachers;
      tempTeachers[id].rating = rating;
      this.setState({ teachers: tempTeachers }, () => {
        console.log(this.state.teachers);
      });
    }
  }

  render() {
    return (
      <Navigation teachers={this.state.teachers} setRating={this.setRating} />
    );
  }
}

export default App;
