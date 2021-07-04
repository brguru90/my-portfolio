import themeReducer  from "./reducer/themeReducer"
import reducer_2  from "./reducer/reducer2"
import {combineReducers} from "redux"

const allReducer=combineReducers({
    theme:themeReducer,
    data_2:reducer_2
})
export default allReducer
