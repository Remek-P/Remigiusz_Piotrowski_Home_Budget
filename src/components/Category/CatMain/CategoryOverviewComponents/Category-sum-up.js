import React from 'react';
import {Calculator} from "../../../Calculators/Calculator";

export function CategorySumUp({ transaction, parentMonth }) {
    return (
        <div className={"category-main__sum-up"}>
            <Calculator
                parentCategory={transaction}
                parentMonth={parentMonth}
            />
        </div>
    );
}