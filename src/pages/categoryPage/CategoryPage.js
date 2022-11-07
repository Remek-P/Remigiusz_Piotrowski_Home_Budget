import React from "react";
import {useParams} from "react-router-dom";

import {FAB} from "../../components/FAB/FAB";
import {CategoryDetails} from "../../components/Category/CategoryDetails/CategoryDetails";

export function CategoryPage(catName) {

    // let {catName} = useParams()

    return (
        <>
            <CategoryDetails />
            <FAB />
        </>
    )
}