import React from "react";
import {Outlet, NavLink} from 'react-router-dom';

export function Layout() {
    return (
        <>
                <div className={"layout"}>
                    <NavLink to={"/"}>
                    <h1 className={"layout__header"}>Your Budget</h1>
                    </NavLink>
                    <main>
                        <Outlet/>
                    </main>
                </div>
        </>
    )
}

//Outlet added:
// 1. So the h1 could present user, when the feature will be implemented
// 2. Home Button