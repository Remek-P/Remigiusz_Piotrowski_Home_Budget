import React from "react";
import { useState, useContext } from "react";
import { GlobalContext } from "../../../../../context/GlobalStates";

export function OverviewDetailsSummupCurrentMonth() {
    return (
        <h5 className={"overview-details-summup__header"}>This month
            <div className={"overview-details-summup__values"}>$12,536</div>
        </h5>
    )
}