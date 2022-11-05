import React, {useContext} from 'react';
import { GlobalContext } from "../../../context/GlobalStates";
import {SumByMonth} from "../OverviewDetails/OverviewDetails-Components/Summup/SumByMonth";

export function OverviewSumUp() {

    const { transactions } = useContext(GlobalContext)
    const isMain = true
    const currentMonth = (new Date().getMonth() + 1).toString(10);

    return (
        <SumByMonth
        isMain={isMain}
        parentMonth={currentMonth}
        />
    )
}