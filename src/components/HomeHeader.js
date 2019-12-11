import React, { Component } from "react";
import ReactDOM from "react-dom";
import { NavLink } from "react-router-dom";

import Navigation from './Navigation';

class HomeHeader extends Component {
  render() {
    return (
      <>
        <section className="header_section">
          <div className="header_banner"></div>
          <div className="header_text_section">
            <Navigation />
            <div className="header_content"><HeaderContent/></div>
          </div>
        </section>
      </>
    );
  }
}

class HeaderContent extends Component{
    render(){
        return(
            <h1>content</h1>
        )
    }
}

export default HomeHeader;
