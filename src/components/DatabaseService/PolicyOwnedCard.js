

import React, { useEffect, useState } from 'react';
import './OwnedCard.css';
import { Card, CardContent, Grid, Typography } from '@mui/material';

const OwnedPolicyCard = ({ policy }) => {
  const [isExpanded, setIsExpanded] = useState(false);
  const [isAddedToCart, setIsAddedToCart] = useState(false);

  const handleCardClick = () => {
    setIsExpanded(!isExpanded);
  };


  return (
    // <div className={`owned-card ${isExpanded ? 'expanded' : ''}`} onClick={handleCardClick}>
    //   <div className="header">
    //     <h2>{ownedPolicy.policy.policyName}</h2>
    //     <h3>${ownedPolicy.premium}</h3>
    //   </div>
    //   <h4>Duration: {ownedPolicy.policy.duration} months</h4>
    //   {isExpanded && (
    //     <div>
    //       <p>{ownedPolicy.policy.policyDesc}</p>
    //       <p>Type: {ownedPolicy.policy.policyType}</p>
    //       <p>Status: {ownedPolicy.status}</p>
          
    //     </div>
    //   )}
    // </div>
    <Grid item key={policy} xs={12} sm={6} md={4}>
    <Card sx={{ height: "100%", display: "flex", flexDirection: "column" }}>
      <CardContent sx={{ flexGrow: 1 }}>
        <Typography gutterBottom variant="h5" component="h2" >
          {policy.status==="ACTIVE"? <span style={{color:'green'}}>{policy.policy.policyName} </span>:<span style={{color:'red'}}>{policy.policy.policyName} </span>}
        </Typography>
        <Typography>
          <h3>Coverage : ${policy.policy.amount}</h3>
          <h4>Duration: {policy.policy.duration} months</h4>
        </Typography>
        <Typography>
          <div>
            <p>{policy.policy.policyDesc}</p>
            <p>Date of Purchase : {policy.date}</p>
          </div>
        </Typography>
      </CardContent>
    </Card>
  </Grid>
  );
};

export default OwnedPolicyCard;
