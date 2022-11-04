import React from 'react';
import { NavLink } from "react-router-dom";
import {CardActionArea} from '@mui/material';
import {CategoryHeader} from "./Cat-components/Category-header";
import {CategorySumUp} from "./Cat-components/Category-sum-up";
import {CategoryPercentage} from "./Cat-components/Category-precentage";

function handleCategory() {
    console.log("cat")
}

export function Cat() {
    return (
        //TODO: change to automatically generated link for Cats
        <NavLink to="/Cat1">
            <p className={"category-main"}>
                <CardActionArea onClick={handleCategory} sx={{margin: 0, padding: 0}}>
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
    );
}

