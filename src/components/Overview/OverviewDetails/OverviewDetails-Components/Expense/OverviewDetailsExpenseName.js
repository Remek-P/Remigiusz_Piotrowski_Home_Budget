import React from "react";

export function OverviewDetailsExpenseName({ transaction }) {

    return (
        <h4 className={"overview-details-expense__container__header"}>{transaction.name}
        </h4>
    )
}

