import React, { Component } from "react";

import "./EmailReview.css";

// views
import PendingEmail from "./PendingEmail";

class EmailReview extends Component {
  constructor() {
    super();
    this.state = {
      cPage: "pending",

      // email Lists
      pendingList: [
        {
          rid: "1",
          type: "finance",
          name: "hyhyhy",
          nic: "oololo",
          email: "hyhyhy",
          contact: "rfrfr",
          subject: "hyhyhy",
          message: "oololo",
          file: "hyhyhy",
          date: "2020-02-06T11:52:42.362Z"
        },
        {
          rid: "1",
          type: "finance",
          name: "hyhyhy",
          nic: "oololo",
          email: "hyhyhy",
          contact: "rfrfr",
          subject: "hyhyhy",
          message: "oololo",
          file: "hyhyhy",
          date: "2020-02-06T11:52:42.362Z"
        },
        {
          rid: "1",
          type: "finance",
          name: "hyhyhy",
          nic: "oololo",
          email: "hyhyhy",
          contact: "rfrfr",
          subject: "hyhyhy",
          message: "oololo",
          file: "hyhyhy",
          date: "2020-02-06T11:52:42.362Z"
        },
        {
          rid: "1",
          type: "finance",
          name: "hyhyhy",
          nic: "oololo",
          email: "hyhyhy",
          contact: "rfrfr",
          subject: "hyhyhy",
          message: "oololo",
          file: "hyhyhy",
          date: "2020-02-06T11:52:42.362Z"
        },
      ]
    };
  }

  render() {
    var pendingEmailList = this.state.pendingList.map(data => {
      return <PendingEmail data={data} />;
    });
    return (
      <div className="ER_main">
        <div className="ER_nav">
          <h1 onClick={() => this.setState({ cPage: "pending" })}>Pending</h1>
          <h1 onClick={() => this.setState({ cPage: "forwarded" })}>
            Forwarded
          </h1>
          <h1 onClick={() => this.setState({ cPage: "deleted" })}>Deleted</h1>
        </div>

        {this.state.cPage === "pending" ? pendingEmailList : null}
      </div>
    );
  }
}

export default EmailReview;
