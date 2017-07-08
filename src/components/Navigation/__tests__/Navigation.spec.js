import React from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import { mount, render, shallow } from 'enzyme';

import Navigation from '..';

const wrapper = shallow(<Navigation />);

const pathMap = wrapper.find(Route).reduce((pathMap, route) => {
  const routeProps = route.props();
  pathMap[routeProps.path] = routeProps.component || routeProps.render;
  return pathMap;
}, {});
