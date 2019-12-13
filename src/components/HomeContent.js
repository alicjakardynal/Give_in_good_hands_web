import React, { Component } from "react";
import ReactDOM from "react-dom";
import { NavLink } from "react-router-dom";


class HomeContent extends Component{
    render(){
        return( <section className='content' id="content">
        <section className='content_banner'></section>
        <section className='content_text'>
            <h2>Zacznij pomagac!</h2>
            <h2>Oddaj niechciane rzeczy w zaufane ręcę</h2>
            <p className="decoration"></p>
            <div>
                <NavLink className="link choosing" exact to="/signin">ODDAJ RZECZY</NavLink>
                <NavLink className="link choosing" exact to="/signin">ZORGANIZUJ ZBIÓRKĘ</NavLink>
            </div>
        </section>
        </section>    )
    }
}

export default HomeContent;