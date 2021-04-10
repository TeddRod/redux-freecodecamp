import { createStore } from "redux";
import {rotateReducer} from "./reducers/rotateReducer";

function configureStore(state = { 
  rotating: true,
  user: "toto"
 }) {
  return createStore(rotateReducer,state);
}

export default configureStore;