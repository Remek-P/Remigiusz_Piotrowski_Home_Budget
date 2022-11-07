import React from "react";
import { OverviewMain } from "../../components/Overview/OverviewMain/OverviewMain";
import {Cat} from "../../components/Category/CatMain/CategoryMain";
import { FAB } from "../../components/FAB/FAB";

export function MainPage() {
    return (
        <>
            <OverviewMain />
            <Cat />
            <FAB />
        </>
    )
}