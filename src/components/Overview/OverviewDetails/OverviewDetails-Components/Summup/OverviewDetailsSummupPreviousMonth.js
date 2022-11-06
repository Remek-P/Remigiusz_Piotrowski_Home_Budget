import React from "react";
import {Calculator} from "../../../../Calculators/Calculator";

export function OverviewDetailsSummupPreviousMonth() {

    const previousMonth = new Date().getMonth().toString();

    return (
        <h5 className={"overview-details-summup__header"}>Prev. month
            <div className={"overview-details-summup__values"}>
                <Calculator parentMonth={previousMonth} />
                {/*TODO: change to currencySign for global control*/}
                zł
            </div>
        </h5>
    )
}