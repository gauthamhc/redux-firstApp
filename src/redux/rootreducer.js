import { combineReducers } from "redux";
import cakeReducer from "./cakes/cakeReducer";
import icecreamsReducer from "./icecreams/icecreamsReducer";

const rootReducer = combineReducers({
  cake: cakeReducer,
  icecreams: icecreamsReducer,
});

export default rootReducer;
