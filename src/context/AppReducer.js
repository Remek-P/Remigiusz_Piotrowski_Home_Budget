import React from "react";

export function AppReducer(state, action) {
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
                categoryList: state.categoryList.filter(category => category !== action.payload.name),
            };
        case "Delete-All-Transactions":
            return {
                ...state,
                transactions: [],
                categoryList: [],
            };
        case "Add-transaction":
            return {
                ...state,
                transactions: [action.payload, ...state.transactions],
                categoryList: [action.payload.category, ...state.categoryList].filter((item, index) => [action.payload.category, ...state.categoryList].indexOf(item) === index),
            };
        case "Edit-transaction":
            return {
                ...state,
                transactions: state.transactions.map(record => {
                    if (record.id === action.payload.id) {
                        record = action.payload
                    }
                    return record
                }),
            };
        case "Edit-category":
            return {
                ...state,
                transactions: state.transactions.map(record => {
                    if (record.category === action.payload.catName) {
                        record.category = action.payload.newCatName
                    }
                    return record
                }),
                categoryList: state.transactions.map(record => {
                    if (record === action.payload.catName) {
                        record = action.payload.newCatName
                    }
                    return record;
                }),
            };
        default:
            return state;
    }
}