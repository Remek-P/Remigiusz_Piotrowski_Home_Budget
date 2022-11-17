import React from "react";
import Button from "@mui/material/Button";
import {useNavigate} from "react-router-dom";

export function EditTransactionButton({ transaction }) {

    const navigate = useNavigate();

    const editButtonStyle = {
        fontSize: "0.875rem",
        lineHeight: "1.0625rem",
        px: "3.5rem",
        color: "#000",
        borderColor: "#000",
        borderRadius: "35px",
        ':hover': {
            borderColor: '#000',
            backgroundColor: "#000",
            color: '#fff',
        }
    }

    const handleEdit = () => {
        navigate("/EditExpense", {
            state: transaction
        })
    }

    return (
        <Button sx={editButtonStyle} variant="outlined" onClick={handleEdit}>
            Edit
        </Button>
    )
}