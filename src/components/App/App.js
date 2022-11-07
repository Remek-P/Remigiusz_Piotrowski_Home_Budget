import React from "react";
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import { MainPage } from "../../pages/main/MainPage";
import { Layout } from '../Layout/Layout';
import { Cat } from "../Category/CatMain/CategoryMain";
import { NewExpensePage } from "../../pages/newExpensePage/NewExpensePage";

import { GlobalProvider } from "../../context/GlobalStates";
import { OverviewPage } from "../../pages/overview/OverviewPage";
import { MissingPage } from "../../pages/missingPage/MissingPage";
import {CategoryPage} from "../../pages/categoryPage/CategoryPage";

//TODO: check if declaring global variable like that is ok
window.currentMonth1 = (new Date().getMonth() + 1).toString(10);

export function App() {

    return (
        <GlobalProvider> {/*Added the provider as a separate element no to mess the layout*/}
            <Router>
                <Routes>
                    <Route exact path="/" element={<Layout/>}>
                        <Route exact path="/" element={<MainPage/>}/>
                        <Route path="/Overview" element={<OverviewPage/>}/>
                        <Route path="/Cat/:catName" element={<CategoryPage />}/>
                        <Route path="/NewExpense" element={<NewExpensePage/>}/>
                        <Route path="/*" element={<MissingPage />}/>
                    </Route>
                </Routes>
            </Router>
        </GlobalProvider>
    );
}
{/*TODO: create component for category creation and listing*/}
{/*TODO: change to automatically generated link for Cats*/}
{/*TODO: add NewExpense component to FAB*/}
{/*TODO: clean the APP from rubbish*/}
{/*TODO: finish 404 page*/}
{/*TODO: move the scss file to new location and rename*/}
{/*TODO: delay routing to show animations*/}
{/*TODO: phantom link on the opposite side of FAB*/}
