import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link, Switch } from 'react-router-dom';

import Header from '../Header';
import Home from '../Home'
import Teacher from '../Teacher'
import Rating from '../Rating'
import Footer from '../Footer';
import NotFound from '../NotFound';

function HomePage() {
  return <Home teachers={this.props.teachers} />;
}

function TeacherPage(props) {
  return <Teacher teacher={this.props.teachers[props.match.params.id]} />;
}

function RatingPage(props) {
  return <Rating teacher={this.props.teachers[props.match.params.id]} setRating={this.props.setRating} />;
}

class Navigation extends Component {

  render () {

    return (
      <Router>
        <div className="content">
          <nav>
            <ul>
              <li><Link to="/">Home</Link></li>
            </ul>
          </nav>
          <main className="container">
            <Header />
            <Switch>
              <Route exact path="/" render={HomePage.bind(this)} />
              <Route path="/teachers/:id/rating" render={RatingPage.bind(this)} />
              <Route path="/teachers/:id" render={TeacherPage.bind(this)} />
              <Route path="*" component={NotFound} />
            </Switch>
          </main>
          <Footer />
        </div>
      </Router>
    );
  }

  getTeacher(id) {

  }

};

export default Navigation;
