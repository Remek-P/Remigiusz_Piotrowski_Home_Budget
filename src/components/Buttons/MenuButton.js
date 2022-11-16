import * as React from 'react';
import { styled } from '@mui/material/styles';
import Button from '@mui/material/Button';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import { Delete, Edit, Sort } from "@mui/icons-material";
import VerticalAlignBottomIcon from '@mui/icons-material/VerticalAlignBottom';
import VerticalAlignTopIcon from '@mui/icons-material/VerticalAlignTop';
import { DeleteCategory } from "./DeleteCategory";
import { EditCategoryName } from "../Edit/EditCategoryName";


//Overriding default styling for StyledMenu - MUI component
const StyledMenu = styled((props) => (
    <Menu
        elevation={0}
        anchorOrigin={{
            vertical: 'bottom',
            horizontal: 'right',
        }}
        transformOrigin={{
            vertical: 'top',
            horizontal: 'right',
        }}
        {...props}
    />
))(({ theme }) => ({
    '& .MuiPaper-root': {
        marginTop: theme.spacing(1),
        minWidth: 180,
        boxShadow:
            'rgb(255, 255, 255) 0px 0px 0px 0px, rgba(0, 0, 0, 0.05) 0px 0px 0px 1px, rgba(0, 0, 0, 0.1) 0px 10px 15px -3px, rgba(0, 0, 0, 0.05) 0px 4px 6px -2px',
        '& .MuiMenu-list': {
            padding: '4px 0',
        },
        '& .MuiMenuItem-root': {
            '& .MuiSvgIcon-root': {
                marginRight: theme.spacing(1.5),
            },
        },
    },
}));

//Overriding default styling for Menu Button - MUI component
const buttonStyle = {
    padding: 0,
    fontSize: "1.125rem",
    lineHeight: "1.375rem",
    fontWeight: 800,
    color: "#000",
    backgroundColor: "transparent",
    ':hover': {
        color: "#ECECEC",
        backgroundColor: "transparent",
    }
}

export default function MenuButton({ catName,sortByDateDescending, setSortByDateDescending }) {

    //Default configuration for MUI component (open/close menu)
    const [anchorEl, setAnchorEl] = React.useState(null);
    const open = Boolean(anchorEl);

    //Picking the category name, if no category name is passed from parent component (undefined), display all expenses
    const sectionName = catName !== undefined ? catName : "All expenses";

    //Button MUI on click tracking
    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    };
    //Open/close the menu (button)
    const handleClose = () => {
        setAnchorEl(null);
    };

    const arrowDirection = sortByDateDescending === true
        ? <VerticalAlignTopIcon />
        : <VerticalAlignBottomIcon />

    //Changing the setSortByDateDescending between true and false and sending it to TransactionList via Details (parent)
    const sortTransactions = () => {
        setSortByDateDescending(prevState => !prevState);
        handleClose()
    }

    console.log("MenuButton:", sortByDateDescending)

    //Choosing if Edit name button should be enabled
    const enableEditName = sectionName === "All expenses"

    return (
        <div>
            {/*Menu Button displaying category name*/}
            <Button
                id="demo-customized-button"
                sx={buttonStyle}
                aria-controls={open ? 'demo-customized-menu' : undefined}
                aria-haspopup="true"
                aria-expanded={open ? 'true' : undefined}
                variant="contained"
                disableElevation
                onClick={handleClick}
            >
                {sectionName}
            </Button>
            {/*Menu component appearing after click on category name*/}
            <StyledMenu
                id="demo-customized-menu"
                MenuListProps={{
                    'aria-labelledby': 'demo-customized-button',
                }}
                anchorEl={anchorEl}
                open={open}
                onClose={handleClose}
            >
                {/*Sort button*/}
                {/*TODO: implement sorting*/}
                <MenuItem onClick={sortTransactions} disableRipple>
                    <Sort />
                    Sort {arrowDirection}
                </MenuItem>{
                /*Edit button*/}
                {/*TODO: implement editing*/}
                <MenuItem disabled={enableEditName} disableRipple>
                    <Edit />
                    <EditCategoryName setAnchorEl={setAnchorEl} catName={catName}/>
                </MenuItem>
                {/*Delete category button with delete component */}
                <MenuItem disableRipple>
                    <Delete sx={{color: 'error.main'}} />
                    <DeleteCategory setAnchorEl={setAnchorEl} catName={catName}/>
                </MenuItem>
            </StyledMenu>
        </div>
    );
}