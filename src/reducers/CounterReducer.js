import * as actionTypes from '../actions/ActionTypes'
const counterReducer = (state={count: 0}, action) => {
    let newState, newCount;
    switch(action.type){
        case actionTypes.INCREASE_COUNTER:
            newCount = state.count;
            newCount += action.payload;
            newState = {count: newCount};
            return newState;

        case actionTypes.DECREASE_COUNTER:
            newCount = state.count;
            newCount -= action.payload;
            newState = {count: newCount};
            return newState;
        default:
            return state;
    }
}
export default counterReducer;
