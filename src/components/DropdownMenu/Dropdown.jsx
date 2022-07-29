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
              <NavLink className="active" onClick={this.hideDropdown} to="/">
                Home
              </NavLink>
            </li>
            <li>
              <NavLink to="/projects" onClick={this.hideDropdown}>
                Projects
              </NavLink>
            </li>
            <li>
              <NavLink to="/resume" onClick={this.hideDropdown}>
                Resume
              </NavLink>
            </li>
          </ul>
        ) : null}
      </div>
    );
  }
}

export default Dropdown;
