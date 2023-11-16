
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import {  useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';

const FeedbackPage = () => {

    const nav = useNavigate()
    const user = useSelector(state=>state.AuthUser.user)

  const [formData, setFormData] = useState({
    feedbackId: '',
    feedbackTitle: '',
    feedbackFrom: user.userType,
    feedbackBody: '',
    feedbackDate: '',
    feedbackAcknowledge:false,
  });

  const handleChange = (e) => {
    const value = e.target.type === 'checkbox' ? e.target.checked : e.target.value;
    setFormData({
      ...formData,
      [e.target.name]: value,
    });
  };

  const handleSubmit = (e) => {

    e.preventDefault();

    // Make Axios POST request with form data
    axios.post('http://localhost:8030/feedbackService/addFeedback/', formData)
      .then(response => {
        console.log('POST success:', response.data);
        nav('/home')
        // Handle success, e.g., redirect to another page or show a success message
      })
      .catch(error => {
        console.error('POST error:', error);
        // Handle error, e.g., show an error message to the user
      });
  };

  useEffect(()=>{
    console.log("AddFeedback...");
  })

  return (
    <div>
      <h2>Add Feedback</h2>
      <form onSubmit={handleSubmit}>
        <label>
          Feedback Title:
          <input type="text" name="feedbackTitle" value={formData.feedbackTitle} onChange={handleChange} />
        </label>
        <br />
        <label>
          Feedback :
          <input type="text" name="feedbackBody" value={formData.feedbackBody} onChange={handleChange} />
        </label>
        <br />
        <label>
          Feedback Date:
          <input type="date" name="feedbackDate" value={formData.feedbackDate} onChange={handleChange} />
        </label>
        <br />

        {/* <label>
         Discount Amount:
          <input type='text' name="discountAmount" value={formData.discountAmount} onChange={handleChange} />
        </label>
        <br /> */}

        {/* <label>
         Feedback Acknowledge
         <input
          type="checkbox"
          name="feedbackAcknowledge"
          
          checked={formData.feedbackAcknowledge}
          onChange={handleChange}
        />
        </label> */}
        <br />

        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default FeedbackPage;