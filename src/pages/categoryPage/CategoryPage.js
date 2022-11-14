import React, {useContext} from "react";
import {Link, useParams} from "react-router-dom";

import {FAB} from "../../components/FAB/FAB";
import {Details} from "../../components/Details/Details";
import {GlobalContext} from "../../context/GlobalStates";

export function CategoryPage() {

    let { id } = useParams();
    const {categoryList} = useContext(GlobalContext)
    console.log(categoryList)
    return (
        <>
            <Details catName={id}/>
            {/*TODO: fix the routing*/}
            {/*<ul>*/}
            {/*    {categoryList.map(cat => <li><Link to={cat}/></li>)}*/}
            {/*</ul>*/}
            <FAB />
        </>
    )
}