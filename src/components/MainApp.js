import {Component, useState} from 'react'
import PolicyList from './DatabaseService/PolicyList'
import BrowserRoutes from './HeaderComponents/BrowserRoutes'
import { useSelector } from 'react-redux'
import RegisterPage from './UserAuth/RegisterPage'
import BasicTabs from './BasicTabs'
import AppInfo from './AppInfo'
function MainApp(props){

    

    const user = useSelector(state=>state.AuthUser.user)

    return(
    <div>
        
        <BrowserRoutes/>
        

    </div>

    )

}

export default MainApp;