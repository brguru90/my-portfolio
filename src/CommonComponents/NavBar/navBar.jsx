import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import "./style.scss"
import { NavLink } from "./style.js"

export default class navBar extends Component {


    state = {
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
            }
        ]
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



    render() {
        return (
            <div className="navBar-component">
                <div class="container">
                    <ul className="menu-ul" >
                        {
                            this.state.links.map((link, index) =>
                                <NavLink
                                    style_props={{
                                        "color": "black"
                                    }}
                                    {...this.isActive(link.path, index) ? { highlight: "true" } : {}}
                                    style={{ "--link-width": `${(1 / this.state.links.length) * 100}%` }}
                                >
                                    <Link to={link.path}>{link.text}</Link>
                                </NavLink>)
                        }
                        <hr
                            style={{ marginLeft: `${((this.getActiveIndex()) / this.state.links.length) * 100}%`, width: `${(1 / this.state.links.length) * 100}%` }}
                            theme-mode="light"
                        />
                    </ul>
                </div>
            </div>
        )
    }
}
