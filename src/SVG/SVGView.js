import React, {Component} from "react";


function forOver(event) {
    event.currentTarget.style.strokeWidth = "100";
}

function forOut(event) {
    event.currentTarget.style.strokeWidth = "50";
}


function forClick(event) {
    event.currentTarget.style.fill === "rgb(136, 136, 136)" ?
        event.currentTarget.style.fill = "whitesmoke" :
        event.currentTarget.style.fill = "rgb(136, 136, 136)"
}


const SVG = (props) => {

    let pathElements = props.paths.map(p =>

        <g transform="translate(0.000000,1280.000000) scale(0.100000,-0.100000) "
           style={{fill: p.fill, stroke: "black", "stroke-width": "50"}}
           onMouseOver={event => {
               forOver(event)
           }}
           onMouseOut={event => {
               forOut(event)
           }}
           onClick={event => {
               forClick(event)
           }}
        >
            {p.path}

        </g>)


    return <svg id="mySVG"
                width={props.width}
                height={props.height}
                viewBox={props.viewBox}
                style={{border: '1px solid red'}}
    >

        <g>
            {pathElements}
        </g>
    </svg>
}

export default SVG

/*


export default class TestDrag extends Component {

    componentDidMount() {
        const handleDrag = d3.drag()
            .subject(function () {
                const me = d3.select(this);
                return {x: me.attr('x'), y: me.attr('y')}
            })
            .on('drag', function () {
                const me = d3.select(this);
                me.attr('x', d3.event.x);
                me.attr('y', d3.event.y);
            });
        const node = ReactDOM.findDOMNode(this);
        handleDrag(d3.select(node));
    }

    render() {
       return <SVG/>
    }
}
*/
