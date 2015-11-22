import React from 'react';
import { Route, RouteHandler, Link } from 'react-router';

class Navbar extends React.Component {
  constructor() {
    super();
  }

  componentDidMount(){
  }

  render() {

    return (
      <div className="navbar">
        <div className="container">
          <div className="u-pull-left"> <Link to="/" className='logo' /></div>
          <div className="u-pull-right">
            <ul className="nav nav--inline">
                <li><a href="#">Tour</a></li>
                <li><a href="#">Sobre</a></li>
                <li><a href="#">Entrar</a></li>
            </ul>
            <div className="actions">
              <a className="button button-med button-blue">Cadastre-se</a>
            </div>
          </div>
        </div>
      </div>

    );
  }
}
module.exports = Navbar;
