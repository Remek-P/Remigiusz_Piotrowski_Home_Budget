import React from "react";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { MainPage } from "../../pages/main/MainPage";
import { Layout } from '../Layout/Layout';
import { NewExpensePage } from "../../pages/newExpensePage/NewExpensePage";

import { GlobalProvider } from "../../context/GlobalStates";
import { OverviewPage } from "../../pages/overview/OverviewPage";
import { MissingPage } from "../../pages/missingPage/MissingPage";
import { CategoryPage } from "../../pages/categoryPage/CategoryPage";
import { EditExpensePage } from "../../pages/editExpensePage/EditExpensePage";

export function App() {

    return (
        <GlobalProvider> {/*Added the provider as a separate element no to mess the layout*/}
            <Router>
                <Routes>
                    <Route exact path="/" element={<Layout />}>
                        <Route exact path="/" element={<MainPage />}/>
                        <Route path="/Overview" element={<OverviewPage />} />
                        <Route path="/CategoryMain">
                            <Route path=":id" element={<CategoryPage />} />
                            {/*<Route path="/CategoryMain/*" element={<Navigate replace to={"/CategoryMain"}/>} />*/}
                        </Route>
                        <Route path="/NewExpense" element={<NewExpensePage/>}/>
                        <Route path="/EditExpense" element={<EditExpensePage/>}/>
                        <Route path="/*" element={<MissingPage />}/>
                    </Route>
                </Routes>
            </Router>
        </GlobalProvider>
    );
}
{/*TODO: clean the APP from rubbish*/}
{/*TODO: move the scss file to new location and rename*/}
{/*TODO: phantom link on the opposite side of FAB*/}
