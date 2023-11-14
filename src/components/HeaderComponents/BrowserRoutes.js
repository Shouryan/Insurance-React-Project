
import React from 'react';
import { BrowserRouter, Route, Routes, useNavigate } from 'react-router-dom';
import LoginPage from '../UserAuth/LoginPage';
import RegisterPage from '../UserAuth/RegisterPage'
import HeaderComp from './HeaderComp';
import PageNotFound from '../UserAuth/PageNotFound';
import MainApp from '../MainApp';
import BasicTabs from '../BasicTabs';


const routesDisplay = (
    <BrowserRouter>
        <div>
            <HeaderComp />
            <Routes>
                <Route exact path="/" element={<BasicTabs />}  />
                <Route  path="/login" element={<LoginPage />} />
                <Route  path="/logout" element={<PageNotFound />} />
                <Route  path="/register" element={<RegisterPage />} />
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