import React, { useEffect, useState } from 'react';
import axios from 'axios';

const AddPolicyPage = () => {
  const [formData, setFormData] = useState({
    policyId:'',
    policyName: '',
    policyDesc: '',
    duration: '',
    policyType: '',
    amount: '',
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Make Axios POST request with form data
    axios.post('http://localhost:8010/home/addPolicy', formData)
      .then(response => {
        console.log('POST success:', response.data);
        // Handle success, e.g., redirect to another page or show a success message
      })
      .catch(error => {
        console.error('POST error:', error);
        // Handle error, e.g., show an error message to the user
      });
  };

  useEffect(()=>{
    console.log("AddPolicy...");
  })

  return (
    <div>
      <h2>Add Policy</h2>
      <form onSubmit={handleSubmit}>
        <label>
          Policy Name:
          <input type="text" name="policyName" value={formData.policyName} onChange={handleChange} />
        </label>
        <br />

        <label>
          Policy Description:
          <textarea name="policyDesc" value={formData.policyDesc} onChange={handleChange} />
        </label>
        <br />

        <label>
          Duration:
          <input type="text" name="duration" value={formData.duration} onChange={handleChange} />
        </label>
        <br />

        <label>
          Policy Type:
          <input type="text" name="policyType" value={formData.policyType} onChange={handleChange} />
        </label>
        <br />

        <label>
          Amount:
          <input type="text" name="amount" value={formData.amount} onChange={handleChange} />
        </label>
        <br />

        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default AddPolicyPage;