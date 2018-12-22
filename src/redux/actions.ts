
const actions = {
    
    ADD_STOCK: 'ADD_STOCK',
    STOCK_CREATED: 'STOCK_CREATED',
    GET_STOCKS: 'GET_STOCKS',
    STOCKS_RECEIVED: 'STOCKS_RECEIVED',

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
    })
}

export {actions};