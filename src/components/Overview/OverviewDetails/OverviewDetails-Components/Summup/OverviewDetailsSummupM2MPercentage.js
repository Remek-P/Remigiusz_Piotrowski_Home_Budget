import React from "react";
import { useState, useContext } from "react";
import { GlobalContext } from "../../../../../context/GlobalStates";

export function OverviewDetailsSummupM2MPercentage() {
    return (
        <h5 className={"overview-details-summup__header"}>M2M&nbsp;change
            <div className={"overview-details-summup__values"}>+13%</div>
        </h5>
    )
}