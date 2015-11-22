import React from 'react';
import classnames from 'classnames';

class Duque extends React.Component {
    constructor() {
        super();
        this.state = { focus: false };
    }

    componentDidMount(){
    }

    render() {

        var focus = this.state.focus;
        var classes = classnames({
            'duque': true,
            'focused': focus
        });

        return (
            <div className={classes}>
            <div className="duque-left">
            <span className="duque-menu-item"><i className="uk"></i></span>
            </div>
            <div className="duque-center">
            <span className="duque-budge"></span>
            <div className="duque-avatar" onClick={this._handleClick.bind(this)} style={{backgroundImage: 'url()'}}></div>
            </div>
            <div className="duque-right"></div>
            </div>
        );

    }

    _handleClick(event){
      this.setState({focus: !this.state.focus});
    }

}
module.exports = Duque;
