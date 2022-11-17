import React, {useContext, useState} from "react";
import {GlobalContext} from "../../context/GlobalStates";

import {Snackbar} from "@mui/material";

//TODO: styling

export function NewExpense() {

    const { addTransaction, transactions } = useContext(GlobalContext);

    //Sort transactions array by id number and return descending or 0
    const sortedTransactions = ([...transactions].sort((a, b) => b.id - a.id)) || 0;
    //Attributing new transaction id, by setting id's initial state - if the array is empty set as 1, if not by adding 1 to the first (greatest) id taken from (const) sortedTransactions
    const currentID = sortedTransactions[0] !== undefined ? sortedTransactions[0].id + 1 : 1;

    const [ id,         setID       ] = useState(currentID);
    const [ name,       setName     ] = useState("");
    const [ date,       setDate     ] = useState("");
    const [ value,      setValue    ] = useState("");
    //TODO: change currency to default PLN and add selection
    const [ currency,   setCurrency ] = useState("zł");
    //TODO: add selection
    const [ category,   setCategory ] = useState("");
    const [ notes,      setNotes    ] = useState("");

    //Snackbar states
    const [open, setOpen] = React.useState(false);

    //Deriving month (y+m) variable from date state for sorting
    let month = date.replace(/(\d{4})[\/. -]?(\d{2})[\/. -]?(\d{1,2})/, "$1$2");
    //Deriving day (y+m+d) variable from date state for sorting
    let day = date.replace(/(\d{4})[\/. -]?(\d{2})[\/. -]?(\d{1,2})/, "$1$2$3");

    //handle handleSnackbar opening
    const handleSnackbarOpening = () => {
        setOpen(true);
    };

    //handle handleSnackbar closing
    const handleSnackbarClosing = (event, reason) => {
        if (reason === 'clickaway') {
            return;
        }
        setOpen(false);
    };

    const onSubmit = event => {
        event.preventDefault();
        setID((prevState) => prevState + 1);

        const newExpense = {
            id,
            name,
            date,
            month,
            day,
            value: +value,
            currency,
            category,
            notes,
        }
        addTransaction(newExpense);
        handleSnackbarOpening();
        console.log(newExpense)
    }

    // function valueOnChange() {
    //     const regExNumerical = /0-9/;
    //     const isPriceNumerical = regExNumerical.test(value);
    //     return isPriceNumerical ? event => setValue(event.target.value) : console.log("Only numerical values are allowed");
    // }

    return (
        <>
            <h2 className={"expense__header"}>New Expense</h2>
            <form className={"expense__form"} onSubmit={onSubmit}>
                <div className={"expense__form-container"}>
                    <label htmlFor="name">What did you pay for?</label>
                    <input required={true}
                           type="text" value={name}
                           onChange={event => setName(event.target.value)}
                           autoCorrect={"on"}
                           placeholder={"Type the name"}
                           name="name"
                           id="name"
                    />
                </div>
                <div className={"expense__form-container"}>
                    <label htmlFor="date">When was the payment made?</label>
                    <input required={true}
                           type="date"
                           value={date}
                           onChange={event => setDate(event.target.value)}
                           placeholder={"Type the date"}
                           name="date"
                           id="date"
                    />
                </div>
                <div className={"expense__form-container"}>
                    <label htmlFor="value">What was the value?</label>
                    <input required={true}
                           type="number" value={value}
                           onChange={event => setValue(event.target.value)}
                           placeholder={"Type amount"}
                           name="value"
                           id="value"
                    />
                </div>
                <div className={"expense__form-container"}>
                    <label htmlFor="currency">What was the currency?</label>
                    <input required={true}
                           type="text" value={currency}
                           onChange={event => setCurrency(event.target.value)}
                           placeholder={"Choose the currency"}
                           name="currency"
                           id="currency"
                           disabled={true}
                    />
                </div>
                <div className={"expense__form-container"}>
                    {/*TODO: category picking with add category*/}
                    <label htmlFor="category">What is the category?</label>
                    <input required={true}
                           type="text"
                           value={category}
                           onChange={event => setCategory(event.target.value)}
                           placeholder={"Choose a category"}
                           name="category"
                           id="category"
                    />
                </div>
                <div className={"expense__form-container"}>
                    <label htmlFor="notes">Add note?</label>
                    <textarea name="notes"
                              id="notes"
                              maxLength={80}
                              value={notes}
                              onChange={event => setNotes(event.target.value)}
                              autoCorrect={"on"}
                              placeholder={"Type a note (80 characters)"}
                    />
                </div>
                <button>Add Expense</button>
                <Snackbar
                    open={open}
                    autoHideDuration={2000}
                    message="Successfully added transaction"
                    // action={action}
                    onClose={handleSnackbarClosing}
                />
            </form>
        </>
    )
}
