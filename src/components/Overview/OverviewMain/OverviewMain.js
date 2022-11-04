import React from 'react';
import { NavLink } from "react-router-dom";
import { CardActionArea } from '@mui/material';
import { OverviewHeader } from "../Overview-components/Overview-header";
import { OverviewSumUp } from "../Overview-components/Overview-sum-up";

function handleOverview() {
    console.log("overview")
}

export function OverviewMain() {
    return (
        <NavLink to="/Overview">
            <p className={"overview-main"}>
                <CardActionArea onClick={handleOverview} sx={{margin: 0, padding: 0}}>
                    <div className={"overview-main-container"}>
                        <OverviewHeader/>
                        <div className={"overview-components-container"}>
                            <OverviewSumUp/>
                        </div>
                        {/*<div className={"pseudo-button"}>view history</div>*/}
                    </div>
                </CardActionArea>
            </p>
        </NavLink>
    );
}

