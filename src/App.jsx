import React, { Component } from "react"
import { BrowserRouter as Router, HashRouter, Switch, Route, Link } from "react-router-dom"
import './App.scss';
import 'antd/dist/antd.css';
import {  useSelector } from "react-redux"
import MainRoute from "./Routes/mainRoute.jsx"
process.env.CI = false

function App() {
  const theme_mode=useSelector(state => state.theme)
  return (
    <div className="App" theme-mode={theme_mode}>
      <Router>
        {/* <HashRouter> */}
            <Switch>
              <Route path="" component={MainRoute} />
            </Switch>
        {/* </HashRouter> */}
      </Router>
    </div>
  );
}

export default App;
