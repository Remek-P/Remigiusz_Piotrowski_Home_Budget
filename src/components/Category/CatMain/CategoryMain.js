import React, {useContext} from 'react';
import { NavLink } from "react-router-dom";
import {CardActionArea} from '@mui/material';
import {CategoryHeader} from "./CategoryOverviewComponents/Category-header";
import {CategorySumUp} from "./CategoryOverviewComponents/Category-sum-up";
import {CategoryPercentage} from "./CategoryOverviewComponents/Category-precentage";
import {GlobalContext} from "../../../context/GlobalStates";

export function Cat() {

    const {transactions} = useContext(GlobalContext)
    const currentMonth = (new Date().getMonth() + 1).toString(10);
    const data = transactions.map(transaction => transaction.category)
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



