import React, { createContext, useReducer} from "react";
import { AppReducer } from "./AppReducer";
const initialState = {
    transactions: [
        {id: 1, name: "game", date: "11", value: 2000, currency: "zł", category: "gaming", note: "present for my birthday"},
        {id: 2, name: "bread", date: "10", value: 20, currency: "$", category: "gaming", note: "present for my birthday"},
        {id: 3, name: "ticket", date: "11", value: 2000, currency: "zł", category: "gaming", note: "present for my birthday"},
        {id: 4, name: "phone", date: "11", value: 2000, currency: "$", category: "gaming", note: "present for my birthday"},
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

