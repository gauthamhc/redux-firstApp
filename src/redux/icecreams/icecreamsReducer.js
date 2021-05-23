import { BUY_ICECREAMS } from "./icreamsType";

const initialState = {
  numberOfIcecreams: 20,
};

const icecreamsReducer = (state = initialState, action) => {
  switch (action.type) {
    case BUY_ICECREAMS:
      return {
        ...state,
        numberOfIcecreams: state.numberOfIcecreams - 1,
      };
    default:
      return state;
  }
};

export default icecreamsReducer;
