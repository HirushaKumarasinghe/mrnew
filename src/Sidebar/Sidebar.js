import React, { Component } from "react";
import { Link } from "react-router-dom";

class Sidebar extends Component {
  constructor() {
    super();
    this.state = {};
  }

  render() {
    return (
      <nav id="sidebar">
        <div className="sidebar-header">
          <h3>Priminister's Office Admin Portal</h3>
          <strong>PAP</strong>
        </div>

        <ul className="list-unstyled components">
          <li>
            <Link to="/emailreview">
              <i className="fas fa-image"></i>
              &nbsp;&nbsp;Email Review
            </Link>
          </li>
          <li>
            <Link to="/news/add">
              <i className="fas fa-question"></i>
              &nbsp;&nbsp;News
            </Link>
          </li>
          <li>
            <Link to="#">
              <i className="fas fa-paper-plane"></i>
              &nbsp;&nbsp;Projects
            </Link>
          </li>
          <li>
            <Link to="#">
              <i className="fas fa-paper-plane"></i>
              &nbsp;&nbsp;Charity
            </Link>
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
    );
  }
}

export default Sidebar;
