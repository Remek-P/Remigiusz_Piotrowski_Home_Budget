import * as React from 'react';
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import {DetailsDate} from "../Details-Components/TransactionsList/TransactionsDetails/DetailsDate";
import {DetailsName} from "../Details-Components/TransactionsList/TransactionsDetails/DetailsName";
import {DetailsValue} from "../Details-Components/TransactionsList/TransactionsDetails/DetailsValue";
import {DetailsCategory} from "../Details-Components/TransactionsList/AccordionExpenseDetails/DetailsCategory";
import {DetailsDescription} from "../Details-Components/TransactionsList/AccordionExpenseDetails/DetailsDescription";
import {styled} from "@mui/material/styles";
import MuiAccordion from "@mui/material/Accordion";

export default function SimpleAccordion({ transaction} ) {

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
                        <DetailsCategory transaction={transaction}/>
                        <DetailsDescription transaction={transaction}/>
                    </section>
                </AccordionDetails>
            </Accordion>
        </div>
    );
}

//TODO: refactor the code (SCSS) to match new structure