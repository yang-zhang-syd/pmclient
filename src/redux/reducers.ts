import {types} from './actions';

const initState = {
    symbol: ""
};

export default (state = initState, action: any) => {
    switch(action.type) {
        case types.ADD_STOCK:
            return {
                ...state,
                symbol: action.symbol
            };
        default:
            return state;
    }
}