import themeReducer  from "./reducer/themeReducer"
import reducer_2  from "./reducer/reducer2"
import { persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';

import {combineReducers} from "redux"


const persistConfig = {
    key: 'root',
    storage
  };

const allReducer=combineReducers({
    theme:themeReducer,
    data_2:reducer_2
})


export default persistReducer(persistConfig, allReducer);