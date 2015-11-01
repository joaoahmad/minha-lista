import React from 'react';
import Navbar from './Navbar';

class PageWithNavbar extends React.Component {
  constructor() {
    super();
  }

  componentDidMount(){
  }

  render() {

    return (
      <div className="page-wrap">
        <Navbar />
        {this.props.children}
      </div>
    );
  }
}
module.exports = PageWithNavbar;
