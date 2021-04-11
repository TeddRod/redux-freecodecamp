import { createStore } from "redux";
import {rotateReducer} from "./reducers/rotateReducer";

const initialState = {
  rotating: true,
  user: "toto"
}

const store = (state = initialState) => {
  return createStore(rotateReducer,state);
}

export default store;