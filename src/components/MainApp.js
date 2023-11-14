import {Component, useState} from 'react'
import PolicyList from './DatabaseService/PolicyList'
import BrowserRoutes from './HeaderComponents/BrowserRoutes'
import { useSelector } from 'react-redux'
import RegisterPage from './UserAuth/RegisterPage'
import BasicTabs from './BasicTabs'
function MainApp(props){

    

    const user = useSelector(state=>state.AuthUser.user)

    return(
    <div>

        <BrowserRoutes/>

    </div>

    )

}

export default MainApp;