import React, {useContext} from "react";
import {OverviewDetailsExpenseDate} from "./ExpenseDetails/OverviewDetailsExpenseDate";
import {OverviewDetailsExpenseName} from "./ExpenseDetails/OverviewDetailsExpenseName";
import {OverviewDetailsExpenseValue} from "./ExpenseDetails/OverviewDetailsExpenseValue";
import {GlobalContext} from "../../../../../context/GlobalStates";

export function ExpensesList({ catName }) {

    const { transactions } = useContext(GlobalContext);

    console.log(catName)

    //Sorting by month (y+m) all the transactions
    const sortedTransactions = [...transactions].sort((a, b) => b.month - a.month);
    const filteredTransactions = sortedTransactions.filter(category => category.category === catName );
    const picker = catName !== undefined ? filteredTransactions : sortedTransactions;


    return (
        <>
            {picker
                //Mapping of single transaction from all the transactions, to display them one by one
                .map(transaction => <li key={transaction.id} className={"overview-details-expense"}>
                    <OverviewDetailsExpenseDate transaction={transaction} />
                    <article className={"overview-details-expense__container"}>
                        <OverviewDetailsExpenseName transaction={transaction} />
                        <OverviewDetailsExpenseValue transaction={transaction} />
                    </article>
                </li>)}
        </>
    )
}