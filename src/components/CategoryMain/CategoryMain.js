import React, {useContext} from 'react';
import { NavLink } from "react-router-dom";
import {CardActionArea} from '@mui/material';
import {CategoryHeader} from "./Cat-components/Category-header";
import {CategorySumUp} from "./Cat-components/Category-sum-up";
import {CategoryPercentage} from "./Cat-components/Category-precentage";
import {GlobalContext} from "../../context/GlobalStates";

export function Cat() {

    const {transactions} = useContext(GlobalContext)

    return (
        <ul>
            {transactions.map(cat => <li key={cat.id}>
                <NavLink to={`/Cat/${cat.category}`}>
                    <p className={"category-main"}>
                        <CardActionArea sx={{margin: 0, padding: 0}}>
                            <div className={"category-main-container"}>
                                <CategoryHeader/>
                                <div className={"category-details-container"}>
                                    <CategorySumUp/>
                                    <CategoryPercentage/>
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