import React from "react";
import { NavLink } from "react-router-dom";
import { Fab } from "@mui/material";
import AddIcon from '@mui/icons-material/Add';

const fabStyle = {
    position: 'sticky',
    left: 20000,
    bottom: 20,
    width: 60,
    height: 60,
    mt: 2,
    mr: 1,
    color: "#fff",
    backgroundColor: "#000",
    ":hover": {
        color: "#949494",
        backgroundColor: "#fff",
    }
};

export function FAB() {
    return (
        <NavLink to="/NewExpense">
            <Fab sx={fabStyle}>
                <AddIcon sx={{fontSize: 40}}/>
            </Fab>
        </NavLink>
    )
}
