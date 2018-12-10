import { all, takeEvery } from 'redux-saga/effects';
import { types } from './actions';

export default function* rootSaga() {
    yield all([
        takeEvery(types.ADD_STOCK, (payload) => { console.log(payload); })
    ]);
}