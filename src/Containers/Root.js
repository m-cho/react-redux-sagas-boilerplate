import React, { Component } from 'react';
import { NavLink, withRouter } from 'react-router-dom';
import Routes from '../Navigation';
import './styles/Root.css';

class Root extends Component {
  render () {
    return (
      <div>
        <div className='Root-nav-container'>
          <NavLink className='Root-nav-link' activeClassName='Root-nav-link-active' to={'/'} exact>
            Home
          </NavLink>
          <NavLink className='Root-nav-link' activeClassName='Root-nav-link-active' to={'/second'}>
            Second
          </NavLink>
        </div>
        <hr />
        <Routes />
      </div>
    );
  }
}

export default withRouter(Root)
