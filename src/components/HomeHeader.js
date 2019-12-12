import React, { Component } from "react";
import ReactDOM from "react-dom";
import { NavLink } from "react-router-dom";



class HomeHeader extends Component {
  render() {
    return (
      <>
        
        <div className='navigation'>
          <div className="nav_above">
            <NavAbove />
          </div>
          <div className="nav_below">
            <NavBelow />
          </div>
        </div>
         
      </>
    );
  }
}


class NavAbove extends Component {
    render() {
      return (
        <>
          <NavLink className="link above" exact to="/signin">
            Zaloguj
          </NavLink>
          <NavLink className="link above" exact to="/register">
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
          <NavLink className="link below" exact to="/signin">
            Start
          </NavLink>
          <NavLink className="link below" exact to="/register">
            O co chodzi ?
          </NavLink>
          <NavLink className="link below" exact to="/register">
            O nas
          </NavLink>
          <NavLink className="link below" exact to="/register">
            Fundacja i organizacje
          </NavLink>
          <NavLink className="link below" exact to="/register">
            Kontakt
          </NavLink>
        </>
      );
    }
  }
export default HomeHeader;
