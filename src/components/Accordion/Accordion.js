import * as React from 'react';
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import {DetailsDate} from "../Details-Components/TransactionsList/TransactionsDetails/DetailsDate";
import {DetailsName} from "../Details-Components/TransactionsList/TransactionsDetails/DetailsName";
import {DetailsValue} from "../Details-Components/TransactionsList/TransactionsDetails/DetailsValue";
import {DetailsCategory} from "../Details-Components/TransactionsList/AccordionExpenseDetails/DetailsCategory";
import {DetailsDescription} from "../Details-Components/TransactionsList/AccordionExpenseDetails/DetailsDescription";
import {styled} from "@mui/material/styles";
import MuiAccordion from "@mui/material/Accordion";
import AlertDialogSlideDelete from "../Buttons/AlertDialogSlide(Delete)";
import {EditTransactionButton} from "../Buttons/EditTransactionButton";

export default function SimpleAccordion({ transaction }) {

    const Accordion = styled((props) => (
        <MuiAccordion disableGutters elevation={0} square {...props} />
    ))(({ theme }) => ({
        borderTop: `1px solid ${theme.palette.divider}`,
        '&:not(:last-child)': {
            borderBottom: 0,
        },
        '&:before': {
            display: 'none',
        },
    }));

    return (
        <div>
            <Accordion>
                <AccordionSummary>
                    <header className={"transactionList-accordionSummary__header"}>
                        <DetailsDate transaction={transaction}/>
                        <article className={"overview-details-expense__container"}>
                            <DetailsName transaction={transaction}/>
                            <DetailsValue transaction={transaction}/>
                        </article>
                    </header>
                </AccordionSummary>
                <AccordionDetails>
                    <section>
                        {/*Category of transaction*/}
                        <DetailsCategory transaction={transaction}/>
                        {/*Description of transaction*/}
                        <DetailsDescription transaction={transaction}/>
                        <div className={"accordion-details-buttons"}>
                        {/*Edit Button*/}
                        <EditTransactionButton transaction={transaction}/>
                        {/*Delete Button*/}
                        <AlertDialogSlideDelete transaction={transaction}/>
                        </div>
                    </section>
                </AccordionDetails>
            </Accordion>
        </div>
    );
}

//TODO: refactor the code (SCSS) to match new structure