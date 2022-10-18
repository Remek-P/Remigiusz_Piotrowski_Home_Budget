import React from 'react';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';

let CatStyle = {
    display: 'flex',
    flexWrap: 'wrap',
    '& > :not(style)': {
        mx: 3.4,
        my: 1.3,
        width: 335,
        height: 200,
    },
}

export function Cat() {
    return (
        <Box
            sx={CatStyle}
        >
            <Paper elevation={3} />
        </Box>
    );
}