import React, { Component } from 'react'
import "./style.scss"
import { connect } from "react-redux"
import FadeInSection from "../../../CommonComponents/FadeInSection/fadeInSection.jsx"
import { Tooltip } from 'antd';


import js_logo from "../../../assets/technology/js.svg"
import jquery_logo from "../../../assets/technology/jquery.png"
import css_logo from "../../../assets/technology/css3.svg"
import html_logo from "../../../assets/technology/html.svg"
import python_logo from "../../../assets/technology/python.svg"
import reactjs_logo from "../../../assets/technology/react.svg"
import redux_logo from "../../../assets/technology/redux.svg"
import sass_logo from "../../../assets/technology/sass.svg"
import sql_logo from "../../../assets/technology/sql.svg"
import nodejs_logo from "../../../assets/technology/nodejs.png"
import nginx_logo from "../../../assets/technology/nginx.png"
import apache_logo from "../../../assets/technology/apache.png"
import django_logo from "../../../assets/technology/django.png"
import mongo_logo from "../../../assets/technology/mongoDB.svg"
import mysql_logo from "../../../assets/technology/mysql.png"
import docker_logo from "../../../assets/technology/docker.png"
import git_logo from "../../../assets/technology/git.svg"
import gitlab_logo from "../../../assets/technology/gitlab.png"

class skills extends Component {
    render() {
        return (
            <div className="skills-component" id="skills" theme-mode={this.props.theme_mode}>
                <div className="container-fluid">
                    <FadeInSection>
                        <div className="row">
                            <div className="col-lg-6">
                                <div className="technology_know_description full_width">
                                    <div className="technology_short_expl">
                                        <span>UI Development</span>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-6 mobile_compatible"></div>
                        </div>
                        <div className="row">
                            <div className="col-lg-6">
                                <div className="technology_know_description">
                                    <div className="technology_long_expl">
                                        <p>Have the good experience in React JS library and entry level experience in Angular Framework.</p>
                                        <p>
                                            I have 2 year of experience in integrating the APIs to front end using fetch,axios &amp; Ajax.Experience in Additional things like Server sent event,Websocket.
                                        </p>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-6">
                                <div className="technology_know_icons">
                                    <div className="group_logos">
                                        <Tooltip title="Javascript" color="#deaa00">
                                            <img src={js_logo} />
                                        </Tooltip>
                                        <Tooltip title="CSS" color="blue">
                                            <img src={css_logo} />
                                        </Tooltip>
                                        <Tooltip title="CSS" color="volcano">
                                            <img src={html_logo} />
                                        </Tooltip>
                                        <Tooltip title="SCSS" color="pink">
                                            <img src={sass_logo} />
                                        </Tooltip>
                                        <hr className="just_invisible_break" />
                                        <Tooltip title="React JS" color="#00bbfa">
                                            <img src={reactjs_logo} />
                                        </Tooltip>
                                        <Tooltip title="Redux" color="purple">
                                            <img src={redux_logo} />
                                        </Tooltip>
                                        <Tooltip title="Jquery" color="#172C45">
                                            <img src={jquery_logo} />
                                        </Tooltip>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </FadeInSection>

                    <FadeInSection>
                        <div className="row reversed_row">
                            <div className="col-lg-6">
                                <div className="technology_know_description full_width">
                                    <div className="technology_short_expl">
                                        <span>Backend Development</span>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-6 mobile_compatible"></div>
                        </div>
                        <div className="row reversed_row">
                            <div className="col-lg-6">
                                <div className="technology_know_description">
                                    <div className="technology_long_expl">
                                        <p>
                                            <b>Backend Frameworks:</b> Have the good experience in Django's (Python3.8) both wsgi &amp; asgi interface &amp; Express JS(NodeJS 14) frame work.</p>
                                        <p>
                                            <b>Deployment:</b> Also experience in deploying same application through Apache+wsgi, Nginx+uwsgi+hypercorn &amp; pm2. Have good knowledge in Linux platform(Ubuntu 18+ &amp; CentOS 7+) and Docker containers.
                                        </p>
                                        <p>
                                            <b>Version control:</b> git, bitbucket and GitLab(with CICD)
                                        </p>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-6">
                                <div className="technology_know_icons">
                                    <div className="group_logos">
                                        <Tooltip title="Node JS" color="#77B060">
                                            <img src={nodejs_logo} />
                                        </Tooltip>
                                        <Tooltip title="Django" color="#0A2F20">
                                            <img src={django_logo} />
                                        </Tooltip>
                                        <Tooltip title="MySQL" color="#015F8B">
                                            <img src={mysql_logo} />
                                        </Tooltip>
                                        <Tooltip title="Mongo" color="#419444">
                                            <img src={mongo_logo} />
                                        </Tooltip>
                                        <hr className="just_invisible_break" />
                                        <Tooltip title="Git" color="#DE4C36">
                                            <img src={git_logo} />
                                        </Tooltip>
                                        <Tooltip title="Apache" color="#C73C57">
                                            <img src={apache_logo} />
                                        </Tooltip>
                                        <Tooltip title="Nginx" color="#0CA652">
                                            <img src={nginx_logo} />
                                        </Tooltip>
                                        <Tooltip title="Docker" color="#227082">
                                            <img src={docker_logo} />
                                        </Tooltip>
                                        <Tooltip title="GitLab" color="#E53A35">
                                            <img src={gitlab_logo} />
                                        </Tooltip>
                                    </div>
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



export default connect(mapStateToProps)(skills)