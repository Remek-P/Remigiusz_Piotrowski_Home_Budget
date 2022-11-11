import React, {useContext} from "react";
import {GlobalContext} from "../../../context/GlobalStates";

export function CategoryDetails({catName}) {

    const { transactions } = useContext(GlobalContext)

    return (
            <section className={"overview-details"}>
                <h3 className={"overview-details__header"}>{catName}</h3>
                <ul className={"overview-details-summup"}>
                    <li>
                        Current Month
                    </li>
                    <li>
                        Previous Month
                    </li>
                    <li>
                        {catName}
                    </li>
                </ul>
                <ul>
                </ul>
            </section>
    )
}