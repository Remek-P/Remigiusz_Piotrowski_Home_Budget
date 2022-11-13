import React from "react";
import {DetailsSummupCurrentMonth} from "../../Details-Components/Summup/DetailsSummupCurrentMonth";
import {DetailsSummupPreviousMonth} from "../../Details-Components/Summup/DetailsSummupPreviousMonth";
import {DetailsSummupM2MPercentage} from "../../Details-Components/Summup/DetailsSummupM2MPercentage";
import {TransactionsList} from "../../Details-Components/TransactionsList/TransactionsList";

export function OverviewDetails({catName}) {

    console.log(catName)

    const sectionName = catName !== undefined ? catName : "All expenses"

    return (
            <section className={"overview-details"}>
                <h3 className={"overview-details__header"}>{sectionName}</h3>
                <ul className={"overview-details-summup"}>
                    <li>
                        <DetailsSummupCurrentMonth catName={catName} />
                    </li>
                    <li>
                        <DetailsSummupPreviousMonth catName={catName} />
                    </li>
                    <li>
                        <DetailsSummupM2MPercentage catName={catName} />
                    </li>
                </ul>
                <ul>
                    <TransactionsList catName={catName} />
                </ul>
            </section>
    )
}