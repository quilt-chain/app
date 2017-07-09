import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Teacher extends Component {

  constructor() {
    super();
    this.state = {
      visible: false,
    };
    this.toggle = this.toggle.bind(this);
    this.available = this.available.bind(this);
  }

  available() {
    return (<div>
        <h3>Available</h3>
        <Link className="signup button" to={`/teachers/${this.props.teacher.id}/rating`}>Sign up for class!</Link>
      </div>);
  }

  toggle() {
    this.setState({ visible: true });
  }

  render() {
    return (<div>
      <h2>Teacher {this.props.teacher.id}</h2>
      <p>Rating: {this.props.teacher.rating} out of 5</p>
      <p>Teacher {this.props.teacher.id} specialises in {this.props.teacher.subjects.join(', ')}.</p>
      <input type="date" onChange={this.toggle} />
      {this.state.visible ? this.available() : ''}
    </div>);
  }

}

export default Teacher;
