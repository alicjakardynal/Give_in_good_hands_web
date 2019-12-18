import React, { Component } from "react";

class HomeForm extends Component{
    render() {
        return (
            <section className="form_section" id="contact">
                <div className="form">
                    <h2>Skontaktuj się z nami</h2>
                    <p className="decoration"></p>
                <form>
                    <div>
                    <label>Wpisz swoje imię:
                        <input type="text"  placeholder="Krzysztof"name="username"/>
                    </label>
                    <label>Wpisz swoj email:
                        <input type="email" placeholder="xyz@.pl" name="useremail"/>
                    </label>
                    </div>
                    <label className="text_area">Wpisz swoją wiadomość:
                        <textarea placeholder="Lorem ipsum dolor sit amet, consectetur adipiscing elit, 
                        sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
                         quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."/>
                    </label>
                    <div className="send_button">
                    <input className="send" type="submit" value="Wyślij"/>
                    </div>
                </form>
                </div>
            </section>
        )
    }
}


export default HomeForm