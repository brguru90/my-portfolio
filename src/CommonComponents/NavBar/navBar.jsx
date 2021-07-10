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
                initial: true,
                id: "profile"
            },
            {
                text: "Skills",
                path: "/#skills",
                id: "skills"
            },
            {
                text: "Projects",
                path: "/#projects",
                id: "projects"
            },
            {
                text: "Contact",
                path: "/#contact_me",
                id: "contact_me"
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
    initial_hash = ""
    lastScrollOffset = 0
    scrolling = false

    setMenuHeight = () => {
        this.setState({
            menu_height: document.querySelector(".menu-ul").scrollHeight
        })
    }

    scrollToTargetAdjusted = (selector) => {
        console.log("scrollToTargetAdjusted", selector)
        let element = document.querySelector(selector);
        let headerOffset = 100;
        let elementPosition = element.getBoundingClientRect().top + window.pageYOffset;
        let offsetPosition = elementPosition - headerOffset;
        this.lastScrollOffset = offsetPosition
        window.scrollTo({
            top: offsetPosition,
            behavior: "smooth"
        });
    }

    isInViewport = (selector) => {
        const el = document.querySelector(selector)
        const rect = el.getBoundingClientRect();
        // console.log("rect", selector, "top", rect.top, "bottom", rect.bottom, rect.height)
        // console.log("clientHeight", document.documentElement.clientHeight, "innerHeight", window.innerHeight)

        if (rect.height < window.innerHeight) {
            const mul = (window.innerHeight / rect.height)
            return ((rect.top <= window.innerHeight && rect.bottom <= (rect.height * 1.4) * mul)
                && (rect.top >= -(rect.height * 1.4) && rect.bottom >= window.innerHeight * 0.4))
        }
        else {
            return (
                (rect.top <= window.innerHeight * 0.4 && rect.bottom <= rect.height * 1.4)
                && (rect.top >= -(rect.height * 1.4) && rect.bottom >= window.innerHeight * 0.4)
            )
        }


    }


    onScroll = () => {
        document.querySelectorAll(".my-nav-link").forEach(e=>e.removeAttribute("highlight"))
        for (let i = 0; i < this.state.links.length; i++) {
            const lk = this.state.links[i]
            if (lk.id && this.isInViewport("#" + lk.id)) {
                document.querySelectorAll(".my-nav-link")[i].setAttribute("highlight", "true")
                document.querySelector(".my-nav-link-highlight").style.marginLeft = `${(i / this.state.links.length) * 100}%`
                // this.initial_hash = lk.path.slice(1)
                // window.location.hash=lk.path.slice(1)
                // console.log(lk.path)
                break
            }
        }
    }





    componentDidMount() {
        this.setMenuHeight()
        window.addEventListener('resize', this.setMenuHeight);
        document.addEventListener('scroll', this.onScroll)
        this.initial_path = window.location.pathname
        this.initial_hash = window.location.hash
        this.setState({ menu_scale: 1 })
        try {
            console.log(".............componentDidMount")
            this.scrollToTargetAdjusted(window.location.hash.split("/").slice(-1))
        } catch (error) {
            console.log(error)
            this.lastScrollOffset = 0
            document.body.scrollIntoView({ behavior: "smooth", block: "start" })
        }
    }




    componentDidUpdate() {
        console.log("componentDidUpdate", this.initial_hash, window.location.hash)
        if (this.initial_path != window.location.pathname) {
            this.initial_path = window.location.pathname
            // this.setState({ menu_visible: false })  
            console.log(".............componentDidUpdate1")
            try {
                this.scrollToTargetAdjusted(window.location.hash.split("/").slice(-1))
            } catch (error) {
                this.lastScrollOffset = 0
                document.body.scrollIntoView({ behavior: "smooth", block: "start" })
            }
        }

        if (this.initial_hash != window.location.hash) {
            console.log(".............componentDidUpdate2", "initial_hash", this.initial_hash, "window", window.location.hash)
            this.initial_hash = window.location.hash
            // this.setState({ menu_visible: false })   
            try {
                // document.querySelector(window.location.hash.split("/").slice(-1)).scrollIntoView({ behavior: "smooth", block: "start", inline: "start" })            this.scrolling=false

                this.scrollToTargetAdjusted(window.location.hash.split("/").slice(-1))
            } catch (error) {
                this.lastScrollOffset = 0
                document.body.scrollIntoView({ behavior: "smooth", block: "start" })
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
                                            {...(this.isActive(link.path, index) ? { highlight: "true" } : {})}
                                            style={{ "--link-width": `${(1 / this.state.links.length) * 100}%` }}
                                            onClick={e => this.setState({ active_index: index })}
                                            className="my-nav-link"
                                        >
                                            <Link theme-mode={this.props.theme_mode} to={link.path}>{link.text}</Link>
                                        </NavLink>)
                                }
                                <hr
                                    style={{ marginLeft: `${((this.getActiveIndex()) / this.state.links.length) * 100}%`, width: `${(1 / this.state.links.length) * 100}%` }}
                                    theme-mode={this.props.theme_mode}
                                    className="my-nav-link-highlight"
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