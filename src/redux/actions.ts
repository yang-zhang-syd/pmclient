
const actions = {
    
    ADD_STOCK: 'ADD_STOCK',
    STOCK_CREATED: 'STOCK_CREATED',
    GET_STOCKS: 'GET_STOCKS',
    STOCKS_RECEIVED: 'STOCKS_RECEIVED',
    DELETE_STOCK: 'DELETE_STOCK',
    STOCK_DELETED: 'STOCK_DELETED',
    ADD_TRANSACTION: 'ADD_TRANSACTION',

    addStock: (symbol: string) => ({
        type: actions.ADD_STOCK,
        symbol
    }),

    stockCreated: (data: any) => ({
        type: actions.STOCK_CREATED,
        data
    }),

    getStocks: (pageNum: number, pageSize: number) => ({
        type: actions.GET_STOCKS,
        pageNum,
        pageSize
    }),

    stocksReceived: (data: any) => ({
        type: actions.STOCKS_RECEIVED,
        data
    }),

    deleteStock: (id: number) => ({
        type: actions.DELETE_STOCK,
        id
    }),

    stockDeleted: () => ({
        type: actions.STOCK_DELETED
    }),

    // TODO: define static type for transaction data
    addTransaction: (data: any) => ({
        type: actions.ADD_TRANSACTION,
        data
    })
}

export {actions};