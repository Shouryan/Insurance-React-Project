// TabComponent.js
import React, { useState } from 'react';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Box from '@mui/material/Box';
import PolicyList from './DatabaseService/PolicyList';

const BasicTabs = () => {
  const [value, setValue] = useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <Box sx={{ width: '100%' }}>
      <Tabs value={value} onChange={handleChange} centered>
        <Tab label="Policy List" />
        <Tab label="Your Cart" />
        <Tab label="Policy Owned" />
        {/* Add more tabs as needed */}
      </Tabs>
      <div>
        {value === 0 && <div><PolicyList/></div>}
        {value === 1 && <div>CART</div>}
        {value === 2 && <div>Policy Owned</div>}
        {/* Add more content sections as needed */}
      </div>
    </Box>
  );
};

export default BasicTabs;
