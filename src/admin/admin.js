import React, { Component } from "react";

import "./admin.css";

import EmailReview from "../EmailReview/EmailReview";

class Admin extends Component {
  constructor() {
    super();
    this.state = {};
  }

  render() {
    return (
      <div className="wrapper">
        <nav id="sidebar">
          <div className="sidebar-header">
            <h3>Priminister's Office Admin Portal</h3>
            <strong>PAP</strong>
          </div>

          <ul className="list-unstyled components">
            <li>
              <a href="#">
                <i className="fas fa-image"></i>
                &nbsp;&nbsp;Email Review
              </a>
            </li>
            <li>
              <a href="#">
                <i className="fas fa-question"></i>
                &nbsp;&nbsp;News
              </a>
            </li>
            <li>
              <a href="#">
                <i className="fas fa-paper-plane"></i>
                &nbsp;&nbsp;Projects
              </a>
            </li>
            <li>
              <a href="#">
                <i className="fas fa-paper-plane"></i>
                &nbsp;&nbsp;Charity
              </a>
            </li>
          </ul>

          <ul className="list-unstyled CTAs">
            <li>
              <a
                href="https://bootstrapious.com/tutorial/files/sidebar.zip"
                className="download"
              >
                Download source
              </a>
            </li>
            <li>
              <a
                href="https://bootstrapious.com/p/bootstrap-sidebar"
                className="article"
              >
                Back to article
              </a>
            </li>
          </ul>
        </nav>

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
              <button
                className="btn btn-dark d-inline-block d-lg-none ml-auto"
                type="button"
                data-toggle="collapse"
                data-target="#navbarSupportedContent"
                aria-controls="navbarSupportedContent"
                aria-expanded="false"
                aria-label="Toggle navigation"
              >
                <i className="fas fa-align-justify"></i>
              </button>

              <div
                className="collapse navbar-collapse"
                id="navbarSupportedContent"
              >
                <ul className="nav navbar-nav ml-auto">
                  <li className="nav-item active">
                    <a className="nav-link" href="#">
                      Page
                    </a>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link" href="#">
                      Page
                    </a>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link" href="#">
                      Page
                    </a>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link" href="#">
                      Page
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </nav>

          <EmailReview dep="all"/>
        </div>
      </div>
    );
  }
}

export default Admin;
