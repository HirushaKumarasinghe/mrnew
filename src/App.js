import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import "./App.css";

import Sidebar from "./Sidebar/Sidebar.js";
import Admin from "./admin/admin";

function App() {
  return (
    <div className="App">
      <div className="wrapper">
        <Router>
          <Sidebar />
          <Route path="/" render={props => <Admin {...props} />} />
        </Router>
      </div>
    </div>
  );
}

export default App;
