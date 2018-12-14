
const actions = {
    
    ADD_STOCK: 'ADD_STOCK',
    STOCK_CREATED: 'STOCK_CREATED',

    addStock: (symbol: string) => ({
        type: actions.ADD_STOCK,
        symbol
    }),

    stockCreated: (data: any) => ({
        type: actions.STOCK_CREATED,
        data
    })
}

export {actions};