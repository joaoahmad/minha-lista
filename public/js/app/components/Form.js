import React from 'react';
import classnames from 'classnames';

class Form extends React.Component {
  constructor() {
    super();
    this.state = { focus: false };
  }

  componentDidMount(){
  }

  render() {

    var focus = this.state.focus;
    var classes = classnames({
      'input-wrap': true,
      'focused': focus,
    });

    return (
      <div className={classes}>
          <label>{this.props.label}</label>
          <span className="error">{this.props.errorMsg}</span>
          <input {...this.props} onFocus={this._handleFocus.bind(this)} onChange={this._handleFocus.bind(this)} onBlur={this._handleBlur.bind(this)}  />
      </div>
    );
  }

  _handleFocus(event){
    this.setState({focus: true});
  }

  _handleBlur(event){
    (event.target.value.length > 0) ? this.setState({focus: true}) : this.setState({focus: false}) ;
  }

}
module.exports = Form;
