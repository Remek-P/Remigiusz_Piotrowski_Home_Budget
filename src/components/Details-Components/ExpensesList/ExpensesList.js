import React, {useContext} from "react";
import {DetailsExpenseDate} from "./ExpenseDetails/DetailsExpenseDate";
import {DetailsExpenseName} from "./ExpenseDetails/DetailsExpenseName";
import {DetailsExpenseValue} from "./ExpenseDetails/DetailsExpenseValue";
import {GlobalContext} from "../../../context/GlobalStates";

export function ExpensesList({ catName }) {

    const { transactions } = useContext(GlobalContext);

    //Sorting by month (y+m) all the transactions
    const sortedTransactions = [...transactions].sort((a, b) => b.date - a.date);
    //Filtering transactions that belong to chosen category, passed from parent component
    const filteredTransactions = sortedTransactions.filter(category => category.category === catName );
    //Checking if Category (filtering) or All expenses (without filtering) transactions should be displayed
    const picker = catName !== undefined ? filteredTransactions : sortedTransactions;


    console.log(sortedTransactions)

    return (
        <>
            {picker
                //Mapping of single transaction from all the transactions, to display them one by one
                .map(transaction => <li key={transaction.id} className={"overview-details-expense"}>
                    <DetailsExpenseDate transaction={transaction} />
                    <article className={"overview-details-expense__container"}>
                        <DetailsExpenseName transaction={transaction} />
                        <DetailsExpenseValue transaction={transaction} />
                    </article>
                </li>)}
        </>
    )
}