import React, { Component } from "react";

import { NavLink } from "react-router-dom";
import {
  Link,
  DirectLink,
  Element,
  Events,
  animateScroll as scroll,
  scrollSpy,
  scroller
} from "react-scroll";

class HomeHeader extends Component {
  state = {
    pageScrolled: false
  };

  componentDidMount() {
    document.addEventListener("scroll", ()=> {
      if(window.pageYOffset>0){
        this.setState({
          pageScrolled:true
        })
      }else{
        this.setState({
          pageScrolled:false
        })
      }
    });
  }

 

  render() {
    return (
      <>
        <div
          className={
            this.state.pageScrolled
              ? "navigation nav_background"
              : "navigation"
          }
          id="header"
        >
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
          to="content"
          spy={true}
          smooth={true}
          duration={700}
        >
          <NavLink className="start_nav_link" exact to="/">
          Start
          </NavLink>
        </Link>
        <Link
          className="link below"
          to="howToUseIt"
          spy={true}
          smooth={true}
          duration={700}
          offset={-200}
        >
          O co chodzi ?
        </Link>
        <Link
          className="link below"
          to="aboutUs"
          spy={true}
          smooth={true}
          duration={700}
          offset={-80}
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
