import { Component, useEffect } from "react";
import Box from '@mui/material/Box';
import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import { setPolicyOwned } from "../../redux/actions/PolicyOwnedActions";
import PolicyOwnedCard from "./PolicyOwnedCard";
import { useNavigate } from "react-router-dom";
import { Container, CssBaseline, Grid, ThemeProvider, createTheme } from "@mui/material";

// TODO remove, this demo shouldn't need to reset the theme.
const defaultTheme = createTheme();

export default function PolicyOwnedList (props) {
  const policyOwnedList=useSelector(state=>state.policyOwned.policy)
  const user = useSelector(state=>state.AuthUser.user)
  const dispatch =useDispatch()
  const nav = useNavigate()

  const handlePolicies = async() =>{ 
        const policyOwnedResponse = await axios.get(`http://localhost:8010/home/policyOwned/${user.username}`)
        dispatch(setPolicyOwned(policyOwnedResponse.data))
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
     
      // <div class="PolicyList">
      //   <h2>Policies Available</h2>
      //   <Box sx={{ flexGrow: 1, overflow: "hidden", px: 3 }}>
      //       {
      //       policyOwnedList.map((policy, idx) => (
      //       <PolicyOwnedCard key={policy.policyOwnedId} useridx={idx} ownedPolicy={policy} />
      //       ))}
      //   </Box>
      // </div>
      <ThemeProvider theme={defaultTheme}>
          <CssBaseline />
          <main>
            <Container sx={{ py: 8 }} maxWidth="md">
              <Grid container spacing={4}>
              {
                policyOwnedList.map((policy, idx) => (
                <PolicyOwnedCard key={policy.policyId} useridx={idx} policy={policy} />
                ))}
              </Grid>
            </Container>
          </main>
        </ThemeProvider>
    );
}
