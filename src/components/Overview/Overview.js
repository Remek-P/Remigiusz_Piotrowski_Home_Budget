import React from 'react';
import { CardActionArea } from '@mui/material';
import {OverviewHeader} from "./Overview-components/Overview-header";
import {OverviewSumUp} from "./Overview-components/Overview-sum-up";

export function Overview() {
    return (
        <p className={"overview-main"}>
            <CardActionArea sx={{margin: 0, padding: 0}}>
                <div className={"overview-main-container"}>
                    <OverviewHeader/>
                    <div className={"overview-details-container"}>
                        <OverviewSumUp/>
                    </div>
                    {/*<div className={"pseudo-button"}>view history</div>*/}
                </div>
            </CardActionArea>
        </p>
    );
}

