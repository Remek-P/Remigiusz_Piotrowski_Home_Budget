import React, {createContext, useReducer,} from "react";
import { AppReducer } from "./AppReducer";
const initialState = {
    transactions: [
        {id: 1, name: "game", date: "2022-11-1", month: "202211", value: 2000, currency: "zł", category: "gaming", notes: "present for my birthday"},
        {id: 2, name: "bread", date: "2022-10-1", month: "202210", value: 20, currency: "zł", category: "gaming", notes: "present for my birthday"},
        {id: 3, name: "ticket", date: "2022-11-3", month: "202211", value: 2000, currency: "zł", category: "gaming", notes: "present for my birthday"},
        {id: 4, name: "phone", date: "2022-11-4", month: "202211", value: 2000, currency: "zł", category: "my", notes: "present for my birthday"},
        {id: 5, name: "racs", date: "2022-11-5", month: "202211", value: 10, currency: "zł", category: "trips", notes: "present for my birthday"},
        {id: 6, name: "PS5", date: "2022-11-6", month: "202211", value: 10, currency: "zł", category: "home", notes: "present for my birthday"},
    ],
    categoryList: ["gaming", "my", "trips", "home"],
    //TODO: why undefined?
    currencySigns: ["$", "zł"],
    defaultCurrencySign: [],
};

// let catList = [...initialState.transactions.map(transaction => transaction.category).filter((item,index) => initialState.transactions.map(transaction => transaction.category).indexOf(item) === index)];


// console.log(categoryList);

export const GlobalContext = createContext(initialState);

export const GlobalProvider = ({ children }) => {

    const [state, dispatch] = useReducer(AppReducer, initialState);

    function deleteTransaction(id) {
        dispatch({
            type: "Delete-transaction",
            payload: id,
        })
    }
    //TODO: check the props, to match the name

    function deleteCategory(catName) {
        dispatch({
            type: "Delete-category",
            payload: catName
        })
    }
    function deleteAllTransactions() {
        dispatch({
            type: "Delete-All-Transactions",
        })
    }

    function addTransaction(transaction) {
        dispatch({
            type: "Add-transaction",
            payload: transaction,
        })
    }

    function editCategory(categoryNameChange) {
        dispatch({
            type: "Edit-category",
            payload: categoryNameChange,
        })
    }

    //TODO: create function for editing

    //TODO: check the props, to match the name

    return (
        <GlobalContext.Provider
            value={{
                transactions: state.transactions,
                currencySign: state.currencySign,
                categoryList: state.categoryList,
                deleteTransaction,
                deleteCategory,
                deleteAllTransactions,
                addTransaction,
                editCategory,
        }}>
            {children}
        </GlobalContext.Provider>
    )
}

//Named transactions, for future functionality (expense and income)

