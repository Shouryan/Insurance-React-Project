
import React from 'react';
import { BrowserRouter, Route, Routes, useNavigate } from 'react-router-dom';
import LoginPage from '../UserAuth/LoginPage';
import RegisterPage from '../UserAuth/RegisterPage'
import HeaderComp from './HeaderComp';
import PageNotFound from '../UserAuth/PageNotFound';
import BasicTabs from '../BasicTabs';
import PurchasePage from '../DatabaseService/PurchasePage';
import PolicyOwnedList from '../DatabaseService/PolicyOwnedList';
import AppInfo from '../AppInfo';


const routesDisplay = (
    <BrowserRouter>
        <div>
            <HeaderComp />
            <Routes>
                <Route  exact path="/" element={<AppInfo />}  />
                <Route  path="/home" element={<BasicTabs />}  />
                <Route  path="/login" element={<LoginPage />} />
                <Route  path="/register" element={<RegisterPage />} />
                {/* <Route  path="/purchase" element={<PurchasePage />} />
                <Route  path="/policyOwned" element={<PolicyOwnedList />} /> */}

                <Route  path='/*' element={<PageNotFound />} />
            </Routes>
        </div>
    </BrowserRouter>
)

function BrowserRoutes(props) {
    return (
        <div>
            {routesDisplay}
        </div>
    );
}

export default BrowserRoutes;