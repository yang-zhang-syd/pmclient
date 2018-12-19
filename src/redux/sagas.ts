import { all, takeEvery, put, call } from 'redux-saga/effects';
import { actions } from './actions';
import axios from 'axios';

export function* createStock(action: any) {
    const response = yield call(axios.post, `http://localhost/api/stock`, {Symbol: action.symbol});
    yield put(actions.stockCreated(response.data));
}

export default function* rootSaga() {
    yield all([
        takeEvery(actions.ADD_STOCK, createStock)
    ]);
}