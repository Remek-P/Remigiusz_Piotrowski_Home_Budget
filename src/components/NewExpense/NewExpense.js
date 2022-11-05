import React, { useState } from "react";

//TODO: styling

export function NewExpense() {

    const [ name,       setName     ] = useState("");
    const [ date,       setDate     ] = useState(currentDate);
    const [ value,      setValue    ] = useState("");
    //TODO: change currency to default PLN and add selection
    const [ currency,   setCurrency ] = useState("zł");
    //TODO: add selection
    const [ category,   setCategory ] = useState(undefined);
    const [ notes,      setNotes    ] = useState("");

    let currentDate = new Date().toLocaleDateString("pl-PL");


    const onSubmit = e => {
        e.preventDefault();
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
                    <input required={true} type="text" value={name} onChange={event => setName(event.target.value)} autoCorrect={"on"} placeholder={"Type the name"}/>
                </div>
                <div>
                    <label htmlFor="date">When was the payment made?</label>
                    <input type="date" value={date} onChange={event => setDate(event.target.value)} placeholder={"Type the date"}/>
                </div>
                <div>
                    <label htmlFor="amount">What was the value?</label>
                    <input required={true} type="amount" value={value} onChange={event => setValue(event.target.value)} placeholder={"Type the amount"}/>
                </div>
                <div>
                    <label htmlFor="text">What was the currency?</label>
                    <input required={true} type="text" value={currency} onChange={event => setCurrency(event.target.value)} placeholder={"Choose the currency"}/>
                </div>
                <div>
                    {/*TODO: making a component for category picking*/}
                    <label htmlFor="text">What is the category of the expense?</label>
                    <input required={true} type="text" value={category} onChange={event => setCategory(event.target.value)} placeholder={"Choose a category"}/>
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