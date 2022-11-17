import React, {useContext} from "react";
import {GlobalContext} from "../../context/GlobalStates";

export function PercentageCalculator({parentCurrentMonth, parentPreviousMonth, parentCategory}) {

    const { transactions } = useContext(GlobalContext)

    //Calculating percentage value for All Expenses
    const currentMonth = transactions
        .filter((month) => month.month === parentCurrentMonth)
        .reduce((total, amount) => total + amount.value, 0);
    const previousMonth = transactions
        .filter((month) => month.month === parentPreviousMonth)
        .reduce((total, amount) => total + amount.value, 0);
    const percentage = previousMonth === 0
        ? 0
        : (((currentMonth - previousMonth) / (previousMonth)) * 100).toFixed(1)

    const categoryCurrentMonth = transactions
        .filter((month) => month.month === parentCurrentMonth)
        .filter((category) => category.category === parentCategory)
        .reduce((total, amount) => total + amount.value, 0);
    const categoryPreviousMonth = transactions
        .filter((month) => month.month === parentPreviousMonth)
        .filter((category) => category.category === parentCategory)
        .reduce((total, amount) => total + amount.value, 0)
    const categoryPercentage = categoryPreviousMonth === 0
        ? 0
        : (((categoryCurrentMonth - categoryPreviousMonth) / (categoryPreviousMonth)) * 100).toFixed(1)


    if (parentCategory === undefined) {
        return (
            <>
                {percentage}%
            </>
        )
    } else {
        return (
            <>
                {categoryPercentage}%
            </>
        )
    }
}