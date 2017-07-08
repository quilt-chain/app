import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link, Switch } from 'react-router-dom';

import Header from '../Header';
import Footer from '../Footer';
import NotFound from '../NotFound';

function Home(props) {
  return (
    <div>Hello!</div>);
};

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
              <Route exact path="/" render={Home.bind(this)} />
              <Route path="*" component={NotFound} />
            </Switch>
          </main>
          <Footer />
        </div>
      </Router>
    );
  }

};

export default Navigation;
