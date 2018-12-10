const keyMirror = require('keymirror');

const types = keyMirror({
    ADD_STOCK: null
});

const actions = {
    addStock: (symbol: string) => {
        type: types.ADD_STOCK,
        symbol
    }
}

export {actions, types};