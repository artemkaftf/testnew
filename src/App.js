import React from 'react';
import TestSVG from './TestSVGContainer'
import {withStyles} from "@material-ui/core";
import {connect} from "react-redux";


function App(props) {
    return (
        <div className={props.classes.body}>
            <TestSVG width="250pt"
                     height="250pt"
                     viewBox="0 0 1139 1280"

            />
        </div>
    );
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
export default connect (mapStateToProps) (withStyles(styles)(App))
