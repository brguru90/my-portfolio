import React, { Component } from 'react'
import { connect } from "react-redux"
import "./style.scss"

class profile extends Component {
    render() {
        return (
            <div className="profile-component" theme-mode={this.props.theme_mode}>
                <div className="container-fluid">
                    <div className="row">
                        <div className="col-md-6">
                            <div className="profile_pic_sect" >
                                <div className="profile_pic">

                                </div>
                                <div className="profile_short_expl my_name">
                                    Guruprasad BR
                                </div>
                                <div className="profile_short_expl">
                                    Software Engineer at Terralogic, Bagalore
                                </div>


                            </div>
                        </div>
                        <div className="col-md-6">
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