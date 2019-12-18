import React, { Component } from "react";
import { NavLink } from "react-router-dom";

class HomeHowToUseIt extends Component{
    render(){
        return(
        <section className='how_to_use_it' id="howToUseIt">
            <div className='four_steps_header'>
                <h2>Wystarczą 4 proste kroki</h2>
                <p className="decoration"></p>
            </div>
            <div className='four_steps'>
                <div>
                <p className="icon_shirt"></p>
                <h3>Wybierz rzeczy</h3>
                <p className="step_text">ubrania, zabawki, sprzęt i inne</p>
                </div>
                <div>
                <p className="icon_bag"></p>
                <h3>Spakuj je</h3>
                <p className="step_text">skorzystaj z worków na śmieci</p>
                </div>
                <div>
                <p className="icon_glass"></p>
                <h3>Zdecyduj komu chcesz pomóc</h3>
                <p className="step_text">wybierz zaufane miejsce</p>
                </div>
                <div>
                <p className="icon_reverse"></p>
                <h3>Zamóc kuriera</h3>
                <p className="step_text">kurier przyjedzie z dogodnym terminie</p>
                </div>
            </div>
            <div className="four_steps_end">
            <NavLink className="link four_steps_end_link" exact to="/signin">ODDAJ RZECZY</NavLink>
            </div>
            
        </section>

        )
    }
}

export default HomeHowToUseIt;