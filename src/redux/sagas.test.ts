import { createStock } from './sagas';
import axios from 'axios';
import { call, put } from 'redux-saga/effects'
import { actions } from './actions';

const dummyStockCreatedData = {data: {dummyData: 'dummyData'}};

test('createStock saga test', () => {
    const gen = createStock({symbol: 'TestSymbol'});
    expect(gen.next().value).toEqual(call(axios.post, `http://localhost/api/stock`, {"Symbol": "TestSymbol"}));
    expect(gen.next(dummyStockCreatedData).value).toEqual(put(actions.stockCreated(dummyStockCreatedData.data)));
});