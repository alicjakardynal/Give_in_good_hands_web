import React, { Component } from "react";

import { NavLink } from "react-router-dom";
import { Link, DirectLink, Element, Events, animateScroll as scroll, scrollSpy, scroller } from 'react-scroll'



class HomeHeader extends Component {
  render() {
    return (
      <>
        
        <div className='navigation' id="header">
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
          <Link 
            className="link below"  
            to="content">
            Start
          </Link>
          <Link 
            className="link below" 
            to="howToUseIt"
            spy={true}
            smooth={true}
            duration={700}
          
          >
            O co chodzi ?
          </Link>
          <Link 
            className="link below"  
            to="aboutUs"
            spy={true}
            smooth={true}
            duration={700}
          >
            O nas
          </Link>
          <Link 
            className="link below" 
            to="fundations"
            spy={true}
            smooth={true}
            duration={700}
          >
            Fundacja i organizacje
          </Link>
          <Link 
            className="link below" 
            to="contact"
            spy={true}
            smooth={true}
            duration={700}
          >
            Kontakt
          </Link>
        </>
      );
    }
  }
export default HomeHeader;
