import React from "react";
import { useContext } from "react";
import { GlobalContext } from "../../../../../context/GlobalStates";

export function OverviewDetailsExpenseName() {

    const { transactions } = useContext(GlobalContext)

    return (
        transactions.map(transaction => (<h4 key={transaction.id} className={"overview-details-expense__container__header"}>{transaction.name}
        </h4>))
    )
}

