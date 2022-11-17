import * as React from 'react';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogTitle from '@mui/material/DialogTitle';
import Slide from '@mui/material/Slide';
import {useContext} from "react";
import {GlobalContext} from "../../context/GlobalStates";

//Default settings gor MUI component
const Transition = React.forwardRef(function Transition(props, ref) {
    return <Slide direction="up" ref={ref} {...props} />;
});


//Confirmation component for deleting transaction and placing delete transaction button
export default function AlertDialogSlideDelete({ transaction }) {

    //Default configuration for MUI component
    const [open, setOpen] = React.useState(false);
    //Importing function (delete transaction) from Global Context (and AppReducer)
    const { deleteTransaction } = useContext(GlobalContext);

    //Overriding default styling for Button (delete)  - MUI component
    const deleteButtonStyle = {
        fontSize: "0.875rem",
        lineHeight: "1.0625rem",
        px: "3.5rem",
        color: "#000",
        borderColor: "#000",
        borderRadius: "35px",
        ':hover': {
            borderColor: '#f44336',
            backgroundColor: "#f44336",
            color: '#fff',
        }
    }

    //Button MUI on click handlers
    const handleClickOpen = () => {
        setOpen(true);
    };
    const handleClose = () => {
        setOpen(false);
    };

    //providing deleteTransaction with payload
    const handleDelete = () => {
        deleteTransaction(transaction.id)
    }

    return (
        <>
            {/*Button displaying deletion function*/}
            <Button sx={deleteButtonStyle} variant="outlined" onClick={handleClickOpen}>
                Delete
            </Button>
            {/*Pop-up settings (default for MUI)*/}
            <Dialog
                open={open}
                TransitionComponent={Transition}
                keepMounted
                onClose={handleClose}
                aria-describedby="alert-dialog-slide-description"
            >
                {/*Pop-up title*/}
                <DialogTitle>{"Do you want to delete the expense?"}</DialogTitle>
                {/*Pop-up delete confirmation or rejection*/}
                <DialogActions>
                    <Button sx={{ color: 'text.secondary' }} onClick={handleClose}>Cancel</Button>
                    <Button sx={{ color: 'error.main' }} onClick={handleDelete}>Yes</Button>
                </DialogActions>
            </Dialog>
        </>
    );
}