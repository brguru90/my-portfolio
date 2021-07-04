import React, { Component } from 'react'
import { BrowserRouter as Router, HashRouter, Switch, Route, Link } from "react-router-dom"
import PageWrap from '../CommonComponents/PageWrap/pageWrap.jsx'
import Home from "../Pages/home.jsx"
import TestPage1 from "../Pages/test_page_1"
import TestPage2 from "../Pages/test_page_2"


class MainRoute extends Component {
    render() {
        return (
            <Switch>
                <Route path="/" exact component={Home} />
                <Route path="/test1" component={TestPage1} />
                <Route path="/test2" exact component={TestPage2} />
            </Switch>
        )
    }
}

// export default  MainRoute;
export default PageWrap(MainRoute);