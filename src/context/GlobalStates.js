import React, { createContext, useReducer} from "react";
import { AppReducer } from "./AppReducer";
const initialState = {
    transactions: [
        {id: 1, name: "game", date: "2/11/2022", price: 200, currency: "zł", category: "gaming", note: "present for my birthday"},
        {id: 2, name: "game", date: "2/11/2022", price: 20, currency: "$", category: "gaming", note: "present for my birthday"},
    ]
};

export const GlobalContext = createContext(initialState);

export const GlobalProvider = ({ children }) => {
    const [state, dispatch] = useReducer(AppReducer, initialState);

    return (
        <GlobalContext.Provider value={{transactions: state.transactions}}>
            {children}
        </GlobalContext.Provider>
    )
}

//Named transactions, for future functionality (expense and income)