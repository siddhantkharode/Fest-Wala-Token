import React, { Component } from 'react';
import './App.css';

class Navbar extends Component {

  render() {
    return (
      <div>
        <nav className="navbar navbar-dark fixed-top bg-dark flex-md-nowrap p-0 shadow">
          <a
            className="navbar-brand col-sm-3 col-md-2 mr-0"
            href="https://www.youtube.com/watch?v=dQw4w9WgXcQ"
            target="_blank"
            rel="noopener noreferrer"
          >
            Fest Token Exchange
          </a>
          <ul className='navbar-nav px-3'>
          <li className="nav-item text-nowrap d-none d-sm-none d-sm-block">
          <small className='text-secondary'>
          <small id="account">{this.props.account}</small>
          </small>
          </li>
          </ul>
        </nav>
      </div>
    );
  }
}

export default Navbar;
