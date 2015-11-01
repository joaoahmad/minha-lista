import React from 'react';

class Container extends React.Component {
  constructor() {
    super();
  }

  componentDidMount(){
  }

  render() {

    return (
      <div className="container">
        {this.props.children}
      </div>
    );
  }
}
module.exports = Container;
