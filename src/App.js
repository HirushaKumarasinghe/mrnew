import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import './App.css';

import Admin from "./admin/admin"

function App() {
  return (
    <div className="App">
      <Router>
        {/* <Switch> */}
          <Route
            path="/"
            strict
            render={props => <Admin {...props} />}
          />
        {/* </Switch> */}
      </Router>
    </div>
  );
}

export default App;
