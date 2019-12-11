import React, { Component } from "react";

import { NavLink } from "react-router-dom";

class Navigation extends Component {
    render() {
      return (
        <div className='navigation'>
          <div className="nav_above">
            <NavAbove />
          </div>
          <div className="nav_below">
            <NavBelow />
          </div>
        </div>
      );
    }
  }
  
  class NavAbove extends Component {
    render() {
      return (
        <>
          <NavLink className="link" exact to="/signin">
            Zaloguj
          </NavLink>
          <NavLink className="link" exact to="/register">
            Załóż konto
          </NavLink>
        </>
      );
    }
  }
  
  class NavBelow extends Component {
    render() {
      return (
        <>
          <NavLink className="link" exact to="/signin">
            Start
          </NavLink>
          <NavLink className="link" exact to="/register">
            O co chodzi ?
          </NavLink>
          <NavLink className="link" exact to="/register">
            O nas
          </NavLink>
          <NavLink className="link" exact to="/register">
            Fundacja i organizacje
          </NavLink>
          <NavLink className="link" exact to="/register">
            Kontakt
          </NavLink>
        </>
      );
    }
  }

  export default Navigation;