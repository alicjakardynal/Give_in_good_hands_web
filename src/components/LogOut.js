import React, { Component } from "react";
import { NavLink } from "react-router-dom";

class LogOut extends Component {
  render() {
    return (
      <section className="log_out">
        <h2>Wylogowanie nastąpiło pomyślnie!</h2>
        <p className="decoration"></p>
        <NavLink className="log_out_link"exact to="/">Strona główna</NavLink>
      
      </section>
    );
  }
}

export default LogOut;