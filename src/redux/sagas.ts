import { all, takeEvery } from 'redux-saga/effects';
import { types } from './actions';
import axios from 'axios';

function* createStock(action: any) {
    const response = yield axios.post(`http://localhost/api/stock`, {Symbol: action.symbol});
    console.log(response.data);
}

export default function* rootSaga() {
    yield all([
        takeEvery(types.ADD_STOCK, createStock)
    ]);
}