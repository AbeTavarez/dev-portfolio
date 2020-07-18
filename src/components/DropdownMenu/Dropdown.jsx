import React, { Component } from "react";

import "./DropdownMenu.css";
import { NavLink } from "react-router-dom";

class Dropdown extends Component {
  state = {
    showMenu: false,
  };

  showDropdown = (e) => {
    e.preventDefault();
    this.setState({
      showMenu: true,
    });
  };

  hideDropdown = () => {
    this.setState({
      showMenu: false,
    });
  };

  render() {
    return (
      <div className="dropdown">
        <div className="" onClick={this.showDropdown}>
          <i class="fas fa-bars fa-2x"></i>
        </div>

        {this.state.showMenu ? (
          <ul>
            <li>
              <NavLink className="active" to="/">
                Home
              </NavLink>
            </li>
            <li>
              <NavLink to="/projects">Projects</NavLink>
            </li>
            <li>
              <NavLink to="/resume">Resume</NavLink>
            </li>
          </ul>
        ) : null}
      </div>
    );
  }
}

export default Dropdown;
