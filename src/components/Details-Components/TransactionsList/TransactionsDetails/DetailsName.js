import React from "react";

export function DetailsName({ transaction }) {

    return (
        <h4 className={"overview-details-expense__container__header"}>{transaction.name}
        </h4>
    )
}

