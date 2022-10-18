import React from "react";
import {Fab} from "@mui/material";
import AddIcon from '@mui/icons-material/Add';

const fabStyle = {
    position: 'sticky',
    left: 20000,
    bottom: 20,
    width: 80,
    height: 80,
    margin: 2,
    color: "#fff",
    backgroundColor: "#000",
    ":hover": {
        color: "#949494",
        backgroundColor: "#fff",
    }
};

function handleNewExpense() {
    console.log("new")
}

export function FAB() {
    return (
        <Fab onClick={handleNewExpense} sx={fabStyle}>
            <AddIcon sx={{fontSize: 40}}/>
        </Fab>

    )
}
