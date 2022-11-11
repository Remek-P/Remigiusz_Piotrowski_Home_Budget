import React from "react";
import {OverviewDetailsSummupCurrentMonth} from "./OverviewDetails-Components/Summup/OverviewDetailsSummupCurrentMonth";
import {OverviewDetailsSummupPreviousMonth} from "./OverviewDetails-Components/Summup/OverviewDetailsSummupPreviousMonth";
import {OverviewDetailsSummupM2MPercentage} from "./OverviewDetails-Components/Summup/OverviewDetailsSummupM2MPercentage";
import {ExpensesList} from "./OverviewDetails-Components/ExpensesList/ExpensesList";

export function OverviewDetails({catName}) {

    console.log(catName)

    const sectionName = catName !== undefined ? catName : "All expenses"

    return (
            <section className={"overview-details"}>
                <h3 className={"overview-details__header"}>{sectionName}</h3>
                <ul className={"overview-details-summup"}>
                    <li>
                        <OverviewDetailsSummupCurrentMonth catName={catName} />
                    </li>
                    <li>
                        <OverviewDetailsSummupPreviousMonth catName={catName} />
                    </li>
                    <li>
                        <OverviewDetailsSummupM2MPercentage catName={catName} />
                    </li>
                </ul>
                <ul>
                    <ExpensesList catName={catName} />
                </ul>
            </section>
    )
}