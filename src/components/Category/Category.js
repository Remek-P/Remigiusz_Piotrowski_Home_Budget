import React from 'react';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import { CardActionArea } from '@mui/material';
import {CategoryHeader} from "./Cat-components/Category-header";
import {CategorySumUp} from "./Cat-components/Category-sum-up";
import {CategoryPercentage} from "./Cat-components/Category-precentage";

let CatStyle = {
    display: 'flex',
    flexWrap: 'wrap',
    '& > :not(style)': {
        mx: 3.4,
        my: 1.3,
        minWidth: 335,
        minHeight: 200,
    },
}

export function Cat() {
    return (
        <Box sx={CatStyle}>
            <Paper elevation={3}>
                <CardActionArea>
                <div className={"category-main-container"}>
                    <CategoryHeader/>
                    <div className={"category-details-container"}>
                        <CategorySumUp/>
                        <CategoryPercentage/>
                    </div>
                </div>
                </CardActionArea>
            </Paper>
        </Box>
    );
}

