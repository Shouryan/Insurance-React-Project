import { Component, useEffect } from "react";
import Box from '@mui/material/Box';
import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import { setPolicyCart, setPolicyCartPolicy } from "../../redux/actions/PolicyCartAction";
import PolicyCartCard from "./PolicyCartCard";
import { useNavigate } from "react-router-dom";
import { setDiscount } from "../../redux/actions/DiscountAction";



export default function PolicyCartList (props) {

  const nav = useNavigate()
  const policyCart = useSelector(state=>state.policyCart.cart)
  var policyList = useSelector(state=>state.policyCart.policy)
  const user = useSelector(state=>state.AuthUser.user)
  const dispatch =useDispatch()
  
    const handlePurchase = async() => {
      nav('/purchase')
    };
    const handlePolicies = async() =>{ 
        const policyCartResponse = await axios.get(`http://localhost:8010/home/getcart/${user.username}`)
        .then(async(response)=>{
          if(response.data){
            dispatch(setPolicyCart(response.data))
            // console.log(policyCart)
            const policyResponse = await axios.get(`http://localhost:8070/policyApp/getAllPolicyByList/${[policyCart.policyId]}`)
            dispatch(setPolicyCartPolicy(policyResponse.data))
          }else{
            dispatch(setPolicyCartPolicy([]))
          }
        })
    }
    
    useEffect(()=> {
      if(!(user && user.username))
      {
        nav('/login')
      }else{
        handlePolicies()
      }
    },[])
    
      return (
      <div class="PolicyList">
        <h2>Policies Available In CART</h2>
        <Box sx={{ flexGrow: 1, overflow: "hidden", px: 3 }}>
            {
            policyList.map((policy, idx) => (
            <PolicyCartCard key={policy.policyId} useridx={idx} policy={policy} />
            ))}
        </Box>
        <div>
          <h4></h4>
          <button onClick={handlePurchase}>
            Purchase Policy
          </button>
        </div>
      </div>
    );
  
}
