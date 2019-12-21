import React, { Component } from "react";

class HomeForm extends Component {
  state = {
    name: "",
    wrongName: "",
    email: "",
    wrongEmail: "",
    message: "",
    wrongMessage: "",
    sended:"",
  };

  handleChange = e => {
    this.setState({
      [e.target.name]: e.target.value
    });
  };

  sendLoginData = () => {
      console.log("wysyla sie ");
      this.setState({
          sended:"Wiadomość została wysłana.Wkrótce się skontaktujemy"
      });
      fetch('https://fer-api.coderslab.pl/v1/portfolio/contact', {
        method : 'POST',
        body: JSON.stringify( {
            name:this.state.name,
            email:this.state.email,
            message:this.state.message,
        } ),
        header: {
            "Content-Type": "application/json"
          }
      });

  }
  handleSubmit = e => {
    e.preventDefault();

    if (/\s/.test(this.state.name)) {
      this.setState({
        wrongName: "Podane imię jest nieprawidłowe!"
      });
    }
    if (!this.validateEmail(this.state.email)) {
      this.setState({
        wrongEmail: "Podany email jest nieprawidłowy!"
      });
    }
    if (this.state.message.length < 120) {
      this.setState({
        wrongMessage: "Wiadomość musi mieć conajmniej 120 znaków"
      });
    }
    this.sendLoginData();
    //w przeciwnym nie ma tych to wysylam do fetcha
  };

  validateEmail(email) {
    var re = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(email);
  }

  render() {
    return (
      <section className="form_section" id="contact">
        <div className="form">
          <h2>Skontaktuj się z nami</h2>
          <p className="decoration"></p>
          <p className="sended">{this.state.sended}</p>
          <form onSubmit={this.handleSubmit}>
            <div className="name_mail_area">
              <div>
                <label>
                  Wpisz swoje imię:
                  <input
                    type="text"
                    value={this.state.name}
                    placeholder="Krzysztof"
                    name="name"
                    onChange={this.handleChange}
                  />
                </label>
                <p className="error">{this.state.wrongName}</p>
              </div>
              <div>
              <label>
                Wpisz swoj email:
                <input
                  type="email"
                  value={this.state.email}
                  placeholder="xyz@.pl"
                  name="email"
                  onChange={this.handleChange}
                />
              </label>
              <p className="error">{this.state.wrongEmail}</p>
              </div>
            </div>
            <div className="text_area_div">
              <label className="text_area">
                Wpisz swoją wiadomość:
                <textarea
                  placeholder="Lorem ipsum dolor sit amet, consectetur adipiscing elit, 
                        sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
                         quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."
                  value={this.state.message}
                  name="message"
                  onChange={this.handleChange}
                />
              </label>
              <p className="error">{this.state.wrongMessage}</p>
            </div>
            <div className="send_button">
              <input className="send" type="submit" value="Wyślij" />
            </div>
          </form>
        </div>
      </section>
    );
  }
}

export default HomeForm;
