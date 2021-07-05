import React, { Component } from 'react'
import ReactDOMServer from 'react-dom/server';

import "./style.scss"
import FadeInSection from "../../../CommonComponents/FadeInSection/fadeInSection.jsx"

export default class projects extends Component {


    state = {
        svg_data: "",
        // svg_width:window.innerWidth,
        // svg_height:window.innerHeight,
    }

    componentDidMount() {

        let this_sect_width = document.querySelector(".projects-component").offsetWidth
        const svg_data = this.generate_bg_img(this_sect_width, 5)
        this.setState(svg_data)

    }


    generate_bg_img = (width) => {
        console.log("innerWidth", width)
        let height = 2000
        const svg_img = (
            <svg width={`${width}px`} height={`${height}px`} viewBox="0 0 1200 1200"
                xmlns="http://www.w3.org/2000/svg" version="1.1">
                <rect x="1" y="1" width="1198" height="1198"
                    fill="none" stroke="blue" stroke-width="1" />

                <path d="M600,0 Q400,200 600,400 T600,800 T600,1200 L0,1200 L0,0 L600,0"
                    fill="#000b3d" stroke="red" stroke-width="5" />

            </svg>

        )

        const htmlString = `<?xml version="1.0" standalone="no"?>\n` + ReactDOMServer.renderToStaticMarkup(svg_img);
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
            <div className="projects-component" id="projects">
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
