import { Component, useEffect } from "react";
import Box from '@mui/material/Box';
import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import { setPolicy } from "../../redux/actions/PolicyActions";
import PolicyCard from "./PolicyCard";
import { setDiscount } from "../../redux/actions/DiscountAction";
import './PolicyList.css'
export default function PolicyList (props) {
  const policyList=useSelector(state=>state.policyReducer.policy)
  const dispatch =useDispatch()

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
     
      <div class="PolicyList">
        <h2>Policies Available</h2>
        <Box sx={{ flexGrow: 1, overflow: "hidden", px: 3 }}>
            {
            policyList.map((policy, idx) => (
  
            <PolicyCard key={policy.policyId} useridx={idx} policy={policy} />
            ))}
        </Box>
      </div>
    );
}
