import React, {useContext} from "react";
import {GlobalContext} from "../../context/GlobalStates";

export function Calculator({parentMonth, parentCategory}) {

    const {transactions, currencySign} = useContext(GlobalContext)

    if (parentCategory === undefined) {
        return (
            <>
                {transactions
                    .filter((month) => month.date === parentMonth)
                    .reduce((total, amount) => total + amount.value, 0)
                }
            </>
        )
    } else {
        return (
            <>
                {transactions
                    .filter((month) => month.date === parentMonth)
                    .filter((category) => category.category === parentCategory)
                    .reduce((total, amount) => total + amount.value, 0)}
            </>
        )
    }
}

//TODO: filtering by full date, now by hardcoded number (string)