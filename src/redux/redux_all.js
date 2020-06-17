import { combineReducers } from "redux";

const SHOW = "SHOW";
const HIDE = "HIDE";

//---------SELECTORS---------

export const SPINNER_VISIBLE_SELECTOR = (state) => state.spinnerReducer.show;
//----------ACTIONS----------

export const showSpinner = () => {
  return { type: SHOW };
};
export const hideSpinner = () => {
  return { type: HIDE };
};

//-----------REDUCERS-----------

const spinnerReducer = (state = { show: false }, action) => {
  switch (action.type) {
    case SHOW: {
      return { show: true };
    }
    case HIDE: {
      return { show: false };
    }
    default:
  }
  return state;
};

export const myCombinedReducers = () => {
  return combineReducers({
    spinnerReducer,
  });
};
