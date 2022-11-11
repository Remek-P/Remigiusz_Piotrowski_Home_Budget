import React from "react";
import {BrowserRouter as Router, Routes, Route, Navigate, useParams} from 'react-router-dom';
import { MainPage } from "../../pages/main/MainPage";
import { Layout } from '../Layout/Layout';
import { NewExpensePage } from "../../pages/newExpensePage/NewExpensePage";

import { GlobalProvider } from "../../context/GlobalStates";
import { OverviewPage } from "../../pages/overview/OverviewPage";
import { MissingPage } from "../../pages/missingPage/MissingPage";
import {CategoryPage} from "../../pages/categoryPage/CategoryPage";

export function App() {

    return (
        <GlobalProvider> {/*Added the provider as a separate element no to mess the layout*/}
            <Router>
                <Routes>
                    <Route exact path="/" element={<Layout />}>
                        <Route exact path="/" element={<MainPage />}/>
                        <Route path="/Overview" element={<OverviewPage />} />
                        <Route path="/Cat">
                            <Route path="/Cat/:id" element={<CategoryPage />} />
                            <Route path="/Cat/*" element={<Navigate replace to={"/Cat"}/>} />
                        </Route>
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
{/*TODO: NewExpense component register values for GlobalState*/}
{/*TODO: clean the APP from rubbish*/}
{/*TODO: move the scss file to new location and rename*/}
{/*TODO: delay routing to show animations*/}
{/*TODO: phantom link on the opposite side of FAB*/}
