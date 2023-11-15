import React, { useEffect, useState } from 'react';
import axios from 'axios';

const AddDiscount = () => {
  const [formData, setFormData] = useState({
    discountId: '',
    policyId: '',
    discountAmount:'',
    active:''
  });

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    
    // If the input type is checkbox, use checked, otherwise use value
    const inputValue = type === 'checkbox' ? checked : value;

    setFormData({
      ...formData,
      [name]: inputValue,
    });
  };

  const handleSubmit = (e) => {

    e.preventDefault();

    // Make Axios POST request with form data
    axios.post('http://localhost:8025/discountService/adddiscount/', formData)
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
    <form onSubmit={handleSubmit}>
      <label htmlFor="discountId">Discount ID:</label>
      <input
        type="text"
        id="discountId"
        name="discountId"
        value={formData.discountId}
        onChange={handleChange}
        required
      />

      <label htmlFor="policyId">Policy ID:</label>
      <input
        type="text"
        id="policyId"
        name="policyId"
        value={formData.policyId}
        onChange={handleChange}
        required
      />

      <label htmlFor="discountAmount">Discount Amount:</label>
      <input
        type="text"
        id="discountAmount"
        name="discountAmount"
        value={formData.discountAmount}
        onChange={handleChange}
        required
      />

      <label htmlFor="active">Active:</label>
      <input
        type="checkbox"
        id="active"
        name="active"
        checked={formData.active}
        onChange={handleChange}
      />

      <button type="submit">Submit</button>
    </form>
  );
};

export default AddDiscount;