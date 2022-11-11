import React from "react";


export function DetailsExpenseDate({ transaction }) {

    return (
        <h5 className={"overview-details-expense__header"}>{transaction.date}
        </h5>
    )
}