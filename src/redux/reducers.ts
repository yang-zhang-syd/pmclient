import {actions} from './actions';

const initState = {
    symbol: "",
    stock: null
};

export default (state = initState, action: any) => {
    switch(action.type) {
        case actions.ADD_STOCK:
            return {
                ...state,
                symbol: action.symbol
            };
        case actions.STOCK_CREATED:
            return {
                ...state,
                stock: action.data
            }
        default:
            return state;
    }
}