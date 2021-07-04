import React, { Component } from "react"
import { BrowserRouter as Router, HashRouter, Switch, Route, Link } from "react-router-dom"
import './App.scss';
import 'antd/dist/antd.css';
import {  useSelector } from "react-redux"
import mainRoute from "./Routes/mianRoute.jsx"

function App() {
  const theme_mode=useSelector(state => state.theme)
  return (
    <div className="App" theme-mode={theme_mode}>
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
