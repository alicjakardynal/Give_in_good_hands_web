import React, { Component } from "react";
import ReactDOM from "react-dom";
import { NavLink } from "react-router-dom";


class HomeContent extends Component{
    render(){
        return( <>
        <section className='content_banner'></section>
        <section className='content_text'>
            <h2>Zacznij pomagac!</h2>
            <h2>Oddaj niechciane</h2>
        </section>
        </>    )
    }
}

export default HomeContent;