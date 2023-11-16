// TabComponent.js
import React, { useState } from 'react';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Box from '@mui/material/Box';
import PolicyList  from './DatabaseService/PolicyList';
import PolicyCartList from './DatabaseService/PolicyCartList';
import PolicyOwnedList from './DatabaseService/PolicyOwnedList';
import AddPolicyPage from './DatabaseService/AddPolicyPage';
import { useSelector } from 'react-redux';
import AddDiscount from './DatabaseService/AddDiscount';
import FeedbackComp from './FeedbackService/FeedbackComp';
import PolicyTabs from './DatabaseService/PolicyTabs';


const BasicTabs = () => {
  const [value, setValue] = useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  const user = useSelector(state=>state.AuthUser.user);

  return (
    <Box sx={{ width: '100%' }}>
      <Tabs value={value} onChange={handleChange} centered>
        <Tab label="Policy List" />

        {(user && user.userType=="CLIENT") && <Tab label="Your Cart" />}
        {(user && user.userType=="CLIENT") && <Tab label="Policy Owned" />}

        {(user && user.userType=="ADMIN") && <Tab label="Add Policy"/>}
        {(user && user.userType=="ADMIN") && <Tab label="Add Discount"/>}
        
        {(user && user.userType=="APPLICATION_OWNER") && <Tab label="FeedBack"/>}
        
      </Tabs>
      <div>
        {value === 0 && <div><PolicyTabs/><PolicyList/></div>}

        {value === 1 && (user && user.userType=="CLIENT") && <div><PolicyCartList/></div>}
        {value === 2 && (user && user.userType=="CLIENT") && <div><PolicyOwnedList/></div>}

        {value === 1 && (user && user.userType=="ADMIN") && <div><AddPolicyPage/> </div>}
        {value === 2 && (user && user.userType=="ADMIN") && <div><AddDiscount/> </div>}

        {value === 1 && (user && user.userType=="APPLICATION_OWNER") && <div><FeedbackComp/> </div>}
      </div>
    </Box>
  );
};

export default BasicTabs;
