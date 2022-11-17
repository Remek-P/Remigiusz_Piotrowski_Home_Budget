import React, {useContext} from "react";
import {GlobalContext} from "../../context/GlobalStates";

export function Calculator({parentMonth, parentCategory}) {

    const { transactions } = useContext(GlobalContext)

    if (parentCategory === undefined) {
        return (
            <>
                {transactions
                    .filter((month) => month.month === parentMonth)
                    .reduce((total, amount) => total + amount.value, 0)
                }
            </>
        )
    } else {
        return (
            <>
                {transactions
                    .filter((month) => month.month === parentMonth)
                    .filter((category) => category.category === parentCategory)
                    .reduce((total, amount) => total + amount.value, 0)
                }
            </>
        )
    }
}