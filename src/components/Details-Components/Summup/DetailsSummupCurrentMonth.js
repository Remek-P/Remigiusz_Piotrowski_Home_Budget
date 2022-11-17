import React from "react";
import {Calculator} from "../../Calculators/Calculator";

export function DetailsSummupCurrentMonth({ catName }) {

    //Formatting date so the Calculator.js can compare months with months formatted as a 2-digit number (YYYYMM)
    const currentDate = new Date();
    //Extracting year
    const currentYear = currentDate.toLocaleString("default",{year: "numeric"});
    //Extracting month
    const month = currentDate.toLocaleString("default",{month: "2-digit"});
    const currentMonth = currentYear+month

    return (
        <h5 className={"overview-details-summup__header"}>This month
            <div className={"overview-details-summup__values"}>
                <Calculator parentMonth={currentMonth} parentCategory={catName}/>
                {/*TODO: change to currencySign for global control*/}
                zł
            </div>
        </h5>
    )
}

//<SumByMonth parentMonth={currentMonth} />