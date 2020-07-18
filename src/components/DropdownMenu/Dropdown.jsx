import React, { Component } from "react";

import "./DropdownMenu.css";

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
              <a className="active" href="/">
                Home
              </a>
            </li>
            <li>
              <a href="/projects">Projects</a>
            </li>
            <li>
              <a href="/resume">Resume</a>
            </li>
          </ul>
        ) : null}
      </div>
    );
  }
}

export default Dropdown;
