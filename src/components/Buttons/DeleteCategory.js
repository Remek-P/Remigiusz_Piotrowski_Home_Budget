import React, { useContext } from "react";
import { GlobalContext } from "../../context/GlobalStates";
import { useNavigate } from "react-router-dom";

import Button from "@mui/material/Button";
import DialogTitle from "@mui/material/DialogTitle";
import DialogActions from "@mui/material/DialogActions";
import Dialog from "@mui/material/Dialog";
import Slide from "@mui/material/Slide";

const Transition = React.forwardRef(function Transition(props, ref) {
    return <Slide direction="up" ref={ref} {...props} />;
});

export function DeleteCategory({ catName, setAnchorEl }) {

    const [open, setOpen] = React.useState(false);
    const { deleteCategory, deleteAllTransactions } = useContext(GlobalContext);
    const navigate = useNavigate();

    const sectionName = catName !== undefined ? catName : "All expenses";

    //Overriding default button styles
    const buttonStyle = {
        fontSize: "1rem",
        fontWeight: "400",
        lineHeight: "1.75rem",
        padding: 0,
        color: "red",
        border: "inherit",
        ':hover': {
            backgroundColor: "transparent",
        }
    }

    //Opening the dialog for window
    const handleClickOpen = () => {
        setOpen(true);
    };

    //Opening the dialog for window
    const handleClose = () => {
        setOpen(false);
    };

    // Choosing what to delete - if viewing All expenses, delete all transactions using deleteAllTransactions from reducer or delete just the category using deleteCategory. Then navigate to main page and set anchorEl to null (for cancel option)
    const handleDelete = () => {
        if (sectionName === "All expenses") {
            deleteAllTransactions();
            navigate("/");
            setAnchorEl(null);
        } else {
            deleteCategory(catName);
            navigate("/");
            setAnchorEl(null);
        }
    }

    return (
        <>
            <Button sx={buttonStyle} onClick={handleClickOpen}>
                Delete {sectionName}
            </Button>
            <Dialog
                open={open}
                TransitionComponent={Transition}
                keepMounted
                onClose={handleClose}
                aria-describedby="alert-dialog-slide-description"
            >
                <DialogTitle>{"Do you want to delete the category?"}</DialogTitle>
                <DialogActions>
                    <Button sx={{color: 'text.secondary'}} onClick={handleClose}>Cancel</Button>
                    <Button sx={{color: 'error.main'}} onClick={handleDelete}>Yes</Button>
                </DialogActions>
            </Dialog>
        </>
    )
}