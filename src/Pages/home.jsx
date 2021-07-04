import React, { Component } from 'react'
import Homepage from "../Components/Home/home.jsx"
import {  useSelector } from "react-redux"


export default function Home() {
    const theme=useSelector(state => state.theme)
    return <Homepage theme-data={theme} />
}
