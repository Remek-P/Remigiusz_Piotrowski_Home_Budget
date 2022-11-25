import React from 'react';
import {Calculator} from "../../Calculators/Calculator";

export function OverviewSumUp() {

    //Formatting date so the Calculator.js can compare months, formatted as a 2-digit number (YYYYMM)
    const currentDate = new Date();
    //Extracting year
    const currentYear = currentDate.toLocaleString("default",{year: "numeric"});
    //Extracting month
    const month = currentDate.toLocaleString("default",{month: "2-digit"});
    //Combining month and year
    const currentMonth = currentYear+month

    return (
        <div className={"overview-main__sum-up"}>
            {/*Passing current month to Calculator component*/}
            <Calculator parentMonth={currentMonth} />
            {/*TODO: change to currencySign for global control*/}
            zł
        </div>
    )
}

//TODO: currency sign and converter to implement