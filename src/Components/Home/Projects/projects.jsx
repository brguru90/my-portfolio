import React, { Component } from 'react'
import ReactDOMServer from 'react-dom/server';
import { connect } from "react-redux"
import "./style.scss"
import FadeInSection from "../../../CommonComponents/FadeInSection/fadeInSection.jsx"

class projects extends Component {


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
        const svg_data = this.generate_bg_img(this_sect_width, 4)
        this.setState(svg_data)
    }

    componentDidUpdate(prevProps, prevState, snapshot) {
        if (prevProps?.theme_mode != this.props?.theme_mode) {
            this.configure_svg_bg()
        }
    }


    generate_bg_img = (width, _length = 2) => {

        let bg_color = this.props.theme_mode == "dark" ? "white" : "#1D1D27"


        if (_length < 2) _length = 2
        console.log("innerWidth", width)
        // if (_length % 2 == 0)
        //     _length += 1
        let multiplier = 400
        let height =400 * _length
        height+=1200
        height*=width/1833
        let sequence = []
        for (let i = 3; i <= _length; i++) {
            sequence.push(`T600,${multiplier * i}`)
        }
        sequence = sequence.join(" ")

        const vw = ((multiplier * _length) + 200) / 1.5
        
        const svg_img = (
            <svg width={`${vw}px`} height={`${(multiplier * _length) + 200}px`} viewBox={`0 0 ${vw} ${(multiplier * _length) + 200}`}
                xmlns="http://www.w3.org/2000/svg" version="1.1">
                {/* <rect x="1" y="1" width={width} height={multiplier * _length}
                    fill="none" stroke="blue" stroke-width="1" /> */}

                <path
                    className="svg_bg_area"
                    d={`M1200,0 C1200,0 200,0 600,400 Q800,600 600,800 ${sequence} C600,${multiplier * _length} 400,${(multiplier * _length) + 200} 0,${(multiplier * _length) + 200} L0,${(multiplier * _length) + 200} L1200,${(multiplier * _length) + 200} L1200,0 L600,0`}
                    fill={bg_color}
                // stroke="red"
                // stroke-width="5"
                />

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
            svg_height: height
        }
    }



    render() {
        return (
            <div className="projects-component" id="projects" theme-mode={this.props.theme_mode}>
                <div className="bg_img" style={{ backgroundImage: `url(${this.state.svg_bg})`, width: this.state.svg_width, height: this.state.svg_height }}>
                    <div className="container-fluid">
                        <FadeInSection>
                            <div className="row">
                                <div className="col-lg-6">
                                    dgfdhf
                                </div>
                                <div className="col-lg-6">

                                </div>
                            </div>
                        </FadeInSection>
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