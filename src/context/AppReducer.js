export function AppReducer(state, action)  {
    switch (action.type) {
        case "Delete-transaction":
            return {
                ...state,
                transactions: state.transactions.filter(transaction => transaction.id !== action.payload)
            };
        case "Delete-category":
            return {
                ...state,
                transactions: state.transactions.filter(transaction => transaction.category !== action.payload),
                categoryList: state.categoryList.filter(category => category !== action.payload),
            };
        case "Delete-All-Transactions":
            return {
                transactions: [],
                categoryList: [],
            };
        case "Add-transaction":
            return {
                ...state,
                transactions: [action.payload, ...state.transactions],
                categoryList: [action.payload.category, ...state.categoryList] .filter((item,index) => [action.payload.category, ...state.categoryList].indexOf(item) === index),
            }
        case "Edit-category":
            return {
                ...state,
                transactions: state.transactions.filter(transaction => transaction.category === action.payload.catName).map(category => category.category = action.payload.newCatName),
                // categoryList: state.categoryList.filter(category => category === action.payload),
            };
        default:
            return state;
    }
}