import React, {useContext, useState} from "react";
import {GlobalContext} from "../../context/GlobalStates";
import { useLocation, useNavigate } from "react-router-dom";

//TODO: styling

export function EditExpense() {

    const transaction = useLocation();
    console.log(transaction)

    const navigate = useNavigate();

    const { editTransaction } = useContext(GlobalContext);

    const [ newName,       setNewName     ] = useState((transaction.state.name).toString());
    const [ newDate,       setNewDate     ] = useState(transaction.state.date);
    const [ newValue,      setNewValue    ] = useState(transaction.state.value);
    //TODO: change currency to default PLN and add selection
    const [ newCurrency,   setNewCurrency ] = useState(transaction.state.currency);
    //TODO: add selection
    const [ newCategory,   setNewCategory ] = useState(transaction.state.category);
    const [ newNotes,      setNewNotes    ] = useState(transaction.state.notes);

    //Deriving month (y+m) variable from date state for sorting
    let month = newDate.replace(/(\d{4})[\/. -]?(\d{2})[\/. -]?(\d{1,2})/, "$1$2");
    //Deriving day (y+m+d) variable from date state for sorting
    let day = newDate.replace(/(\d{4})[\/. -]?(\d{2})[\/. -]?(\d{1,2})/, "$1$2$3");

    const onSubmit = event => {
        event.preventDefault();

        const editedExpense = {
            id: transaction.state.id,
            name: newName,
            date: newDate,
            month,
            day,
            value: +newValue,
            currency: newCurrency,
            category: newCategory,
            notes: newNotes,
        }
        editTransaction(editedExpense);
        navigate(`/CategoryMain/${editedExpense.category}`);
    }

    // function valueOnChange() {
    //     const regExNumerical = /0-9/;
    //     const isPriceNumerical = regExNumerical.test(value);
    //     return isPriceNumerical ? event => setValue(event.target.value) : console.log("Only numerical values are allowed");
    // }

    return (
        <>
            <h2 className={"expense__header"}>Edit Expense</h2>
            <form className={"expense__form"} onSubmit={onSubmit}>
                <div className={"expense__form-container"}>
                    <label htmlFor="text">What did you pay for?</label>
                    <input required={false}
                           type="text" value={newName}
                           onChange={event => setNewName(event.target.value)}
                           autoCorrect={"on"}
                           placeholder={"Type the name"}/>
                </div>
                <div className={"expense__form-container"}>
                    <label htmlFor="date">When was the payment made?</label>
                    <input type="date"
                           value={newDate}
                           onChange={event => setNewDate(event.target.value)}
                           placeholder={"Type the date"}/>
                </div>
                <div className={"expense__form-container"}>
                    <label htmlFor="number">What was the value?</label>
                    <input required={false}
                           type="number" value={newValue}
                           onChange={event => setNewValue(event.target.value)}
                           placeholder={"Type amount"}/>
                </div>
                <div className={"expense__form-container"}>
                    <label htmlFor="text">What was the currency?</label>
                    <input required={false}
                           type="text" value={newCurrency}
                           onChange={event => setNewCurrency(event.target.value)}
                           placeholder={"Choose the currency"}/>
                </div>
                <div className={"expense__form-container"}>
                    {/*TODO: making a component for category picking*/}
                    <label htmlFor="text">What is the category of the expense?</label>
                    <input required={false}
                           type="text"
                           value={newCategory}
                           onChange={event => setNewCategory(event.target.value)}
                           placeholder={"Choose a category"}/>
                </div>
                <div className={"expense__form-container"}>
                    <label htmlFor="textarea">Add note?</label>
                    <input type="textarea"
                           value={newNotes}
                           onChange={event => setNewNotes(event.target.value)}
                           autoCorrect={"on"}
                           placeholder={"Type a note"}/>
                </div>
                <button>Edit Expense</button>
            </form>
        </>
    )
}
