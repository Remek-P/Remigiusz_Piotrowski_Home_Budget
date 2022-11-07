import React, {useContext} from "react";

import {GlobalContext} from "../../../context/GlobalStates";

export function CategoryDetails() {

    const { transactions } = useContext(GlobalContext)

    return (
            <section className={"overview-details"}>
                <h3 className={"overview-details__header"}>All expenses</h3>
                <ul className={"overview-details-summup"}>
                    <li>
                        Current Month
                    </li>
                    <li>
                        Previous Month
                    </li>
                    <li>
                        M2MPercentage
                    </li>
                </ul>
                <ul>
                </ul>
            </section>
    )
}