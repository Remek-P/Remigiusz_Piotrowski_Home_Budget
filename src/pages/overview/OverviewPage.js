import React, {useContext} from "react";
import {Details} from "../../components/Details/Details";
import {FAB} from "../../components/FAB/FAB";
import {GlobalContext} from "../../context/GlobalStates";

export function OverviewPage() {

    const {transactions} = useContext(GlobalContext)
    console.log(transactions)
    return (
        <>
            <Details />
            <FAB />
        </>
    )
}