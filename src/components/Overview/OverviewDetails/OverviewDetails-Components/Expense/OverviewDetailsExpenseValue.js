import React from "react";
import { useContext } from "react";
import { GlobalContext } from "../../../../../context/GlobalStates";

export function OverviewDetailsExpenseValue() {

    const { transactions } = useContext(GlobalContext)

    const currencyDisplay = (a) => {
        if (a.currency === "zł") {
            return a.price + a.currency
        } else {
            return a.currency + a.price
        }
    };


    return (
        transactions.map(transaction => <div key={transaction.id} className={"overview-details-expense__container__value"}>{currencyDisplay(transaction)}
        </div>)

    )
}

// {transaction.currency === "zł" ?  :
