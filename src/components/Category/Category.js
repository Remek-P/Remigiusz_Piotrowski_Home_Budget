import React from 'react';
import { CardActionArea } from '@mui/material';
import {CategoryHeader} from "./Cat-components/Category-header";
import {CategorySumUp} from "./Cat-components/Category-sum-up";
import {CategoryPercentage} from "./Cat-components/Category-precentage";

export function Cat() {
    return (
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
    );
}

