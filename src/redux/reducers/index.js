import { combineReducers } from "redux";
import productReducer from "./productReducer";
import "bootstrap/dist/css/bootstrap.min.css";

const allReducers = combineReducers({
  prodcuts: productReducer,
});

export default allReducers;
