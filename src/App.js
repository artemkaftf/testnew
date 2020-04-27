import React from 'react';
import TestSVG from './TestSVG'
import {withStyles} from "@material-ui/core";

function App(props) {
    return (
        <div className={props.classes.body}>
            <TestSVG width="250pt"
                     height="390pt"
                     viewBox="0 0 1139 1280"
                     classes={props.classes}
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

    svg: {

        fill: "#888888",
        stroke: "black",
        "stroke-width":"50",
}
})

export default withStyles(styles)(App)
