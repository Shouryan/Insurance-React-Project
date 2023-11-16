import React, { useEffect, useState } from 'react';
import './Card.css';
import axios from 'axios';
import { CardContent, Grid, Typography } from '@mui/material';
import { Card } from 'react-bootstrap';
import { useSelector } from 'react-redux';
import premium from './premium';
const PolicyCartCard = ({policy}) => {

  const [discount, setDiscount] = useState(0);
  const [isExpanded, setExpanded] = useState(false);

  // const policy=useSelector(state=>state.policy)

  const handleCardClick = () => {
    setExpanded(!isExpanded);
  };

  const fetchDiscount = async()=>{
    await axios.get(`http://localhost:8025/discountService/getDiscountByList/${policy.policyId}`)
    .then((response)=>{
      setDiscount(response.data[0].discountAmount)
    })
  }

  useEffect(() =>{
    fetchDiscount()
  })

  return (
    // <div className={`card ${isExpanded ? 'expanded' : ''}`} onClick={handleCardClick}>
    //   <div className="header">
    //     <h2>{props.policy.policyName}</h2>
    //     <h3>${Math.floor((props.policy.amount/props.policy.duration)*10)-discount}</h3>
    //   </div>
    //   <h4>Duration: {props.policy.duration} months</h4>
    //   {isExpanded && (
    //     <div>
    //       <p>{props.policy.policyDesc}</p>
    //       <p>Type: {props.policy.policyType}</p>
    //       <p>Discount Applied : {discount}</p>
    //     </div>
    //   )}
    // </div>
    <Grid item key={policy} xs={12} sm={6} md={4}>
      <Card sx={{ height: "100%", display: "flex", flexDirection: "column" }}>
        <CardContent sx={{ flexGrow: 1 }}>
          <Typography gutterBottom variant="h5" component="h2" >
            {policy.policyName}
          </Typography>
          <Typography>
            <h3>Coverage : ${policy.amount}</h3>
            <h4>
              Premium : 
              {
                (premium(policy.amount,policy.duration)!=premium(policy.amount,policy.duration,discount)) &&
                <del style={{paddingRight:'5px', color:'red'}}>${premium(policy.amount,policy.duration)}</del>
              }
              <span style={{color:'green'}}>${premium(policy.amount,policy.duration,discount)}</span>
            </h4>
            <h4>Duration: {policy.duration} months</h4>
          </Typography>
          <Typography>
            <div>
              <p>{policy.policyDesc}</p>
            </div>
          </Typography>
        </CardContent>
      </Card>
    </Grid>
  );
};

export default PolicyCartCard;



    