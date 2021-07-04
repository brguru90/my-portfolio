import React, { Component } from 'react'
import Homepage from "../Components/Home/home.jsx"
import { useSelector } from "react-redux"
import PageWrap from '../CommonComponents/PageWrap/pageWrap.jsx'
import { Link } from 'react-router-dom'

function Home() {
    const theme = useSelector(state => state.theme)

    return <div>
        <h1>Page1</h1>
        <Homepage theme-data={theme} />
    </div>
}

// export default PageWrap(Home)
export default Home