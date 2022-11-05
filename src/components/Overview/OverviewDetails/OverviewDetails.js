import React from "react";
import {OverviewDetailsSummupCurrentMonth} from "./OverviewDetails-Components/Summup/OverviewDetailsSummupCurrentMonth";
import {OverviewDetailsSummupPreviousMonth} from "./OverviewDetails-Components/Summup/OverviewDetailsSummupPreviousMonth";
import {OverviewDetailsSummupM2MPercentage} from "./OverviewDetails-Components/Summup/OverviewDetailsSummupM2MPercentage";
import {OverviewDetailsExpenseDate} from "./OverviewDetails-Components/Expense/OverviewDetailsExpenseDate";
import {OverviewDetailsExpenseName} from "./OverviewDetails-Components/Expense/OverviewDetailsExpenseName";
import {OverviewDetailsExpenseValue} from "./OverviewDetails-Components/Expense/OverviewDetailsExpenseValue";

export function OverviewDetails() {
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
                    <li className={"overview-details-expense"}>
                        <OverviewDetailsExpenseDate />
                        <article className={"overview-details-expense__container"}>
                            <OverviewDetailsExpenseName />
                            <OverviewDetailsExpenseValue />
                        </article>
                    </li>
                </ul>
            </section>
    )
}