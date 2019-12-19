import React, { Component } from "react";
import { NavLink } from "react-router-dom";

class SignIn extends Component {
  render() {
    return (
      <section className="signing">
        <h2>Zaloguj się</h2>
        <p className="decoration"></p>
        <form>
          <label>
            Email
            <input type="email" name="useremail" />
          </label>
          <label>
            Hasło
            <input type="password" name="userepassword" />
          </label>
        </form>
        <div>
          <NavLink className="link sign"exact to="/register">Załóż konto</NavLink>
          <NavLink className="link sign"exact to="/signin">Zaloguj się</NavLink>
        </div>
      </section>
    );
  }
}

export default SignIn;
