import React, {useContext} from 'react';
import { NavLink } from "react-router-dom";
import {CardActionArea} from '@mui/material';
import {CategoryHeader} from "./CategoryOverviewComponents/Category-header";
import {CategorySumUp} from "./CategoryOverviewComponents/Category-sum-up";
import {CategoryPercentage} from "./CategoryOverviewComponents/Category-precentage";
import {GlobalContext} from "../../../context/GlobalStates";

//TODO: Add success alert after editing category transaction

export function CategoryMain() {

    const {transactions, categoryList} = useContext(GlobalContext)

    //Formatting date so the Calculator.js can compare months by month of current year
    const currentDate = new Date();
    const currentYear = (currentDate.getFullYear()).toString(10);
    const currentMonth = currentYear+(currentDate.getMonth() + 1).toString(10);

    //Sorting copied list of transactions by month variable
    const sortedTransactions = ([...transactions].sort((a, b) => b.month - a.month));
    //Creating an array of categories
    const categoryArray = sortedTransactions.map(transaction => transaction.category);
    // Filtering created array for unique names
    let uniqueCatArray = categoryArray.filter((item,index) => categoryArray.indexOf(item) === index);

    return (
        <ul>
            {uniqueCatArray.map((catName, index) => <li key={index}>
                <NavLink to={`/CategoryMain/${catName}`}>
                    <p className={"category-main"}>
                        <CardActionArea sx={{margin: 0, padding: 0}}>
                            <div className={"category-main-container"}>
                                <CategoryHeader catName={catName}/>
                                <div className={"category-details-container"}>
                                    <CategorySumUp
                                        catName={catName}
                                        parentMonth={currentMonth}
                                    />
                                    <CategoryPercentage
                                        catName={catName}
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



