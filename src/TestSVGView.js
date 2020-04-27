import React from "react";


const text = "'You have clicked the circle.'"

const TestSVGView = (props) => {

    function forOver (event) {
        event.currentTarget.style.strokeWidth = "100";
    }

    function forOut (event) {
        event.currentTarget.style.strokeWidth = "50";
    }


   function forClick (event) {
            event.currentTarget.style.fill === "rgb(136, 136, 136)" ?
            event.currentTarget.style.fill = "whitesmoke" :
            event.currentTarget.style.fill = "rgb(136, 136, 136)"
    }


    let pathElements = props.paths.map (p =>

        <g  transform="translate(0.000000,1280.000000) scale(0.100000,-0.100000) "
            style={{fill: p.fill, stroke: "black", "stroke-width":"50"}}
            onMouseOver={event => {forOver(event)   }}
            onMouseOut={event => {forOut(event)     }}
            onClick={event =>    { forClick(event)     }}
        >
            {p.path}

        </g>

    )

    return <svg id="mySVG"
                width={props.width}
                height={props.height}
                viewBox={props.viewBox}
                style={{ border: '1px solid red' }}

    >

        <g >
            {pathElements}
        </g>
    </svg>
}



export default TestSVGView