import React, {useState} from "react";

import {DetailsSummupCurrentMonth} from "../Details-Components/Summup/DetailsSummupCurrentMonth";
import {DetailsSummupPreviousMonth} from "../Details-Components/Summup/DetailsSummupPreviousMonth";
import {DetailsSummupM2MPercentage} from "../Details-Components/Summup/DetailsSummupM2MPercentage";
import {TransactionsList} from "../Details-Components/TransactionsList/TransactionsList";
import MenuButton from "../Buttons/MenuButton";

//Rendering detailed view (list) of transactions, current and previous month summ-up as well as M2M change
export function Details({ catName }) {

    //Using useState to pass data between components - choose sorting (ascending/descending)
    let [ sortByDateDescending, setSortByDateDescending ] = useState(true);

    return (
            <section className={"overview-details"}>
                <h3 className={"overview-details__header"}>
                   {/* Displays category name/all expanses and serves as a menu button; passing state and category name*/}
                    <MenuButton
                        setSortByDateDescending={setSortByDateDescending}
                        sortByDateDescending={sortByDateDescending}
                        catName={catName}
                    />
                </h3>
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
                    <TransactionsList
                        sortByDateDescending={sortByDateDescending}
                        catName={catName}
                    />
                </ul>
            </section>
    )
}