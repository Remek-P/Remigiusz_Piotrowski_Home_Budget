import React from "react";
import {Fab} from "@mui/material";
import AddIcon from '@mui/icons-material/Add';

const fabStyle = {
    position: 'sticky',
    right: 200,
    bottom: 20,
    width: 80,
    height: 80,
    color: "white",
    backgroundColor: "#000000",
    ":hover": {
        color: "#fff",
        backgroundColor: "#949494",
    }
};



export function FAB() {
    return (
        <Fab sx={fabStyle}>
            <AddIcon sx={{fontSize: 40}}/>
        </Fab>

    )
}
