import React, { Component } from "react";
import { NavLink } from "react-router-dom";

class Register extends Component {
  render() {
    return (
      <section className="register">
        <h2>Załóż konto</h2>
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
          <label>
            Powtórz hasło
            <input type="password" name="userepassword" />
          </label>
        </form>
        <div>
          <NavLink className="link sign"exact to="/signin">Zaloguj się</NavLink>
          <NavLink className="link sign"exact to="/register">Załóż konto</NavLink>
        </div>
      </section>
    );
  }
}

export default Register;
