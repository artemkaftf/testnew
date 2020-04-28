import React, {Component} from 'react';
import TestSVG from './SVG/SVGContainer'
import {withStyles} from "@material-ui/core";
import {connect} from "react-redux";
import TestDrag from "./tools/TestDrag";
import TestZoom from "./tools/TestZoom";

class App extends React.Component {
    render() {
        return (
            <div className={this.props.classes.body}>
                <svg style={{border: '1px solid green'}} width={650} height={650}>
                    {/*<TestDrag/>*/}
                    <TestZoom
                        width={500}
                        height={500}/>
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
