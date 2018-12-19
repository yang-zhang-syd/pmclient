import { createStock } from './sagas';
import axios from 'axios';
import { call } from 'redux-saga/effects'

test('createStock saga test', () => {
    const gen = createStock({symbol: 'TestSymbol'});
    expect(gen.next().value).toEqual(call(axios.post, `http://localhost/api/stock`, {"Symbol": "TestSymbol"}));
});