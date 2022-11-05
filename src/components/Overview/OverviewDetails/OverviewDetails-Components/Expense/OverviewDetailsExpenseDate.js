import React from "react";


export function OverviewDetailsExpenseDate({ transaction }) {

    return (
        <h5 className={"overview-details-expense__header"}>{transaction.date}
        </h5>
    )
}