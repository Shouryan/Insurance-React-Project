import React, { useState } from 'react';
import './Card.css';
import { useSelector } from 'react-redux';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const PolicyCard = ({ policy }) => {

  const user = useSelector(state=>state.AuthUser.user)
  const [isExpanded, setExpanded] = useState(false);
  const [isAddedToCart, setAddedToCart] = useState(false);
  const nav = useNavigate()
  const policyCart = useSelector(state=>state.policyCart.cart)
  const discount = useSelector(state=>state.Discount.discount)

  const cartRequest = {
    policyId:'',
    clientUsername:'',
    premium:''
  }

  const handleCardClick = () => {
    setExpanded(!isExpanded);
  };

  const handleAddToCart = async(e) => {
    if(!(user && user.username)) {
      nav('/login')
    }else{
      const discountAvail=await axios.get(`http://localhost:8025/discountService/getDiscountByList/${policy.policyId}`)
      .then(async(response)=>{
        e.preventDefault()
        cartRequest.policyId = policy.policyId;
        cartRequest.clientUsername = user.username;
        cartRequest.premium = Math.floor((policy.amount/policy.duration)*10)-response.data[0].discountAmount;
        const responseCart = await axios.post(`http://localhost:8040/insuranceCart/addPolicyToCart`,[cartRequest])
      })
    }
    
  };

  return (
    <div className={`card ${isExpanded ? 'expanded' : ''}`} onClick={handleCardClick}>
      <div className="header">
        <h2 >{policy.policyName}</h2>
        <h3>${policy.amount}</h3>
        <h4>${Math.floor((policy.amount/policy.duration)*10)}</h4>
      </div>
      <h4>Duration: {policy.duration} months</h4>
      {isExpanded && (
        <div>
          <p>{policy.policyDesc}</p>
          <p>Type: {policy.policyType}</p>
          {!isAddedToCart && (
            <button className="addToCartBtn" onClick={handleAddToCart}>
              Add to Cart
            </button>
          )}
          {isAddedToCart && <p>Added to Cart!</p>}
        </div>
      )}
    </div>
  );
};

export default PolicyCard;
