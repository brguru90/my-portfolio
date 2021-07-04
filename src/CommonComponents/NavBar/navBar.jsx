import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import "./style.scss"
import { NavLink } from "./style.js"
import { connect } from "react-redux"
import { BsMoon } from "react-icons/bs"
import { GiHamburgerMenu } from "react-icons/gi"
class navBar extends Component {


    state = {
        menu_visible: false,
        links: [
            {
                text: "Home",
                path: ""
            },
            {
                text: "Page1",
                path: "test1"
            },
            {
                text: "Page2",
                path: "test2"
            },


            {
                text: "fdhrtfh",
                path: "cvf"
            },
            {
                text: "Paghrtfge1",
                path: "dfdgd"
            },
            {
                text: "ghyr",
                path: "fhyrty"
            }
        ],
        menu_height:0
    }

    initial_path=""

    setMenuHeight=()=>{
        this.setState({
            menu_height:document.querySelector(".menu-ul").scrollHeight
        })
    }

    componentDidMount(){       
        this.setMenuHeight()
        window.addEventListener('resize', this.setMenuHeight);
        this.initial_path= window.location.pathname
    }

    componentDidUpdate(){
        if(this.initial_path != window.location.pathname){
            this.initial_path= window.location.pathname
            this.setState({ menu_visible:false})
        }
    }

    isActive = (link, index) => {
        try {
            const is_active = window.location.pathname == link || window.location.pathname.match(/\/?([^ /]*)\/?/)[1] == link || window.location.hash.match(/\/#\/([^ /]*)\/?/)[1] == link
            return is_active
        } catch (error) {
            return false
        }
    }


    getActiveIndex = () => {
        let _match = 0;
        this.state.links.forEach(({ path }, i) => {
            try {
                const is_active = window.location.pathname == path || window.location.pathname.match(/\/?([^ /]*)\/?/)[1] == path || window.location.hash.match(/\/#\/([^ /]*)\/?/)[1] == path
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
            <div className="navBar-component">
                <div className="my-navbar">
                    <div className="left-end">
                        <div className="my-mobile-mode">
                            <GiHamburgerMenu className="my-menu-icon" onClick={this.toggle_menu} />
                        </div>
                        <div 
                            className={`menu-wrapper`}                             
                        >
                            <ul 
                                className={`menu-ul ${this.state.menu_visible ? "" : "hide_menu"}`}
                                style={{ "--min-height": `${this.state.menu_height}px` }} 
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
                        <BsMoon className="dark-mode-icon" theme-mode={this.props.theme_mode} onClick={e => this.props.setTheme(this.props.theme_mode == "dark" ? "light" : "dark")} />
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