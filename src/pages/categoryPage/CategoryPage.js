import React from "react";
import {useParams} from "react-router-dom";

import {FAB} from "../../components/FAB/FAB";
import {Details} from "../../components/Details/Details";

export function CategoryPage() {

    let { id } = useParams();
    return (
        <>
            <Details catName={id}/>
            {/*TODO: fix the routing*/}
            <FAB />
        </>
    )
}