import React, {Component} from "react";
import * as d3 from 'd3';
import Scatterplot from "./ScatterPlot";
import ReactDOM from "react-dom";


const random = d3.randomNormal(5, 1);

class Chart extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            data: d3.range(200).map(_ => [random(), random()]),
            zoomTransform: null
        }
        this.zoom = d3.zoom()
            .scaleExtent([-5, 5])
            .translateExtent([[-100, -100], [props.width+100, props.height+100]])
            .extent([[-100, -100], [props.width+100, props.height+100]])
            .on("zoom", this.zoomed.bind(this))
    }
    componentDidMount() {
        d3.select(this.refs.svg)
            .call(this.zoom)


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
    componentDidUpdate() {
        d3.select(this.refs.svg)
            .call(this.zoom)
    }
    zoomed() {
        this.setState({
            zoomTransform: d3.event.transform
        });
    }
    render() {
        const { zoomTransform } = this.state,
            { width, height } = this.props;

        return (
            <svg width={width} height={height} ref="svg">
                <Scatterplot data={this.state.data}
                             x={0} y={0}
                             width={width}
                             height={height}
                             zoomTransform={zoomTransform}
                             zoomType="scale"
                             />
            </svg>
        )
    }
}


export default Chart
