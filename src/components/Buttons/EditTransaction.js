import React from "react";
import Button from "@mui/material/Button";

export function EditTransaction() {

    const editButtonStyle = {px: "3.5rem", color: "#000", borderColor: "#000", borderRadius: "35px",
        ':hover': {
            borderColor: '#000',
            backgroundColor: "#000",
            color: '#fff',
        }
    }

    const handleEdit = () => {

    }

    return (
        <Button sx={editButtonStyle} variant="outlined" onClick={handleEdit}>
            Edit
        </Button>
    )
}