import React from "react";
import {Calculator} from "../../../../Calculators/Calculator";

export function OverviewDetailsSummupPreviousMonth() {

    //Formatting date so the Calculator.js can compare months by month of current year
    const currentDate = new Date();
    const currentYear = (currentDate.getFullYear()).toString(10);
    const previousMonth = currentYear+(currentDate.getMonth()).toString(10);

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