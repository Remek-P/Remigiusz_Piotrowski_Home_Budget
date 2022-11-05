import React from "react";
import { useState, useContext } from "react";
import {SumByMonth} from "./SumByMonth";

export function OverviewDetailsSummupPreviousMonth({ month }) {

    const previousMonth = new Date().getMonth().toString();

    return (
        <h5 className={"overview-details-summup__header"}>Prev. month
            <div className={"overview-details-summup__values"}>
                <SumByMonth parentMonth={previousMonth} />
            </div>
        </h5>
    )
}