import React, { Component } from "react";
import { Route } from "react-router-dom";

import "./admin.css";

import EmailReview from "../EmailReview/EmailReview";
import AddNews from "../News/AddNews.js";

// controllers
import Admin_Controller from "../Controller/Admin/AdminController.js";

class Admin extends Component {
  constructor() {
    super();
    this.state = {
      loggedin: false,
      loginError: "",
      cUser: ""
    };
  }

  async handleLogin(e) {
    e.preventDefault();

    const _uname = e.target.uname.value;
    const _pass = e.target.pass.value;

    if (await Admin_Controller.logIn(_uname, _pass)) {
      console.log("login Success");
      console.log(this.props);

      this.setState({
        loggedin: true,
        loginError: "",
        cUser: _uname
      });
      if ((this.props.location.pathname === "/")) {
        this.props.history.push("/emailreview");
      }
    } else {
      this.setState({
        loggedIn: false,
        loginError: "Invalid credentials.!",
        cUser: ""
      });
    }
  }

  render() {
    if (this.state.loggedin) {
      return (
        <div id="content">
          <nav className="navbar navbar-expand-lg navbar-light bg-light">
            <div className="container-fluid">
              <button
                type="button"
                id="sidebarCollapse"
                className="btn btn-info"
              >
                <i className="fas fa-align-left"></i>
                <span>Toggle Sidebar</span>
              </button>
            </div>
          </nav>

          <Route
            path="/emailreview"
            strict
            render={props => <EmailReview {...props} dep="all" />}
          />

          <Route
            path="/news/add"
            exact
            strict
            render={props => <AddNews {...props} />}
          />
        </div>
      );
    } else {
      return (
        <div className="mrad_login">
          <div className="mrad_login_formContainer">
            <h1>Log in</h1>

            <form onSubmit={event => this.handleLogin(event)}>
              <label>{this.state.loginError}</label>
              <input
                required
                type="text"
                name="uname"
                placeholder="Enter your username"
              />
              <input
                required
                type="password"
                name="pass"
                placeholder="Enter your password"
              />

              <button>Login</button>
            </form>
          </div>
        </div>
      );
    }
  }
}

export default Admin;
