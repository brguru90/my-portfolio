import React, { Component } from 'react'
import FadeInSection from '../../CommonComponents/FadeInSection/fadeInSection.jsx'
import Profile from "./Profile/profile.jsx"
import Skills from "./Skills/skills.jsx"
import Projects from "./Projects/projects.jsx"
import { Link } from 'react-router-dom'
export default class home extends Component {

    // window.nav_change_event
    render() {
        return (
            <div className="home-component" >
                <FadeInSection > <Profile /> </FadeInSection>
                <FadeInSection>  <Skills />  </FadeInSection>
                <FadeInSection> <Projects />  </FadeInSection>
            </div>
        )
    }
}
