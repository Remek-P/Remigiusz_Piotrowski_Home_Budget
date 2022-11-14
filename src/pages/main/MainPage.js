import React from "react";
import { OverviewMain } from "../../components/Overview/OverviewMain/OverviewMain";
import {CategoryMain} from "../../components/Category/CatMain/CategoryMain";
import { FAB } from "../../components/FAB/FAB";

export function MainPage() {
    return (
        <>
            <OverviewMain />
            <CategoryMain />
            <FAB />
        </>
    )
}