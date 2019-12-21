import React, { Component } from "react";
import { NavLink } from "react-router-dom";

class SignIn extends Component {
  state = {
    email: "",
    wrongEmail: "",
    password: "",
    wrongPassword: ""
  };

  handleSubmit = e => {
    e.preventDefault();

    if (!this.validateEmail(this.state.email)) {
      this.setState({
        wrongEmail: "Podany email jest nieprawidłowy!"
      });
    }
    if (this.state.password.length < 6) {
      this.setState({
        wrongPassword: "Podane hasło jest nieprawidłowe!"
      });
    }
  };

  handleChange = e => {
    this.setState({
      [e.target.name]: e.target.value
    });
  };
  validateEmail(email) {
    var re = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(email);
  }

  render() {
    return (
      <section className="signing">
        <h2>Zaloguj się</h2>
        <p className="decoration"></p>
        <form onSubmit={this.handleSubmit}>
          <div>
            <label>
              Email
              <input
                type="email"
                name="email"
                value={this.state.email}
                onChange={this.handleChange}
              />
            </label>
            <p className="error">{this.state.wrongEmail}</p>
          </div>
          <div>
            <label>
              Hasło
              <input
                type="password"
                name="password"
                value={this.state.password}
                onChange={this.handleChange}
              />
            </label>
            <p className="error">{this.state.wrongPassword}</p>
          </div>
       
        <div className="buttons">
          <NavLink className="link sign" exact to="/register">
            Załóż konto
          </NavLink>
         <input className="sign" type="submit" value="Zaloguj się" />
        </div>
         </form>
      </section>
    );
  }
}

export default SignIn;
