import { all, takeEvery, put, call } from 'redux-saga/effects';
import { actions } from './actions';
import axios from 'axios';

export function* createStock(action: any) {
    const response = yield call(axios.post, `http://localhost/api/stock`, {Symbol: action.symbol});
    yield put(actions.stockCreated(response.data));
}

export function* getStocks(action: any) {
    const response = yield call(axios.post, `http://localhost/api/stock/stocks/page/${action.pageNum}`, {pageSize: action.pageSize});
    yield put(actions.stocksReceived(response.data));
}

export function* deleteStock(action: any) {
    const response = yield call(axios.delete, `http://localhost/api/stock/${action.id}`);
    console.log(response);
    yield put(actions.stockDeleted());
}

export function* addTransaction(action: any) {
    const response = yield call(axios.post, `http://localhost/api/account/${action.data.accountId}/stock${action.data.stockId}`, action.data);
    console.log(response);
    yield put(actions.transactionAdded());
}

export default function* rootSaga() {
    yield all([
        takeEvery(actions.ADD_STOCK, createStock),
        takeEvery(actions.GET_STOCKS, getStocks),
        takeEvery(actions.DELETE_STOCK, deleteStock)
    ]);
}