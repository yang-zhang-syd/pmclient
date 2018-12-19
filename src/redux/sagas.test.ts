import * as test from 'tape';
import { createStock } from './sagas';
import axios from 'axios';

test('createStock saga test', t => {
    const gen = createStock({symbol: 'TestSymbol'});
    t.deepEqual(gen.next().value, axios.post('http://localhost/api/stock', {}), 'createStock must call axios.post');
});