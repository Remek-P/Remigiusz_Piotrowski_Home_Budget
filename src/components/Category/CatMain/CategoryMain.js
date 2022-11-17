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

    //Formatting date so the PercentageCalculator.js can compare months with months formatted as a 2-digit number (YYYYMM)
    const currentDate = new Date();
    //Extracting year
    const currentYear = currentDate.toLocaleString("default",{year: "numeric"});
    //Extracting month
    const month = currentDate.toLocaleString("default",{month: "2-digit"});
    const currentMonth = currentYear+month

    const oneMonthBackDate = new Date();
    //setting the date one month back for comparison
    oneMonthBackDate.setMonth(oneMonthBackDate.getMonth()-1);
    //Extracting year
    const oneMonthBackYear = oneMonthBackDate.toLocaleString("default",{year: "numeric"});
    //Extracting month
    const oneMonthBack = oneMonthBackDate.toLocaleString('default', { month: '2-digit' });
    const previousMonth = oneMonthBackYear+oneMonthBack

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
                                        parentCurrentMonth={currentMonth}
                                        parentPreviousMonth={previousMonth}
                                        parentCategory={catName}
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



