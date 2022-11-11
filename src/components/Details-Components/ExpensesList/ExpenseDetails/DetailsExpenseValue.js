import React from "react";

export function DetailsExpenseValue({ transaction }) {

    //TODO: add income handling
    //For future feature income
    // const sign = transaction.value < 0 ? "-" : "+";

    //Picking the side for currency notation
    const currencyDisplay = () => {
        if (transaction.currency === "zł") {
            return transaction.value + transaction.currency
            // return sign + transaction.value + transaction.currency
        } else {
            return <span>{transaction.currency}{transaction.value}</span>
            // return <span>{sign}{transaction.currency}{transaction.value}</span>
        }
    };


    return (
        <div className={"overview-details-expense__container__value"}>{currencyDisplay()}
        </div>

    )
}

// {transaction.currency === "zł" ?  :
