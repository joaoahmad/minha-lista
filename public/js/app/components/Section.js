import React from 'react';

class Section extends React.Component {
  constructor() {
    super();
  }

  componentDidMount(){
  }

  render() {

    return (
      <section className="section">
        {this.props.children}
      </section>
    );
  }
}
module.exports = Section;
