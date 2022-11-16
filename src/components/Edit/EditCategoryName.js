import React, {useContext, useState} from "react";
import { GlobalContext } from "../../context/GlobalStates";
import { useNavigate } from "react-router-dom";

import Button from "@mui/material/Button";
import DialogTitle from "@mui/material/DialogTitle";
import DialogActions from "@mui/material/DialogActions";
import Dialog from "@mui/material/Dialog";
import Slide from "@mui/material/Slide";
import {Box, TextField} from "@mui/material";

const Transition = React.forwardRef(function Transition(props, ref) {
    return <Slide direction="up" ref={ref} {...props} />;
});

export function EditCategoryName({ catName }) {

    const [open, setOpen] = React.useState(false);
    const [newCatName, setNewCatName] = useState("")
    const { editCategory } = useContext(GlobalContext);
    const navigate = useNavigate();

    const buttonStyle = {
        fontSize: "1rem",
        fontWeight: "400",
        lineHeight: "1.75rem",
        padding: 0,
        color: "#000",
        border: "inherit",
        ':hover': {
            backgroundColor: "transparent",
        }
    }

    const handleClickOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };

    const handleInput = (event) => {
            setNewCatName(event.target.value)
    }

    const handleSubmit = () => {
        const categoryNameChange = {
            catName,
            newCatName,
        }
        editCategory(categoryNameChange)
        navigate(`/CategoryMain/${newCatName}`);
        handleClose();
    }

    return (
        <>
            <Button sx={buttonStyle} onClick={handleClickOpen}>
                Rename
            </Button>
            <Dialog
                open={open}
                TransitionComponent={Transition}
                keepMounted
                onClose={handleClose}
                aria-describedby="alert-dialog-slide-description"
            >
                <DialogTitle>{"New category name"}</DialogTitle>
                <DialogActions>
                    <div style={{width: "100%", display: "flex", justifyContent: "space-around"}}>
                    <Box
                        sx={{
                        width: "100%",
                        }}
                    >
                        <TextField sx={{
                            marginX: "1rem",
                        }} variant={"standard"} onChange={handleInput}/>
                    </Box>
                    <Button onClick={handleSubmit}>
                        Rename
                    </Button>
                    </div>
                </DialogActions>
            </Dialog>
        </>
    )
}