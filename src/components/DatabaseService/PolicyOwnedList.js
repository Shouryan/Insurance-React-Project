import { Component, useEffect } from "react";
import Box from '@mui/material/Box';
import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import { setPolicyOwned } from "../../redux/actions/PolicyOwnedActions";
import PolicyOwnedCard from "./PolicyOwnedCard";

export default function PolicyOwnedList (props) {
  const policyOwnedList=useSelector(state=>state.policyOwned.policy)
  const user = useSelector(state=>state.AuthUser.user)
  const dispatch =useDispatch()
  const handlePolicies = async() =>{ 
        const policyOwnedResponse = await axios.get(`http://localhost:8010/home/policyOwned/${user.username}`)
        dispatch(setPolicyOwned(policyOwnedResponse.data))
  } 
  useEffect(()=> {
    handlePolicies()
  },[])
    return (
     
      <div class="PolicyList">
        <h2>Policies Available</h2>
        <Box sx={{ flexGrow: 1, overflow: "hidden", px: 3 }}>
            {
            policyOwnedList.map((policy, idx) => (
            <PolicyOwnedCard key={policy.policyOwnedId} useridx={idx} ownedPolicy={policy} />
            ))}
        </Box>
      </div>
    );
}
