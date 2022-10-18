import React from "react";
import { Overview } from "../Overview/Overview";
import { Cat } from "../Category/Category";
import {FAB} from "../FAB/FAB";


export function App() {
    return (
        <div className={"main"}>
            <h1 className={"main__header"}>Your Budget</h1>
            <Overview />
            <Cat />
            <Cat />
            <Cat />
            <Cat />
            <Cat />
            <Cat />
            <FAB />
        </div>
    );
}
