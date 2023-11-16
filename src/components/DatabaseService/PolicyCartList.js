import { Component, useEffect } from "react";
import Box from '@mui/material/Box';
import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import { setPolicyCart, setPolicyCartPolicy } from "../../redux/actions/PolicyCartAction";
import PolicyCartCard from "./PolicyCartCard";
import { useNavigate } from "react-router-dom";
import { setDiscount } from "../../redux/actions/DiscountAction";
import PolicyTabs from "./PolicyTabs";
import { Container, CssBaseline, Grid, ThemeProvider, createTheme } from "@mui/material";

// TODO remove, this demo shouldn't need to reset the theme.
const defaultTheme = createTheme();

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
        {/* <h2>Policies Available In CART</h2>
        <Box sx={{ flexGrow: 1, overflow: "hidden", px: 3 }}>
            {
            policyList.map((policy, idx) => (
            <PolicyCartCard key={policy.policyId} useridx={idx} policy={policy} />
            ))}
        </Box> */}
        <ThemeProvider theme={defaultTheme}>
          <CssBaseline />
          <main>
            <Container sx={{ py: 8 }} maxWidth="md">
              <Grid container spacing={4}>
              {
                policyList.map((policy, idx) => (
                <PolicyCartCard key={policy.policyId} useridx={idx} policy={policy} />
                ))}
              </Grid>
            </Container>
          </main>
        </ThemeProvider>
        <div>
          <h4></h4>
          <button onClick={handlePurchase}>
            Purchase Policy
          </button>
        </div>
      </div>
    );
  
}
