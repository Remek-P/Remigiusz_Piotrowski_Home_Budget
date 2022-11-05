import React from "react";
import { useState, useContext } from "react";
import {SumByMonth} from "./SumByMonth";
import {GlobalContext} from "../../../../../context/GlobalStates";

export function OverviewDetailsSummupCurrentMonth() {

    const { transactions } = useContext(GlobalContext)

    const currentMonth = (new Date().getMonth() + 1).toString(10);

    return (
        <h5 className={"overview-details-summup__header"}>This month
            <SumByMonth parentMonth={currentMonth} />
        </h5>
    )
}

//     <SumByMonth currentMonth={currentMonth} />