import React, {useContext, useState} from "react";
import { GlobalContext } from "../../context/GlobalStates";
import { useNavigate } from "react-router-dom";

import Button from "@mui/material/Button";
import DialogTitle from "@mui/material/DialogTitle";
import DialogActions from "@mui/material/DialogActions";
import Dialog from "@mui/material/Dialog";
import Slide from "@mui/material/Slide";
import {Box, TextField} from "@mui/material";

//Settings fot Transition MUI component
const Transition = React.forwardRef(function Transition(props, ref) {
    return <Slide direction="up" ref={ref} {...props} />;
});

export function EditCategoryName({ catName, setAnchorEl }) {

    const [open, setOpen] = React.useState(false);
    const [newCatName, setNewCatName] = useState(catName)
    const { editCategory } = useContext(GlobalContext);
    const navigate = useNavigate();

    //Overriding default button styles
    const buttonStyle = {
        fontSize: "1rem",
        fontWeight: "400",
        lineHeight: "1.75rem",
        padding: 0,
        paddingRight: 1,
        color: "#000",
        border: "inherit",
        ':hover': {
            backgroundColor: "transparent",
        }
    }

    //Opening the dialog window
    const handleClickOpen = () => {
        setOpen(true);
    };

    //Closing the dialog for window
    const handleClose = () => {
        setOpen(false);
    };

    //Handling the input value
    const handleInput = (event) => {
        setNewCatName(event.target.value)
    }

    //Handling submit with validation
    const handleSubmit = () => {
        //If new category name isn't an empty string
        if (newCatName !== "") {
            //Capturing old and new category name and assigning to state
            const categoryNameChange = {
                catName,
                newCatName,
            }
            //Reducer function receives the names
            editCategory(categoryNameChange);
            //redirect to new category route
            navigate(`/CategoryMain/${newCatName}`);
            //Closing the dialog window
            handleClose();
            //Passing value to parent to close the menu
            setAnchorEl(null)
        } else {
            //If new category name is an empty string (default name is set to original name by initial state (catName)
            //TODO: make a proper alert (visually)
            alert("Please type new category name")
        }
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
                        <TextField
                            sx={{
                            marginX: "1rem",
                            borderBottom: "f000",
                            }}
                            variant={"standard"}
                            onChange={handleInput}
                        />
                    </Box>
                    <Button
                        onClick={handleSubmit}
                        sx={buttonStyle}
                    >
                        Rename
                    </Button>
                    </div>
                </DialogActions>
            </Dialog>
        </>
    )
}