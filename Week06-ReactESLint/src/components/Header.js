import React, { Component } from "react";
import logo from "../logo.svg";
import { Link } from "react-router-dom";
import "../css/menu.css";

class Header extends Component {
  render() {
    return (
      <div className="Header">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Address Maven</h1>
        </header>
        <ul>
          <li>
            <Link to="/">Address</Link>
          </li>
          <li>
            <Link to="/get-file">Get File</Link>
          </li>
        </ul>
      </div>
    );
  }
}
export default Header;
