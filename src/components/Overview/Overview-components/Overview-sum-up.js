import React from 'react';
import {Calculator} from "../../Calculators/Calculator";

export function OverviewSumUp() {

    const currentMonth = (new Date().getMonth() + 1).toString(10);

    return (
        <div className={"overview-main__sum-up"}>
            <Calculator parentMonth={currentMonth} />
            {/*TODO: change to currencySign for global control*/}
            zł
        </div>
    )
}