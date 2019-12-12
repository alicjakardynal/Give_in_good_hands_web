import React, { Component } from "react";

class HomeHowToUseIt extends Component{
    render(){
        return(
        <section>
            <div>
                <h2></h2>
                <p></p>
            </div>
            <div>
                <div>
                <i className="icon"></i>
                <h3>Wybierz rzeczy</h3>
                <p>ubrania, zabawki, sprzęt i inne</p>
                </div>
                <div>
                <i className="icon_shirt"></i>
                <h3>Spakuj je</h3>
                <p>skorzystaj z worków na śmieci</p>
                </div>
                <div>
                <i className="icon_bag"></i>
                <h3>Zdecyduj komu chcesz pomóc</h3>
                <p>wybierz zaufane miejsce</p>
                </div>
                <div>
                <i className="icon_reverse"></i>
                <h3>Zamóc kuriera</h3>
                <p>kurier przyjedzie z dogodnym terminie</p>
                </div>
            </div>
        </section>

        )
    }
}

export default HomeHowToUseIt;