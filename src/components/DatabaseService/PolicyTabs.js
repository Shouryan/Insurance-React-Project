// TabComponent.js
import React, { useEffect, useState } from 'react';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Box from '@mui/material/Box';
import { useDispatch, useSelector } from 'react-redux';
import axios from 'axios';
import { setPolicy } from '../../redux/actions/PolicyActions';
import PolicyList from './PolicyList';


const PolicyTabs = () => {
  const [value, setValue] = useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  const user = useSelector(state=>state.AuthUser.user);
  const dispatch = useDispatch()

  const handlePolicies = async() =>{ 
    // const policyResponse = await axios.get('http://localhost:8010/home/getallpolicy')
    const policyResponse = await axios.get('http://localhost:8070/policyApp/getAllPolicy')
    dispatch(setPolicy(policyResponse.data))
    // console.log(policyResponse.data)
    
    } 
    useEffect(()=> {
    handlePolicies()
    },[])

  return (
    <Box sx={{ width: '100%' }}>
      <Tabs value={value} onChange={handleChange} centered>
        <Tab label="Health Insurance" />
        <Tab label="Accidental Insurance" />
        <Tab label="Life Insurance" />
      </Tabs>
      <div>
        {value === 0 && <div><PolicyList filter={'HEALTH'}/></div>}
        {value === 1 && <div><PolicyList filter={'ACCIDENTAL'}/></div>}
        {value === 2 && <div><PolicyList filter={'LIFE'}/></div>}
      </div>
    </Box>
  );
};

export default PolicyTabs;
