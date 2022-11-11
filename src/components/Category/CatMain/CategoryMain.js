import React, {useContext} from 'react';
import { NavLink } from "react-router-dom";
import {CardActionArea} from '@mui/material';
import {CategoryHeader} from "./CategoryOverviewComponents/Category-header";
import {CategorySumUp} from "./CategoryOverviewComponents/Category-sum-up";
import {CategoryPercentage} from "./CategoryOverviewComponents/Category-precentage";
import {GlobalContext} from "../../../context/GlobalStates";

export function Cat() {

    const {transactions} = useContext(GlobalContext)

    //Formatting date so the Calculator.js can compare months by month of current year
    const currentDate = new Date();
    const currentYear = (currentDate.getFullYear()).toString(10);
    const currentMonth = currentYear+(currentDate.getMonth() + 1).toString(10);
    //TODO: change the code to take transaction category and month, so I don't need to copy the transactions array
    const sortedTransactions = ([...transactions].sort((a, b) => b.month - a.month))
    const data = sortedTransactions.map(transaction => transaction.category);
    let filtered = data.filter((item,index) => data.indexOf(item) === index)

    return (
        <ul>
            {filtered.map((transaction, index) => <li key={index}>
                <NavLink to={`/Cat/${transaction}`}>
                    <p className={"category-main"}>
                        <CardActionArea sx={{margin: 0, padding: 0}}>
                            <div className={"category-main-container"}>
                                <CategoryHeader transaction={transaction}/>
                                <div className={"category-details-container"}>
                                    <CategorySumUp
                                        transaction={transaction}
                                        parentMonth={currentMonth}
                                    />
                                    <CategoryPercentage
                                        transaction={transaction}
                                        parentMonth={currentMonth}
                                    />
                                </div>
                                {/*<div className={"pseudo-button"}>view history</div>*/}
                            </div>
                        </CardActionArea>
                    </p>
                </NavLink>
            </li>)}
        </ul>
    )
}

//Cats are generated based on categories from GlobalState, but not grouped (need reduce)



