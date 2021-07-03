import React, { Component } from 'react'
import NavBar from "../NavBar/navBar.jsx"
import Footer from "../Footer/footer.jsx"

const pageWrap = Page =>  class combineComponent extends Component {
    render() {
        return (
            <>
                <NavBar />
                <Page />
                <Footer />                
            </>
        )
    }
}


export default pageWrap;