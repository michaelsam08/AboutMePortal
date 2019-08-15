import React, { Component } from "react";
import { Link } from "react-router-dom";
import { flexbox } from "@material-ui/system";

const nav = {
  display: "flex",
  flexDirection: "row"
};

export default class Navbar extends Component {
  render() {
    return (
      <div>
        <Link to="/">Home</Link>
        <nav style={nav}>
          ExcerTracker
          <div className="collpase navbar-collapse">
            <ul className="navbar-nav mr-auto">
              <li className="navbar-item">
                <Link to="/create" className="nav-link">
                  Create Exercise Log
                </Link>
              </li>
              <li className="navbar-item">
                <Link to="/user" className="nav-link">
                  Create User
                </Link>
              </li>
            </ul>
          </div>
        </nav>
      </div>
    );
  }
}
