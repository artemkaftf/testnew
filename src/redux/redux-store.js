import {combineReducers, createStore} from "redux";
import svgReducer from './svg-reducer'

let reducers = combineReducers ({
    svgStore: svgReducer
})

let store = createStore(reducers)
export default store