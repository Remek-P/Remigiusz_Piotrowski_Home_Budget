import React from "react";

export function DetailsDescription({ transaction }) {
    return (
        <div className={"transactionList-accordionSummary__header-expandedDetails"}><b>Description:</b> {transaction.notes}</div>
    )
}