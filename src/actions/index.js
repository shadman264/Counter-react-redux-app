import * as actionType from './ActionTypes';

export const increaseButtClick = () =>{
    const action = {
        type: actionType.INCREASE_COUNTER,
        payload: 1
    }
    return action;
}

export const decreaseButtClick = () => {
    const action = {
        type: actionType.DECREASE_COUNTER,
        payload: 1
    }
    return action;
}
