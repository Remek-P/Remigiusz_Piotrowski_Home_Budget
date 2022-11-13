import React, {useContext, useEffect, useState} from "react";
import {GlobalContext} from "../../context/GlobalStates";

//TODO: styling

export function NewExpense() {

    const { addTransaction, transactions } = useContext(GlobalContext);

    //Sort transactions array by id number and return descending
    const sortedTransactions = ([...transactions].sort((a, b) => b.id - a.id)) || 0;
    //Attributing new transaction id, by setting id's initial state - if the array is empty set as 1, if not by adding 1 to the first (greatest) id taken from (const) sortedTransactions
    const currentID = sortedTransactions[0] !== undefined ? sortedTransactions[0].id + 1 : 1;

    const [ id,         setID       ] = useState(currentID);
    const [ name,       setName     ] = useState("");
    const [ month,      setMonth    ] = useState("")
    const [ date,       setDate     ] = useState("");
    const [ value,      setValue    ] = useState("");
    //TODO: change currency to default PLN and add selection
    const [ currency,   setCurrency ] = useState("zł");
    //TODO: add selection
    const [ category,   setCategory ] = useState("");
    const [ notes,      setNotes    ] = useState("");

    //Setting the month state as year and month string to use it for filtering.
    useEffect(() => {
        setMonth(date.replace(/(\d{4})[\/. -]?(\d{2})[\/. -]?(\d{1,2})/, "$1$2"))
    },[date])

    const onSubmit = event => {
        event.preventDefault();
        setID((prevState) => prevState + 1);

        const newExpense = {
            id,
            name,
            date,
            month,
            value: +value,
            currency,
            category,
            notes,
        }
        addTransaction(newExpense)
    }

    // function valueOnChange() {
    //     const regExNumerical = /0-9/;
    //     const isPriceNumerical = regExNumerical.test(value);
    //     return isPriceNumerical ? event => setValue(event.target.value) : console.log("Only numerical values are allowed");
    // }

    return (
        <>
            <h2>New Expense</h2>
            <form onSubmit={onSubmit}>
                <div>
                    <label htmlFor="text">What did you pay for?</label>
                    <input required={false} type="text" value={name} onChange={event => setName(event.target.value)} autoCorrect={"on"} placeholder={"Type the name"}/>
                </div>
                <div>
                    <label htmlFor="date">When was the payment made?</label>
                    <input type="date" value={date} onChange={event => setDate(event.target.value)} placeholder={"Type the date"}/>
                </div>
                <div>
                    <label htmlFor="amount">What was the value?</label>
                    <input required={false} type="amount" value={value} onChange={event => setValue(event.target.value)} placeholder={"Type amount"}/>
                </div>
                <div>
                    <label htmlFor="text">What was the currency?</label>
                    <input required={false} type="text" value={currency} onChange={event => setCurrency(event.target.value)} placeholder={"Choose the currency"}/>
                </div>
                <div>
                    {/*TODO: making a component for category picking*/}
                    <label htmlFor="text">What is the category of the expense?</label>
                    <input required={false} type="text" value={category} onChange={event => setCategory(event.target.value)} placeholder={"Choose a category"}/>
                </div>
                <div>
                    <label htmlFor="textarea">Add note?</label>
                    <input type="textarea" value={notes} onChange={event => setNotes(event.target.value)} autoCorrect={"on"} placeholder={"Type a note"}/>
                </div>
                <button>Add Expense</button>
            </form>
        </>
    )
}

// TODO: code today date so the month state could use it;