import { combineReducers } from 'redux';

//---------SELECTORS---------

//----------ACTIONS----------

//-----------REDUCERS-----------

const exampleReducer = (state = {}, action) => {
    switch(action.type) {

        default: return state;
    }
}

export const myCombinedReducers = () => {
    return combineReducers({
        exampleReducer,
    })
}