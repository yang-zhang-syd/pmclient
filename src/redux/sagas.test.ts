import { createStock, getStocks, deleteStock } from './sagas';
import axios from 'axios';
import { call, put } from 'redux-saga/effects'
import { actions } from './actions';

const dummyStockCreatedData = {data: {dummyData: 'dummyData'}};
const getStcoksResponse : any = {data: []};
const response = {};

test('createStock saga test', () => {
    const gen = createStock({symbol: 'TestSymbol'});
    expect(gen.next().value).toEqual(call(axios.post, `http://localhost/api/stock`, {"Symbol": "TestSymbol"}));
    expect(gen.next(dummyStockCreatedData).value).toEqual(put(actions.stockCreated(dummyStockCreatedData.data)));
});

test('getStocks saga test', () => {
    const gen = getStocks({pageNum: 1, pageSize: 10});
    expect(gen.next().value).toEqual(call(axios.post, `http://localhost/api/stock/stocks/page/1`, {pageSize: 10}));
    expect(gen.next(getStcoksResponse).value).toEqual(put(actions.stocksReceived(getStcoksResponse.data)));
});

test('deleteStock saga test', () => {
    const gen = deleteStock({id: 123});
    expect(gen.next().value).toEqual(call(axios.delete, `http://localhost/api/stock/123`));
    expect(gen.next(response).value).toEqual(put(actions.stockDeleted()));
});