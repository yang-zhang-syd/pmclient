import {actions} from './actions';

const initState = {
    symbol: "",
    stock: null,
    stocks: []
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
        case actions.STOCKS_RECEIVED:
            return {
                ...state,
                stocks: action.data
            }
        default:
            return state;
    }
}