import React from "react";
import { useState, useContext } from "react";
import { GlobalContext } from "../../../../../context/GlobalStates";

export function OverviewDetailsSummupPreviousMonth() {
    return (
        <h5 className={"overview-details-summup__header"}>Prev. month
            <div className={"overview-details-summup__values"}>$15,000</div>
        </h5>
    )
}