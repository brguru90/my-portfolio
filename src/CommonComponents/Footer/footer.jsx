import React, { Component } from 'react'
import "./style.scss"
import { connect } from "react-redux"
import { FaLinkedin, FaFacebookSquare, FaInstagramSquare ,FaGithubSquare} from "react-icons/fa"
import { IoMdMail } from "react-icons/io"
import { MdPermPhoneMsg } from "react-icons/md"
class footer extends Component {
    render() {
        return (
            <div className="footer-component" theme-mode={this.props.theme_mode}>
                <div id="contact_me">
                    <div className="social_links">
                        <a target="_blank" href="https://www.linkedin.com/in/brguru90/"><FaLinkedin className="social_links_icon" /></a>
                        <a target="_blank" href="https://www.instagram.com/brguru95/"><FaInstagramSquare className="social_links_icon" /></a>
                        <a target="_blank" href="https://www.facebook.com/brguru90"><FaFacebookSquare className="social_links_icon" /></a>
                        <a target="_blank" href="https://github.com/brguru90"><FaGithubSquare className="social_links_icon" /></a>
                    </div>
                    <div className="social_links">
                        <span className="contact_links">
                            <a className="no_color" href="mailto:brguru90@gmail.com"> <IoMdMail /> brguru90@gmail.com</a>
                        </span>
                        <span className="separator">
                            |
                        </span>
                        <span className="contact_links">
                            <a className="no_color" href="tel:+91-948-239-9078">  <MdPermPhoneMsg /> +91-9482399078</a>
                        </span>
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

const mapDispatchToProps = (dispatch) => {
    return {
        setTheme: (data) => dispatch({
            type: "SET_THEME",
            payload: data
        })
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(footer)