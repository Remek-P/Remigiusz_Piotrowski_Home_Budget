import React from "react";
import {Calculator} from "../../../../Calculators/Calculator";

export function OverviewDetailsSummupCurrentMonth() {

    const currentMonth = (new Date().getMonth() + 1).toString(10);

    return (
        <h5 className={"overview-details-summup__header"}>This month
            <div className={"overview-details-summup__values"}>
                <Calculator parentMonth={currentMonth} />
                {/*TODO: change to currencySign for global control*/}
                zł
            </div>
        </h5>
    )
}

//<SumByMonth parentMonth={currentMonth} />