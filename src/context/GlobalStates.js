import React, { createContext, useReducer} from "react";
import { AppReducer } from "./AppReducer";
const initialState = {
    transactions: [
        {id: 1, name: "game", month: "11", value: 2000, currency: "zł", category: "gaming", note: "present for my birthday"},
        {id: 2, name: "bread", month: "10", value: 20, currency: "$", category: "gaming", note: "present for my birthday"},
        {id: 3, name: "ticket", month: "11", value: 2000, currency: "zł", category: "gaming", note: "present for my birthday"},
        {id: 4, name: "phone", month: "11", value: 2000, currency: "$", category: "my", note: "present for my birthday"},
        {id: 5, name: "racs", month: "11", value: 10, currency: "zł", category: "trips", note: "present for my birthday"},
        {id: 6, name: "PS5", month: "11", value: 10, currency: "zł", category: "home", note: "present for my birthday"},
    ],
    //TODO: why undefined?
    currencySign: [
        {dollar: "$", pln: "zł"}
        ],
};

export const GlobalContext = createContext(initialState);

export const GlobalProvider = ({ children }) => {
    const [state, dispatch] = useReducer(AppReducer, initialState);

    return (
        <GlobalContext.Provider
            value={{
                transactions: state.transactions,
                currencySign: state.currencySign,
        }}>
            {children}
        </GlobalContext.Provider>
    )
}

//Named transactions, for future functionality (expense and income)

