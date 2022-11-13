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

export function CategoryName({ catName }) {

    const [open, setOpen] = React.useState(false);
    const { deleteCategory, deleteAllTransactions } = useContext(GlobalContext);
    const navigate = useNavigate();

    const sectionName = catName !== undefined ? catName : "All expenses";

    const buttonStyle = {
        padding: 0,
        fontSize: "1.125rem",
        lineHeight: "1.375rem",
        fontWeight: 800,
        color: "#000",
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

    const handleDelete = () => {
        if (sectionName === "All expenses") {
            deleteAllTransactions();
            navigate("/");
        } else {
            deleteCategory(catName);
            navigate("/");
        }

    }

    return (
        <>
            <Button sx={buttonStyle} onClick={handleClickOpen}>
                {sectionName}
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