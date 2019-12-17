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
                        <input type="text" name="username"/>
                    </label>
                    <label>Wpisz swoj email:
                        <input type="email" name="useremail"/>
                    </label>
                    </div>
                    <label className="text_area">Wpisz swoją wiadomość:
                        <textarea cols="50" rows="10"/>
                    </label>
                    <input className="send" type="submit" value="Wyślij"/>
                </form>
                </div>
            </section>
        )
    }
}


export default HomeForm