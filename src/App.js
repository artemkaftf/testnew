import React, {Component} from 'react';
import TestSVG from './SVG/SVGContainer'
import {withStyles} from "@material-ui/core";
import {connect} from "react-redux";
import TestDrag from "./tools/TestDrag";

class App extends React.Component {
    render() {
        return (
            <div className={this.props.classes.body}>
                <svg style={{border: '1px solid green'}} width={650} height={650}>
{/*                    <TestSVG width="250pt"
                             height="250pt"
                             viewBox="0 0 1139 1280"
                             x={250}
                             y={250}
                    />*/}
                    <TestDrag/>
                </svg>
            </div>
        );
    }
}

const styles = theme => ({
    body: {

        "min-height": "100vh",
        "border": "1px solid blue",
        "display": "flex",
        "justify-content": "center", /*Центрирование по горизонтали*/
        "align-items": "center", /*Центрирование по вертикали */
    },

})

let mapStateToProps = (state) => {
    return {
        paths: state.svgStore.paths
    }
}
export default connect(mapStateToProps)(withStyles(styles)(App))
