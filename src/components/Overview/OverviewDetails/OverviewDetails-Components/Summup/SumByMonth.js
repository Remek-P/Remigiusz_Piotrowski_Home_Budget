import React, {useContext} from "react";
import {GlobalContext} from "../../../../../context/GlobalStates";

export function SumByMonth({ parentMonth,isMain }) {

    const { transactions, currencySign } = useContext(GlobalContext)

    return (
        <div className={
            isMain === true
                ? "overview-main__sum-up"
                : "overview-details-summup__values"}>
            {transactions
                //TODO: filtering by full date, now by hardcoded number (string)
                .filter((month) => month.date === parentMonth)
                .reduce((total, amount) => total + amount.value, 0)
            }
            {/*TODO: change to currencySign for global control*/}
            zł
        </div>
    )
}