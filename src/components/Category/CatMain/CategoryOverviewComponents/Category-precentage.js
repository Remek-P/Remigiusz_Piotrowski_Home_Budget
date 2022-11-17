import React from 'react';
import {PercentageCalculator} from "../../../Calculators/PercentageCalculator";

export function CategoryPercentage({parentCurrentMonth, parentPreviousMonth, parentCategory}) {

    return (
        <div className={"category-main__percentage"}>
            <PercentageCalculator
                parentCurrentMonth={parentCurrentMonth}
                parentPreviousMonth={parentPreviousMonth}
                parentCategory={parentCategory}
            />
        </div>
    );
}