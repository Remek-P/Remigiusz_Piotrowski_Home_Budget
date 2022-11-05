import React, {useContext} from "react";
import {OverviewDetailsSummupCurrentMonth} from "./OverviewDetails-Components/Summup/OverviewDetailsSummupCurrentMonth";
import {OverviewDetailsSummupPreviousMonth} from "./OverviewDetails-Components/Summup/OverviewDetailsSummupPreviousMonth";
import {OverviewDetailsSummupM2MPercentage} from "./OverviewDetails-Components/Summup/OverviewDetailsSummupM2MPercentage";
import {OverviewDetailsExpenseDate} from "./OverviewDetails-Components/Expense/OverviewDetailsExpenseDate";
import {OverviewDetailsExpenseName} from "./OverviewDetails-Components/Expense/OverviewDetailsExpenseName";
import {OverviewDetailsExpenseValue} from "./OverviewDetails-Components/Expense/OverviewDetailsExpenseValue";
import {GlobalContext} from "../../../context/GlobalStates";

export function OverviewDetails() {

    const { transactions } = useContext(GlobalContext)

    return (
            <section className={"overview-details"}>
                <h3 className={"overview-details__header"}>All expenses</h3>
                <ul className={"overview-details-summup"}>
                    <li>
                        <OverviewDetailsSummupCurrentMonth />
                    </li>
                    <li>
                        <OverviewDetailsSummupPreviousMonth />
                    </li>
                    <li>
                        <OverviewDetailsSummupM2MPercentage />
                    </li>
                </ul>
                <ul>
                    {transactions.map(transaction => <li key={transaction.id} className={"overview-details-expense"}>
                    <OverviewDetailsExpenseDate transaction={transaction} />
                    <article className={"overview-details-expense__container"}>
                        <OverviewDetailsExpenseName transaction={transaction} />
                        <OverviewDetailsExpenseValue transaction={transaction} />
                    </article>
                </li>)}
                </ul>
            </section>
    )
}