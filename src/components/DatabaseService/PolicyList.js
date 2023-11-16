import { Component, useEffect, useState } from "react";
import Box from '@mui/material/Box';
import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import { setPolicy } from "../../redux/actions/PolicyActions";
import PolicyCard from "./PolicyCard";
import { setDiscount } from "../../redux/actions/DiscountAction";
import './PolicyList.css'
import { Container, CssBaseline, Grid, ThemeProvider, createTheme } from "@mui/material";

// TODO remove, this demo shouldn't need to reset the theme.
const defaultTheme = createTheme();

export default function PolicyList ({filter}) {
  const policyList=useSelector(state=>state.policyReducer.policy)
  // const dispatch =useDispatch()

  // const handlePolicies = async() =>{ 
  //       // const policyResponse = await axios.get('http://localhost:8010/home/getallpolicy')
  //       const policyResponse = await axios.get('http://localhost:8070/policyApp/getAllPolicy')
  //       dispatch(setPolicy(policyResponse.data))
  //       // console.log(policyResponse.data)
  // } 
   
  
    return (
     
      // <div class="PolicyList">
      //   <h2>Policies Available</h2>
      //   <Box sx={{ flexGrow: 1, overflow: "hidden", px: 3 }}>
            // {
            // policyList.filter(item=>item.policyType===filter).map((policy, idx) => (
  
            // <PolicyCard key={policy.policyId} useridx={idx} policy={policy} />
            // ))}
      //   </Box>
      // </div>
      <ThemeProvider theme={defaultTheme}>
      <CssBaseline />
      <main>
        <Container sx={{ py: 8 }} maxWidth="md">
          <Grid container spacing={4}>
          {
            policyList.filter(item=>item.policyType===filter).map((policy, idx) => (
            <PolicyCard key={policy.policyId} useridx={idx} policy={policy} />
            ))}
          </Grid>
        </Container>
      </main>
    </ThemeProvider>
    );
}
