

import React, { useState } from 'react';
import './OwnedCard.css';

const OwnedPolicyCard = ({ ownedPolicy }) => {
  const [isExpanded, setIsExpanded] = useState(false);
  const [isAddedToCart, setIsAddedToCart] = useState(false);

  const handleCardClick = () => {
    setIsExpanded(!isExpanded);
  };

  const handleAddToCart = () => {
    // Add logic to handle adding to the cart
    setIsAddedToCart(true);
  };

  return (
    <div className={`owned-card ${isExpanded ? 'expanded' : ''}`} onClick={handleCardClick}>
      <div className="header">
        <h2>{ownedPolicy.policy.policyName}</h2>
        <h3>${ownedPolicy.premium}</h3>
      </div>
      <h4>Duration: {ownedPolicy.policy.duration} months</h4>
      {isExpanded && (
        <div>
          <p>{ownedPolicy.policy.policyDesc}</p>
          <p>Type: {ownedPolicy.policy.policyType}</p>
          <p>Status: {ownedPolicy.status}</p>
          
        </div>
      )}
    </div>
  );
};

export default OwnedPolicyCard;
