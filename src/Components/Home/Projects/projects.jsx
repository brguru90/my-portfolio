import React, { Component } from 'react'
import ReactDOMServer from 'react-dom/server';
import { connect } from "react-redux"
import "./style.scss"
import FadeInSection from "../../../CommonComponents/FadeInSection/fadeInSection.jsx"
import project_screenshot from "../../../assets/projects/p.png"
import Desktop from "../../../assets/cover_images/desktop.png"

class projects extends Component {


    timeline = [
        {
            description: {
                title: "Smarthire",
                date_time: `July 2019\n-\nOct 2019`,
                descriptions: [
                    "Smart hire is a tool cvbnm fghjn hhhhhhhhhhhh fsddddddddddddddd gfkkkkkkkkkkkkkkkkkk hhhhhhhhhhhhhhhhhhhhh",
                    "Smart hire is a tool cvbnm fghjn hhhhhhcvvvhhhhhh fsddddddddddddddd gfkkkkkkkkkkkkkkkkkk hhhhhhhhhhhhhhhhhhhhh wkjfskjjk ekjwkjjkwjk wherhwkjher whjhwjh",
                ]
            },
            image: project_screenshot
        },
        {
            description: {
                title: "Smarthire",
                date_time: `July 2019\n-\nOct 2019`,
                descriptions: [
                    "Smart hire is a tool cvbnm fghjn hhhhhhhhhhhh fsddddddddddddddd gfkkkkkkkkkkkkkkkkkk hhhhhhhhhhhhhhhhhhhhh",
                    "Smart hire is a tool cvbnm fghjn hhhhhhcvvvhhhhhh fsddddddddddddddd gfkkkkkkkkkkkkkkkkkk hhhhhhhhhhhhhhhhhhhhh wkjfskjjk ekjwkjjkwjk wherhwkjher whjhwjh",
                ]
            },
            image: project_screenshot
        },
        {
            description: {
                title: "Smarthire",
                date_time: `July 2019\n-\nOct 2019`,
                descriptions: [
                    "Smart hire is a tool cvbnm fghjn hhhhhhhhhhhh fsddddddddddddddd gfkkkkkkkkkkkkkkkkkk hhhhhhhhhhhhhhhhhhhhh",
                    "Smart hire is a tool cvbnm fghjn hhhhhhcvvvhhhhhh fsddddddddddddddd gfkkkkkkkkkkkkkkkkkk hhhhhhhhhhhhhhhhhhhhh wkjfskjjk ekjwkjjkwjk wherhwkjher whjhwjh",
                ]
            },
            image: project_screenshot
        },
        {
            description: {
                title: "Smarthire",
                date_time: `July 2019\n-\nOct 2019`,
                descriptions: [
                    "Smart hire is a tool cvbnm fghjn hhhhhhhhhhhh fsddddddddddddddd gfkkkkkkkkkkkkkkkkkk hhhhhhhhhhhhhhhhhhhhh",
                    "Smart hire is a tool cvbnm fghjn hhhhhhcvvvhhhhhh fsddddddddddddddd gfkkkkkkkkkkkkkkkkkk hhhhhhhhhhhhhhhhhhhhh wkjfskjjk ekjwkjjkwjk wherhwkjher whjhwjh",
                ]
            },
            image: project_screenshot
        },
        {
            description: {
                title: "Smarthire",
                date_time: `July 2019\n-\nOct 2019`,
                descriptions: [
                    "Smart hire is a tool cvbnm fghjn hhhhhhhhhhhh fsddddddddddddddd gfkkkkkkkkkkkkkkkkkk hhhhhhhhhhhhhhhhhhhhh",
                    "Smart hire is a tool cvbnm fghjn hhhhhhcvvvhhhhhh fsddddddddddddddd gfkkkkkkkkkkkkkkkkkk hhhhhhhhhhhhhhhhhhhhh wkjfskjjk ekjwkjjkwjk wherhwkjher whjhwjh",
                ]
            },
            image: project_screenshot
        },
        {
            description: {
                title: "Smarthire",
                date_time: `July 2019\n-\nOct 2019`,
                descriptions: [
                    "Smart hire is a tool cvbnm fghjn hhhhhhhhhhhh fsddddddddddddddd gfkkkkkkkkkkkkkkkkkk hhhhhhhhhhhhhhhhhhhhh",
                    "Smart hire is a tool cvbnm fghjn hhhhhhcvvvhhhhhh fsddddddddddddddd gfkkkkkkkkkkkkkkkkkk hhhhhhhhhhhhhhhhhhhhh wkjfskjjk ekjwkjjkwjk wherhwkjher whjhwjh",
                ]
            },
            image: project_screenshot
        },
        {
            description: {
                title: "Smarthire",
                date_time: `July 2019\n-\nOct 2019`,
                descriptions: [
                    "Smart hire is a tool cvbnm fghjn hhhhhhhhhhhh fsddddddddddddddd gfkkkkkkkkkkkkkkkkkk hhhhhhhhhhhhhhhhhhhhh",
                    "Smart hire is a tool cvbnm fghjn hhhhhhcvvvhhhhhh fsddddddddddddddd gfkkkkkkkkkkkkkkkkkk hhhhhhhhhhhhhhhhhhhhh wkjfskjjk ekjwkjjkwjk wherhwkjher whjhwjh",
                ]
            },
            image: project_screenshot
        },
        {
            description: {
                title: "Smarthire",
                date_time: `July 2019\n-\nOct 2019`,
                descriptions: [
                    "Smart hire is a tool cvbnm fghjn hhhhhhhhhhhh fsddddddddddddddd gfkkkkkkkkkkkkkkkkkk hhhhhhhhhhhhhhhhhhhhh",
                    "Smart hire is a tool cvbnm fghjn hhhhhhcvvvhhhhhh fsddddddddddddddd gfkkkkkkkkkkkkkkkkkk hhhhhhhhhhhhhhhhhhhhh wkjfskjjk ekjwkjjkwjk wherhwkjher whjhwjh",
                ]
            },
            image: project_screenshot
        }
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
        let bg_color = this.props.theme_mode == "dark" ? "#00adff" : "tomato"
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
                <path d={`M${x_pos},0  Q${x_diff},200 ${x_pos},400 ${sequence}`}
                    fill="none" stroke={bg_color} stroke-width="10" />
            </svg>
        )

        const htmlString = `<?xml version="1.0" standalone="no"?>\n` + ReactDOMServer.renderToStaticMarkup(svg_img);
        console.log("htmlString", htmlString)
        const svg64 = encodeURIComponent(htmlString);
        const b64Start = 'data:image/svg+xml;charset=utf-8,';
        console.log(b64Start + svg64)
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
                                                <img src={Desktop} className="desktop_cover" />

                                            </div>
                                            <div className="col-md-2">
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