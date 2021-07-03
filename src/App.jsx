import React, { Component } from "react"
import { BrowserRouter as Router, HashRouter, Switch, Route, Link } from "react-router-dom"
import './App.scss';
import 'antd/dist/antd.css';

import mainRoute from "./Routes/mianRoute.jsx"

function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
            <Switch>
              <Route path="/"  component={mainRoute} />
            </Switch>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
