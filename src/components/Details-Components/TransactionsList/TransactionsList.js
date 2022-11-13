import React, {useContext} from "react";
import {DetailsDate} from "./TransactionsDetails/DetailsDate";
import {DetailsName} from "./TransactionsDetails/DetailsName";
import {DetailsValue} from "./TransactionsDetails/DetailsValue";
import {GlobalContext} from "../../../context/GlobalStates";

import Accordion from '@mui/material/Accordion';
import SimpleAccordion from "../../Accordion/Accordion";

export function TransactionsList({ catName }) {

    const { transactions } = useContext(GlobalContext);

    //Sorting by month (y+m) all the transactions
    const sortedTransactions = [...transactions].sort((a, b) => b.date - a.date);
    //Filtering transactions that belong to chosen category, passed from parent component
    const filteredTransactions = sortedTransactions.filter(category => category.category === catName );
    //Checking if Category (filtering) or All expenses (without filtering) transactions should be displayed
    const picker = catName !== undefined ? filteredTransactions : sortedTransactions;


    console.log(sortedTransactions)

    return (
        <>
            {picker
                //Mapping of single transaction from all the transactions, to display them one by one
                .map(transaction =>
                    <SimpleAccordion key={transaction.id} transaction={transaction}
                    />
                )
            }
        </>
    )
}