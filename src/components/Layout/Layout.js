import React from "react";
import {MainPage} from "../../pages/main/MainPage";
import {Outlet, NavLink} from 'react-router-dom';

export function Layout() {
    return (
        <>
                <div className={"main"}>
                    <NavLink to={"/"}>
                    <h1 className={"main__header"}>Your Budget</h1>
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