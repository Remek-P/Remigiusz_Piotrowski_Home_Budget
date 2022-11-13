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

export default function AlertDialogSlide({ transaction }) {

    const [open, setOpen] = React.useState(false);
    const { deleteTransaction } = useContext(GlobalContext)

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
            <Button sx={{color: "#000", borderColor: "#000"}} variant="outlined" onClick={handleClickOpen}>
                <Delete/>
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
                    <Button onClick={handleClose}>Cancel</Button>
                    <Button onClick={handleDelete}>Yes</Button>
                </DialogActions>
            </Dialog>
        </div>
    );
}