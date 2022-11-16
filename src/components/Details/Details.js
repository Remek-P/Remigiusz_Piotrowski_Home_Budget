import React, {useState} from "react";

import {DetailsSummupCurrentMonth} from "../Details-Components/Summup/DetailsSummupCurrentMonth";
import {DetailsSummupPreviousMonth} from "../Details-Components/Summup/DetailsSummupPreviousMonth";
import {DetailsSummupM2MPercentage} from "../Details-Components/Summup/DetailsSummupM2MPercentage";
import {TransactionsList} from "../Details-Components/TransactionsList/TransactionsList";
import MenuButton from "../Buttons/MenuButton";

export function Details({ catName }) {

    //TODO:Universal update of sortByDateDescending
    let [ sortByDateDescending, setSortByDateDescending ] = useState(true);

    return (
            <section className={"overview-details"}>
                <h3 className={"overview-details__header"}>
                   {/* Displays cat name and serves as a menu buttony*/}
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