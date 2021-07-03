import React, { Component } from 'react'
import PageWrap from "../CommonComponents/PageWrap/pageWrap.jsx"
import Home from "../Components/Home/home.jsx"

class home extends Component {
    render() {
        return <Home />
    }
}

export default  PageWrap(home)