'use strict';
import React from 'react';
import { Route, RouteHandler, Link } from 'react-router';

class App extends React.Component {
  constructor() {
    super();
  }

  render() {
    return (
      <div className="app-wrap">
        {this.props.children}
      </div>
    );
  }
}
module.exports = App;
