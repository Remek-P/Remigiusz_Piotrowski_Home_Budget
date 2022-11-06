import React, {useContext} from "react";
import {GlobalContext} from "../../context/GlobalStates";

export function Calculator({parentMonth}) {

    const { transactions, currencySign } = useContext(GlobalContext)

    return(
        <>
        {transactions
        //TODO: filtering by full date, now by hardcoded number (string)
        .filter((month) => month.date === parentMonth)
        .reduce((total, amount) => total + amount.value, 0)}
        </>
    )
}

//TODO: filtering by full date, now by hardcoded number (string)