export function AppReducer(state, action)  {
    switch (action.type) {
        case "Delete-transaction":
            return {
                ...state,
                transactions: state.transactions.filter(transaction => transaction.id !== transaction.payload)
            };
        // case "Delete-category":
        //     return {
        //         ...state,
        //         transactions: state.transactions.filter(transaction => transaction.id !== transaction.payload)
        //     };
        case "Add-transaction":
            return {
                ...state,
                transactions: [action.payload, ...state.transactions],
            }
        default:
            return state;
    }
}