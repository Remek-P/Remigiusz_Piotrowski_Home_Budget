import React from "react";
import { Overview } from "../Category/Overview";
import { Cat } from "../Category/Category";


export function App() {
    return (
        <div className={"main"}>
            <h1 className={"main__header"}>Your Budget</h1>
            <Overview />
            <Cat />
            <Cat />
        </div>
    );
}
