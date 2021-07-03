import React, { Component } from 'react'
import { BrowserRouter as Router, HashRouter, Switch, Route, Link } from "react-router-dom"
import Home from "../Pages/home.jsx"

export default class mianRoute extends Component {
    render() {
        return (
            <Router>
                <Switch>
                    <HashRouter>
                        <Switch>
                            <Route path="/" exact component={Home} />
                        </Switch>
                    </HashRouter>
                </Switch>
            </Router>
        )
    }
}
