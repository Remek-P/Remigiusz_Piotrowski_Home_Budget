import * as React from 'react';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogTitle from '@mui/material/DialogTitle';
import Slide from '@mui/material/Slide';
import {Delete} from "@mui/icons-material";
import {useContext} from "react";
import {GlobalContext} from "../../context/GlobalStates";

const Transition = React.forwardRef(function Transition(props, ref) {
    return <Slide direction="up" ref={ref} {...props} />;
});

export default function AlertDialogSlideDelete({ transaction }) {

    const [open, setOpen] = React.useState(false);
    const { deleteTransaction } = useContext(GlobalContext)

    const deleteButtonStyle = {px: "3rem", color: "#000", borderColor: "#000", borderRadius: "35px",
        ':hover': {
            borderColor: '#f44336',
            backgroundColor: "#f44336",
            color: '#fff',
        }
    }

    const handleClickOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };

    const handleDelete = () => {
        deleteTransaction(transaction.id)
    }

    return (
        <div>
            <Button sx={deleteButtonStyle} variant="outlined" onClick={handleClickOpen}>
                Delete
            </Button>
            <Dialog
                open={open}
                TransitionComponent={Transition}
                keepMounted
                onClose={handleClose}
                aria-describedby="alert-dialog-slide-description"
            >
                <DialogTitle>{"Do you want to delete the expense?"}</DialogTitle>
                <DialogActions>
                    <Button sx={{ color: 'text.secondary' }} onClick={handleClose}>Cancel</Button>
                    <Button sx={{ color: 'error.main' }} onClick={handleDelete}>Yes</Button>
                </DialogActions>
            </Dialog>
        </div>
    );
}