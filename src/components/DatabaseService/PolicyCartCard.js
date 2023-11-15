import React, { useEffect, useState } from 'react';
import './Card.css';
import axios from 'axios';
const PolicyCartCard = (props) => {

  const [discount, setDiscount] = useState(0);
  const [isExpanded, setExpanded] = useState(false);

  const handleCardClick = () => {
    setExpanded(!isExpanded);
  };

  const fetchDiscount = async()=>{
    await axios.get(`http://localhost:8025/discountService/getDiscountByList/${props.policy.policyId}`)
    .then((response)=>{
      setDiscount(response.data[0].discountAmount)
    })
  }

  useEffect(() =>{
    fetchDiscount()
  })

  return (
    <div className={`card ${isExpanded ? 'expanded' : ''}`} onClick={handleCardClick}>
      <div className="header">
        <h2>{props.policy.policyName}</h2>
        <h3>${Math.floor((props.policy.amount/props.policy.duration)*10)-discount}</h3>
      </div>
      <h4>Duration: {props.policy.duration} months</h4>
      {isExpanded && (
        <div>
          <p>{props.policy.policyDesc}</p>
          <p>Type: {props.policy.policyType}</p>
          <p>Discount Applied : {discount}</p>
        </div>
      )}
    </div>
  );
};

export default PolicyCartCard;
