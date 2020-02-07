import React, { Component } from "react";
import axios from "axios";

import "./EmailReview.css";
// Config
import Config from "../config/Config.js";

// views
import PendingEmail from "./PendingEmail";

// images
import Spinner from "../images/spinner.svg";

class EmailReview extends Component {
  constructor() {
    super();
    this.state = {
      cPage: "pending",
      department: "all",
      loading: true,

      // email Lists
      pendingList: [],
      fwList: [],
      delList: []
    };

    this.api = {
      getPending: "/api/contact/dep/n",
      getForwarded: "/api/contact/dep/f",
      getDeleted: "/api/contact/dep/d",
      action: "/api/contact/a"
    };
  }

  async UNSAFE_componentWillMount() {
    console.log("mounted");

    await this.getData(this.state.department);

    console.log("data fetched");
  }

  async getData(dep) {
    console.log("fetching data for " + dep);
    this.setState({
      loading: true
    });

    var _pendingList = [];
    var _fwList = [];
    var _delList = [];

    // get pending list
    await axios
      .post(
        `${Config.host}${Config.port}${this.api.getPending.replace(
          "dep",
          dep
        )}`,
        {
          token: ""
        }
      )
      .then(Response => {
        console.log(Response);

        _pendingList = Response.data.data;
      })
      .catch(err => {
        _pendingList = [];
      })
      .finally(() => {
        this.setState({
          pendingList: _pendingList
        });
      });

    // get forwarded list
    await axios
      .post(
        `${Config.host}${Config.port}${this.api.getForwarded.replace(
          "dep",
          dep
        )}`,
        {
          token: ""
        }
      )
      .then(Response => {
        console.log(Response);

        _fwList = Response.data.data;
      })
      .catch(err => {
        _fwList = [];
      })
      .finally(() => {
        this.setState({
          fwList: _fwList
        });
      });

    // get deleted list
    await axios
      .post(
        `${Config.host}${Config.port}${this.api.getDeleted.replace(
          "dep",
          dep
        )}`,
        {
          token: ""
        }
      )
      .then(Response => {
        console.log(Response);

        _delList = Response.data.data;
      })
      .catch(err => {
        _delList = [];
      })
      .finally(() => {
        this.setState({
          delList: _delList
        });
      });

    this.setState({
      loading: false
    });
  }

  async forwardMail(id) {
    await axios
      .post(`${Config.host}${Config.port}${this.api.action}`, {
        token: "",
        action: "f",
        rid: id
      })
      .then(Response => {
        console.log(Response);
        this.getData(this.state.department);
      })
      .catch(err => {});
  }

  async deleteMail(id) {
    await axios
      .post(`${Config.host}${Config.port}${this.api.action}`, {
        token: "",
        action: "d",
        rid: id
      })
      .then(Response => {
        console.log(Response);
        this.getData(this.state.department);
      })
      .catch(err => {});
  }

  setDepartment(e) {
    var _dep = e.target.value;

    this.setState({
      department: _dep
    });

    this.getData(_dep);
  }

  render() {
    var pendingEmailList = this.state.pendingList.map(data => {
      return (
        <PendingEmail
          data={data}
          forward={this.forwardMail.bind(this)}
          delete={this.deleteMail.bind(this)}
          pending={true}
        />
      );
    });
    var fwEmailList = this.state.fwList.map(data => {
      return <PendingEmail data={data} pending={false} />;
    });
    var delEmailList = this.state.delList.map(data => {
      return <PendingEmail data={data} pending={false} />;
    });
    return (
      <div className="ER_main">
        <div className="ER_dep">
          <select name="dep" onChange={event => this.setDepartment(event)}>
            <option value="all">ALL</option>
            <option value="buddhist">buddhist</option>
            <option value="city">city</option>
            <option value="finance">finance</option>
          </select>
        </div>

        <div className="ER_nav">
          <h1
            onClick={() => this.setState({ cPage: "pending" })}
            className={this.state.cPage === "pending" ? "active" : null}
          >
            Pending
          </h1>
          <h1
            onClick={() => this.setState({ cPage: "forwarded" })}
            className={this.state.cPage === "forwarded" ? "active" : null}
          >
            Forwarded
          </h1>
          <h1
            onClick={() => this.setState({ cPage: "deleted" })}
            className={this.state.cPage === "deleted" ? "active" : null}
          >
            Deleted
          </h1>
        </div>
        {this.state.loading ? <img alt="" src={Spinner} /> : null}
        {this.state.cPage === "pending" && !this.state.loading
          ? pendingEmailList
          : null}
        {this.state.cPage === "forwarded" && !this.state.loading
          ? fwEmailList
          : null}
        {this.state.cPage === "deleted" && !this.state.loading
          ? delEmailList
          : null}
      </div>
    );
  }
}

export default EmailReview;
