import {creatAction, handleActions} from 'react-actions';

const INCREMENT = 'counter/INCREMENT';
const DECREMENT = 'counter/DECREMENT';

export const increment = creatAction(INCREMENT);
export const decrement = creatAction(DECREMENT);

const initialState = {
    number: 0
};

export default handleActions({
    [INCREMENT]: (state, action) =>{
        return {number: state.number + 1};
    },
    [DECREMENT]: ({number}) =>{
        return {number: number - 1};
    }
}, initialState);

