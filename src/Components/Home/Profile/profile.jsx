import React, { Component } from 'react'
import { connect } from "react-redux"
import FadeInSection from "../../../CommonComponents/FadeInSection/fadeInSection.jsx"
import "./style.scss"
import ProfilePic from "../../../assets/profile_fullsize.jpg"
import { Link } from 'react-router-dom'
class profile extends Component {
    render() {
        return (
            <div className="profile-component" theme-mode={this.props.theme_mode}>
                <div className="container-fluid">
                    <FadeInSection>
                        <div className="row">
                            <div className="col-lg-6">
                                <div className="profile_pic_sect" >
                                    <div className="profile_pic" theme-mode={this.props.theme_mode} style={{backgroundImage:`url(${ProfilePic})`}}>

                                    </div>
                                    <div className="profile_short_expl my_name">
                                        Guruprasad BR
                                    </div>
                                    <div className="profile_short_expl">
                                        Software Engineer at Terralogic, Bagalore
                                    </div>


                                </div>
                            </div>
                            <div className="col-lg-6">
                                <div className="profile_detail_sect">

                                    <div className="profession_short_expl my_domain">
                                        Full stack web <br />Developer
                                        <span className="code">&lt;<div className="cursor">/</div>&gt;</span>
                                    </div>
                                    <div className="profession_long_expl">
                                        <p>
                                            I have good experience in developing both frontend app and backend server &amp; also in deployment of website  on linux machine.
                                        </p>
                                        <p>
                                            I am currently working in <b>Terralogic</b> software solution since last 2 years.Completed graduation in Bachelor of engineering with computer science as a major in Dr.Ambedkar institute of Technology, Bangalore.
                                        </p>
                                    </div>

                                </div>
                            </div>
                        </div>
                    </FadeInSection>

                    <FadeInSection>
                        <div className="row">
                            <div className="col-md-12">
                                <div className="more_points_about_profession">
                                    <ul>
                                        <li><span>Planning and Designing the Web App architecture, Ex: Making a database Replicas,Choosing the tech stack etc</span></li>
                                        <li><span>Designing Responsive UI,adding the smooth animation &amp; creating cool design</span></li>
                                        <li><span>Good backend skills,building optimized APIs,Choosing the async or threaded API based on requirement </span></li>
                                        <li><span>Have experience with MySQL and Mongo Database &amp; SQL queries </span></li>
                                        <li><span>Deployment of Web App both on bare VM or docker</span></li>
                                        <li><span>CICD using GitLab</span></li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </FadeInSection>

                </div>
            </div>
        )
    }
}


const mapStateToProps = (state) => {
    return {
        "theme_mode": state.theme
    }
}



export default connect(mapStateToProps)(profile)