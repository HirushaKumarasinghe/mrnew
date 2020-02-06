import React, { Component } from "react";

import "./PendingEmail.css";

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
            <b>Name :</b> {this.props.data.name}
          </p>
          <p>
            {" "}
            <b>Type :</b> {this.props.data.type}
          </p>
          <p>
            {" "}
            <b>Subject :</b> {this.props.data.subject}
          </p>
        </div>

        <div
          className={
            this.state.expanded ? "PE_advance PE_show" : "PE_advance PE_hide"
          }
        >
          <button className="btn_del">Delete</button>
          <button className="btn_FW">Forward</button>
          <p>
            {" "}
            <b>Contact :</b> {this.props.data.contact}
          </p>
          <p>
            {" "}
            <b>Email :</b> {this.props.data.email}
          </p>
          <p>
            {" "}
            <b>Date :</b> {this.props.data.date.split("T")[0]}
          </p>
          <p>
            {" "}
            <b>Time :</b> {this.props.data.date.split("T")[1]}
          </p>
          <p>
            {" "}
            <b>NIC :</b> {this.props.data.nic}
          </p>
          <p>
            {" "}
            <b>Message :</b> {this.props.data.message}
          </p>
        </div>
      </div>
    );
  }
}

export default PendingEmail;
