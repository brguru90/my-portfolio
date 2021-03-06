import React, { Component } from 'react'
import ReactDOMServer from 'react-dom/server';
import { connect } from "react-redux"
import "./style.scss"
import FadeInSection from "../../../CommonComponents/FadeInSection/fadeInSection.jsx"
import project_screenshot from "../../../assets/projects/p.png"
import Desktop from "../../../assets/cover_images/desktop.png"

import smarthire from "../../../assets/projects/smarthire.png"
import cesg from "../../../assets/projects/cesg.png"
import xreasy from "../../../assets/projects/xreasy.png"
import webopt from "../../../assets/projects/webopt.png"

class projects extends Component {


    timeline = [
        {
            description: {
                title: "Smarthire",
                date_time: `July 2019\n-\nOct 2019`,
                descriptions: [
                    "This was an internal project in Terralogic, which is used for hiring candidates by conducting tests.",
                    `it provides 2 type of test the interviewer can choose, one is MCQ contains a multiple set of 
                    technical questions from different category such as python programming, 
                    analytics etc and another one is the Coding test where candidate can write,run code & evaluate 
                    output with 1 exposed & 4 hidden output.`,
                ]
            },
            image: smarthire
        },
        {
            description: {
                title: " CESG Dashboard",
                date_time: `Oct 2019\n-\nApril 2020`,
                descriptions: [
                    `This is a dashboard gets the data from bulk of logs from testing team & shows the performance of 
                    the platform on which they are running test, it shows metrics in a simplified UI like Charts, 
                    summarized tabular format & groups the data while providing required filters to quickly analyse
                    data.`
                ]
            },
            image: cesg
        },
        {
            description: {
                title: "Web optimizer",
                date_time: `April 2020\n-\nJune 2021`,
                descriptions: [
                    `This was a second internal project, this is a tool which allow developer to analyse the performance 
                    of website, also perform security checks & suggest best practices.`,
                    `The supporting library we used for this projects are Google lighthouse, nmap port scanner, Apache 
                    HTTP server benchmark, OpenSSL etc.`,
                ]
            },
            image: webopt
        },
        {
            description: {
                title: "XREasyOnBoard",
                date_time: `June 2021\n-\nPresent`,
                descriptions: [
                    `Tool development: It???s a tool used to trigger firmware installation to the router, view logs of installation.`,
                    `Dashboard development: It???s a dashboard which shows the metrics generated by tool, provides charts & tabular data to 
                    simplify the analysis of installations.`,
                ]
            },
            image: xreasy
        },
    ]


    state = {
        svg_data: "",
        svg_width: window.innerWidth,
        svg_height: window.innerHeight

    }

    componentDidMount() {
        this.configure_svg_bg()
        window.addEventListener('resize', this.resizeBgSVG);
    }


    resizeBgSVG = () => {
        this.configure_svg_bg()
    }

    configure_svg_bg = () => {
        let this_sect_width = document.querySelector(".projects-component").offsetWidth
        const svg_data = this.generate_bg_img(this_sect_width, this.timeline.length)
        this.setState(svg_data)
    }

    componentDidUpdate(prevProps, prevState, snapshot) {
        if (prevProps?.theme_mode != this.props?.theme_mode) {
            this.configure_svg_bg()
        }
    }


    generate_bg_img = (width, _length = 2) => {
        // let bg_color = this.props.theme_mode == "dark" ? "#00adff" : "tomato"
        // let bg_color = this.props.theme_mode == "dark" ? "#7982FF" : "tomato"
        // let bg_color = this.props.theme_mode == "dark" ? "#4528b9" : "tomato"   
        let bg_color = this.props.theme_mode == "dark" ? "orange" : "tomato"

        // let bg_color = "tomato"
        if (_length < 2) _length = 2
        console.log("innerWidth", width)
        // if (_length % 2 == 0)
        //     _length += 1
        const x_pos = 600
        const x_diff = 350
        let multiplier = 400
        let sequence = []
        for (let i = 2; i <= _length; i++) {
            sequence.push(`T${x_pos},${multiplier * i}`)
        }
        sequence = sequence.join(" ")

        const img_height = (multiplier * _length)

        const svg_img = (
            <svg viewBox={`0 0 ${1200} ${img_height}`}
                xmlns="http://www.w3.org/2000/svg" version="1.1">
                <filter id="dropshadow" height="200%">
                    <feGaussianBlur in="SourceAlpha" stdDeviation="3" />
                    <feOffset dx="2" dy="2" result="offsetblur" />
                    <feComponentTransfer>
                        <feFuncA type="linear" slope="0.5" />
                    </feComponentTransfer>
                    <feMerge>
                        <feMergeNode />
                        <feMergeNode in="SourceGraphic" />
                    </feMerge>
                </filter>
                <path d={`M${x_pos},0  Q${x_diff},200 ${x_pos},400 ${sequence}`}
                    fill="none" stroke={bg_color} strokeWidth="10"
                    // style={{
                    //     filter: "drop-shadow(0px 10px 10px #000000)",
                    // }}
                     />
            </svg>
        )

        const htmlString = `<?xml version="1.0" standalone="no"?>\n` + ReactDOMServer.renderToStaticMarkup(svg_img);
        console.log("htmlString", htmlString)
        const svg64 = encodeURIComponent(htmlString);
        const b64Start = 'data:image/svg+xml;charset=utf-8,';
        console.log("b64Start", b64Start + svg64)
        return {
            svg_bg: b64Start + svg64,
            svg_width: width,
            svg_height: width * (img_height > 1200 ? img_height / 1200 : 1200 / img_height),
            blk_height: width * (400 / 1200)
        }
    }



    render() {
        return (
            <div className="projects-component" id="projects" theme-mode={this.props.theme_mode}>
                <div className="bg_img" style={{ backgroundImage: `url(${this.state.svg_bg})`, width: this.state.svg_width, height: this.state.svg_height }} theme-mode={this.props.theme_mode}>
                    <div className="container-fluid" theme-mode={this.props.theme_mode}>
                        {
                            this.timeline.map((v, i) => {
                                return <FadeInSection>
                                    <div className="project_blk" style={{ height: this.state.blk_height }} theme-mode={this.props.theme_mode}>
                                        <div className={`row ${i % 2 == 0 ? "left_aligned_img" : "right_aligned_img"}`} >
                                            <div className="col-md-5 project_img">
                                                <p className="img_wrapper">
                                                    <img src={Desktop} className="desktop_cover" />
                                                    <img src={v.image} className="project_thumbnail" />
                                                </p>
                                            </div>
                                            <div className="col-md-2 project_date_time_wrap">
                                                <div className="project_date_time">
                                                    <div>
                                                        {v.description.date_time.split("\n").map(para => <p>{para} </p>)}
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="col-md-5 project_desc" theme-mode={this.props.theme_mode}>
                                                <div className="project_desc_content">
                                                    <h1>{v.description.title}</h1>
                                                    {
                                                        v.description.descriptions.map(desc => <p>{desc.split("\n")}</p>)
                                                    }
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </FadeInSection>
                            })
                        }

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



export default connect(mapStateToProps)(projects)