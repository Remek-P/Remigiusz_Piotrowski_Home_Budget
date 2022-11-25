import React from "react";
import { Link } from "react-router-dom";
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
        <Link to="/NewExpense">
            {/*Material UI component - button*/}
            <Fab sx={fabStyle}>
                {/*Material UI icon*/}
                <AddIcon sx={{fontSize: 40}}/>
            </Fab>
        </Link>
    )
}
