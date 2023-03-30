import {createStore} from "redux";
import {composeWithDevtools} from "redux-devtools-extension";
import rootReducer from "../reducers";

const store = createStore(rootReducer,composeWithDevtools)

export default store