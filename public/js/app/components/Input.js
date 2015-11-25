import React from 'react';
import classnames from 'classnames';

class Input extends React.Component {
  constructor() {
    super();
    this.state = { focus: false };
  }

  componentDidMount(){
      if(this.props.value != "")
        this.setState({ focus: true });
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
          <input {...this.props} onFocus={this._handleFocus.bind(this)} onBlur={this._handleBlur.bind(this)}  />
      </div>
    );
  }
  
  _handleFocus(event){
    this.setState({focus: true});
  }

  _handleBlur(event){
      this.setState(() => (event.target.value.length > 0) ? {focus: true} : {focus: false});
      //this.setState({ focus: (() => (event.target.value.length > 0) ? true : false)()});
  }

}
module.exports = Input;
