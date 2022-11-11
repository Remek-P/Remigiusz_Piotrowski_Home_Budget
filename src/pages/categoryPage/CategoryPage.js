import React from "react";
import {useParams} from "react-router-dom";

import {FAB} from "../../components/FAB/FAB";
import {OverviewDetails} from "../../components/Overview/OverviewDetails/OverviewDetails";

export function CategoryPage() {

    let { id } = useParams()

    return (
        <>
            <OverviewDetails catName={id} />
            <FAB />
        </>
    )
}