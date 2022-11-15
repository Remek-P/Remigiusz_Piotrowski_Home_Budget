import React, {useContext} from 'react';
import {Calculator} from "../../../Calculators/Calculator";
import {GlobalContext} from "../../../../context/GlobalStates";

export function CategorySumUp({ catName, parentMonth }) {


    const { currencySign } = useContext(GlobalContext);

    return (
        <div className={"category-main__sum-up"}>
            <Calculator
                parentCategory={catName}
                parentMonth={parentMonth}
            />

        </div>
    );
}