import React from "react";
import * as d3 from "d3";
import SVG from "../SVG/SVGContainer";

class Scatterplot extends React.Component {
    constructor(props) {
        super(props);
        this.updateD3(props);
    }

    componentWillUpdate(nextProps) {
        this.updateD3(nextProps);
    }

    updateD3(props) {
        const {data, width, height, zoomTransform, zoomType} = props;

        /*        this.xScale = d3.scaleLinear()
                    .domain([0, d3.max(data, ([x, y]) => x)])
                    .range([0, width]),*/
        this.yScale = d3.scaleLinear()
            .domain([0, d3.max(data, ([x, y]) => y)])
            .range([0, height]);

        if (zoomTransform && zoomType === "detail") {
            this.xScale.domain(zoomTransform.rescaleX(this.xScale).domain());
            this.yScale.domain(zoomTransform.rescaleY(this.yScale).domain());
        }
    }

    get transform() {
        const {x, y, zoomTransform, zoomType} = this.props;
        let transform = "";

        if (zoomTransform && zoomType === "scale") {
            transform = `translate(${x + zoomTransform.x}, ${y + zoomTransform.y}) scale(${zoomTransform.k})`;
        } else {
            transform = `translate(${x}, ${y})`;
        }

        return transform;
    }


    render() {
        const {data} = this.props;

        return (
            <g transform={this.transform} ref="scatterplot">
                <SVG width="250pt"
                     height="250pt"
                     viewBox="0 0 1139 1280"
                     x={250}
                     y={250}/>
            </g>
        )
    }
}

export default Scatterplot