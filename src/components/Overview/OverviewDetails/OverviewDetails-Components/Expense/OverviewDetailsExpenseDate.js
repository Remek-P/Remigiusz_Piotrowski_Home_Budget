import React from "react";
import { useContext } from "react";
import { GlobalContext } from "../../../../../context/GlobalStates";

export function OverviewDetailsExpenseDate() {

    const { transactions } = useContext(GlobalContext)

    return (
        transactions.map(transaction => <h5 key={transaction.id} className={"overview-details-expense__header"}>{transaction.date}
        </h5>)
    )
}