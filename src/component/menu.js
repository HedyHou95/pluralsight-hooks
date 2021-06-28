import React, { Component } from "react";
import { Link } from 'react-router-dom';

export class Menu extends Component {
  render() {
    return (
      <nav className="navbar navbar-expand-sm bg-dark navbar-dark">
        <div className="navbar">
          <ul className="navbar-nav">
            <li className="nav-item">
              <Link to="/">
                Home
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/speakers">
                Speakers
              </Link>
            </li>
          </ul>
        </div>
      </nav>
    );
  }
}
