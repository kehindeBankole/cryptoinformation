import { createStore , applyMiddleware} from "redux";
import {myReducer} from '../redux/people api/reducer'
import thunk from "redux-thunk";
export const store = createStore(myReducer , applyMiddleware(thunk))