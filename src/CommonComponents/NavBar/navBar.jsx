import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import "./style.scss"
import { NavLink } from "./style.js"
import { connect } from "react-redux"
import { WiMoonAltWaxingCrescent2 } from "react-icons/wi"
import { GiHamburgerMenu } from "react-icons/gi"
class navBar extends Component {


    state = {
        menu_visible: false,
        links: [
            {
                text: "Home",
                path: "",
                initial: true
            },
            {
                text: "Skills",
                path: "/#skills"
            },
            {
                text: "Projects",
                path: "/#projects"
            },
            {
                text: "Page1",
                path: "test1"
            },
            {
                text: "Page2",
                path: "test2"
            },

        ],
        menu_height: 0,
        menu_scale: 0.2,
    }

    initial_path = ""
    initial_hash=""

    setMenuHeight = () => {
        this.setState({
            menu_height: document.querySelector(".menu-ul").scrollHeight
        })
    }

    componentDidMount() {
        this.setMenuHeight()
        window.addEventListener('resize', this.setMenuHeight);
        this.initial_path = window.location.pathname
        this.initial_hash=window.location.hash
        this.setState({ menu_scale: 1 })
        try {
            document.querySelector(window.location.hash.split("/").slice(-1)).scrollIntoView({behavior: "smooth", block: "start",inline:"start"})
        } catch (error) {
            console.log(error)
            document.body.scrollIntoView({behavior: "smooth", block: "start"})
        }
    }

    componentDidUpdate() {
        if (this.initial_path != window.location.pathname) {
            this.initial_path = window.location.pathname
            // this.setState({ menu_visible: false })   
            try {
                document.querySelector(window.location.hash.split("/").slice(-1)).scrollIntoView({behavior: "smooth", block: "start",inline:"start"})
            } catch (error) {
                document.body.scrollIntoView({behavior: "smooth", block: "start"})
            }        
        }

        if (this.initial_hash != window.location.hash) {
            this.initial_hash = window.location.hash
            // this.setState({ menu_visible: false })   
            try {
                document.querySelector(window.location.hash.split("/").slice(-1)).scrollIntoView({behavior: "smooth", block: "start",inline:"start"})
            } catch (error) {
                document.body.scrollIntoView({behavior: "smooth", block: "start"})
            }        
        }
       
    }

    isActive = (link, index) => {
        // console.log(window.location.href, window.location.origin)
        const current_path = window.location.href.replace(window.location.origin, "")
        try {
            const path_match = current_path.match(/\/?([^ \/]*)\/?/)
            const hash_match = current_path.match(/\/?#\/?([^ \/]*)\/?/)
            // console.log("path", current_path, "path_match", path_match, "hash_match", hash_match)
            let is_active = window.location.pathname == link
            if (path_match?.length >= 2) {
                is_active = is_active || (path_match[1] == link)
            }
            if (hash_match?.length >= 2) {
                is_active = is_active || (hash_match[1] == link)
                is_active = is_active || ("/" + hash_match[1] == link)
                is_active = is_active || ("/#" + hash_match[1] == link)
            }
            return is_active
        } catch (error) {
            console.log(error)
            return false
        }
    }


    getActiveIndex = () => {
        let _match = 0;
        const current_path = window.location.href.replace(window.location.origin, "")
        this.state.links.forEach(({ path }, i) => {
            try {
                const path_match = current_path.match(/\/?([^ \/]*)\/?/)
                const hash_match = current_path.match(/\/?#\/?([^ \/]*)\/?/)
                // console.log("path", current_path, "path_match", path_match, "hash_match", hash_match)
                let is_active = window.location.pathname == path
                if (path_match?.length >= 2) {
                    is_active = is_active || (path_match[1] == path)
                }
                if (hash_match?.length >= 2) {
                    is_active = is_active || (hash_match[1] == path)
                    is_active = is_active || ("/" + hash_match[1] == path)
                    is_active = is_active || ("/#" + hash_match[1] == path)
                }
                if (is_active) {
                    _match = i
                }
            } catch (error) { }
        })
        return _match
    }


    toggle_menu = (e) => {
        this.setState({ menu_visible: !this.state.menu_visible })
    }



    render() {
        console.log(window.location)

        return (
            <div className="navBar-component" theme-mode={this.props.theme_mode}>
                <div className="my-navbar" theme-mode={this.props.theme_mode}>
                    <div className="left-end">
                        <div className="my-mobile-mode">
                            <GiHamburgerMenu className="my-menu-icon" onClick={this.toggle_menu} theme-mode={this.props.theme_mode} />
                        </div>
                        <div
                            className={`menu-wrapper`}
                        >
                            <ul
                                className={`menu-ul ${this.state.menu_visible ? "" : "hide_menu"}`}
                                style={{ "--min-height": `${this.state.menu_height}px`, transform: `scale(${this.state.menu_scale})` }}
                            >
                                {
                                    this.state.links.map((link, index) =>
                                        <NavLink
                                            style_props={{
                                                "color": "black"
                                            }}
                                            {...this.isActive(link.path, index) ? { highlight: "true" } : {}}
                                            style={{ "--link-width": `${(1 / this.state.links.length) * 100}%` }}
                                            onClick={e => this.setState({ active_index: index })}

                                        >
                                            <Link theme-mode={this.props.theme_mode} to={link.path}>{link.text}</Link>
                                        </NavLink>)
                                }
                                <hr
                                    style={{ marginLeft: `${((this.getActiveIndex()) / this.state.links.length) * 100}%`, width: `${(1 / this.state.links.length) * 100}%` }}
                                    theme-mode={this.props.theme_mode}
                                />
                            </ul>
                        </div>
                    </div>

                    <div className="right-end">
                        <WiMoonAltWaxingCrescent2 className="dark-mode-icon" theme-mode={this.props.theme_mode} onClick={e => this.props.setTheme(this.props.theme_mode == "dark" ? "light" : "dark")} />
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

export default connect(mapStateToProps, mapDispatchToProps)(navBar)