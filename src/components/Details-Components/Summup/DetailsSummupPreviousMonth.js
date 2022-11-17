import React from "react";
import {Calculator} from "../../Calculators/Calculator";

export function DetailsSummupPreviousMonth({ catName }) {

    //Formatting date so the Calculator.js can compare months by month of current year
    // const oneMonthBackDate = new Date('January 17, 2023');
    // const currentYear = (oneMonthBackDate.getFullYear()).toString(10);
    // const month = (oneMonthBackDate.getMonth()).toString(10)
    // const previousMonth = currentYear+month;

    // const currentYear = new Date('January 17, 2023').toLocaleString("pl-PL",{year: "numeric"});
    // const month = (new Date('January 17, 2023').setMonth(new Date('January 17, 2023').getMonth()-1)).toLocaleString("pl-PL",{month: "2-digit"});

    //Formatting date so the Calculator.js can compare months with months formatted as a 2-digit number (YYYYMM)
    const oneMonthBackDate = new Date();
    //setting the date one month back for comparison
    oneMonthBackDate.setMonth(oneMonthBackDate.getMonth()-1);
    //Extracting year
    const oneMonthBackYear = oneMonthBackDate.toLocaleString("default",{year: "numeric"});
    //Extracting month
    const oneMonthBack = oneMonthBackDate.toLocaleString('default', { month: '2-digit' });
    const previousMonth = oneMonthBackYear+oneMonthBack
    
    return (
        <h5 className={"overview-details-summup__header"}>Prev. month
            <div className={"overview-details-summup__values"}>
                <Calculator parentMonth={previousMonth}  parentCategory={catName}/>
                {/*TODO: change to currencySign for global control*/}
                zł
            </div>
        </h5>
    )
}