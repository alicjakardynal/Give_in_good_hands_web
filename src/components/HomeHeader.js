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
    currentScroll: 0
  };

  // componentDidMount() {
  //   document.addEventListener("scroll", function() {
  //     console.log(window.pageYOffset);
  //   });
  // }

  // componentDidUpdate() {
  //   console.log(window.pageYOffset);
  //   if (window.pageYOffset > 0) {
  //     this.setState({
  //       currentScroll: 1
  //     });
  //   } else {
  //     this.setState({
  //       currentScroll: 0
  //     });
  //   }
  // }

  render() {
    return (
      <>
        <div
          className={
            this.state.currentScroll === 1
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
          Start
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
