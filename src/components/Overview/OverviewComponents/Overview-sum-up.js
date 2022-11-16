import React from 'react';
import {Calculator} from "../../Calculators/Calculator";

export function OverviewSumUp() {

    //Formatting date so the Calculator.js can compare months by month of current year
    const currentDate = new Date();
    const currentYear = (currentDate.getFullYear()).toString(10);
    const currentMonth = currentYear+(currentDate.getMonth() + 1).toString(10);

    return (
        <div className={"overview-main__sum-up"}>
            <Calculator parentMonth={currentMonth} />
            {/*TODO: change to currencySign for global control*/}
            zł
        </div>
    )
}

//TODO: currency sign