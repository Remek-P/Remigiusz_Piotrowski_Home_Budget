import React from "react";

export function OverviewDetailsExpenseValue({ transaction }) {

    //Picking the side for currency notation
    const currencyDisplay = () => {
        if (transaction.currency === "zł") {
            return transaction.price + transaction.currency
        } else {
            return <span>{transaction.currency}{transaction.price}</span>
        }
    };


    return (
        <div className={"overview-details-expense__container__value"}>{currencyDisplay()}
        </div>

    )
}

// {transaction.currency === "zł" ?  :
