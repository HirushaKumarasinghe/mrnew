import React, { Component } from "react";

import "./PendingEmail.css";

// config
import Config from "../config/Config.js";

class PendingEmail extends Component {
  constructor() {
    super();
    this.state = {
      expanded: false
    };
  }

  toggleExpand() {
    var expState = !this.state.expanded;
    this.setState({
      expanded: expState
    });
  }

  render() {
    return (
      <div className="PE_main">
        <div className="PE_basic">
          <p onClick={() => this.toggleExpand()}>
            {this.state.expanded ? (
              <i class="fas fa-caret-up"></i>
            ) : (
              <i class="fas fa-caret-down"></i>
            )}
          </p>
          <p>
            {" "}
            <b>Name :</b> <span>{this.props.data.name}</span>
          </p>
          <p>
            {" "}
            <b>Department :</b>{" "}
            <span>{Config.getDepName(this.props.data.type)}</span>
          </p>
          <p>
            {" "}
            <b>Subject :</b> <span>{this.props.data.subject}</span>
          </p>
        </div>

        <div
          className={
            this.state.expanded ? "PE_advance PE_show" : "PE_advance PE_hide"
          }
        >
          {this.props.pending ? (
            <button
              onClick={() => this.props.delete(this.props.data.rid)}
              className="btn_del"
            >
              Delete
            </button>
          ) : null}
          {this.props.pending ? (
            <button
              onClick={() => this.props.forward(this.props.data.rid)}
              className="btn_FW"
            >
              Forward
            </button>
          ) : null}

          <table border="0" width="100%">
            <tbody>
              <tr>
                <td width="100">
                  <p>
                    <b>Contact :</b>
                  </p>
                </td>
                <td>
                  <p><a href={`tel:${this.props.data.contact}`}> {this.props.data.contact} </a></p>
                </td>
              </tr>
              <tr>
                <td>
                  <p>
                    <b>Email :</b>
                  </p>
                </td>
                <td>
                  <p> <a href={`mailto:${this.props.data.email}`}> {this.props.data.email} </a></p>
                </td>
              </tr>
              <tr>
                <td>
                  <p>
                    <b>Date :</b>
                  </p>
                </td>
                <td>
                  <p> {this.props.data.date.split("T")[0]}</p>
                </td>
              </tr>
              <tr>
                <td>
                  <p>
                    <b>Time :</b>
                  </p>
                </td>
                <td>
                  <p>{this.props.data.date.split("T")[1]}</p>
                </td>
              </tr>
              <tr>
                <td>
                  <p>
                    <b>NIC :</b>
                  </p>
                </td>
                <td>
                  <p>{this.props.data.contact}</p>
                </td>
              </tr>
              <tr>
                <td>
                  <p>
                    <b>Message :</b>
                  </p>
                </td>
                <td>
                  <p>{this.props.data.message}</p>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    );
  }
}

export default PendingEmail;
