import React, { Component } from 'react'
import Profile from "./Profile/profile.jsx"
import Skills from "./Skills/skills.jsx"
import Projects from "./Projects/projects.jsx"

export default class home extends Component {
    render() {
        return (
            <div className="home-component">
                <Profile />
                <Skills />
                <Projects />
            </div>
        )
    }
}
