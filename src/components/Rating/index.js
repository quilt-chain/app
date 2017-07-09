import React, { Component } from 'react';

class Rating extends Component {

  constructor() {
    super();
    this.state = {
      value: 0,
    };
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(event) {
    this.setState({ value: event.target.value });
  }

  render() {
    return (<div>
      <h2>Current rating: {this.props.teacher.rating}</h2>
      <input type="text" id="teacher-rating" value={this.state.value} onChange={this.handleChange} />
      <button onClick={() => this.props.setRating(this.props.teacher.id, this.state.value)}>Rate</button>
    </div>);
  }

}

export default Rating;
