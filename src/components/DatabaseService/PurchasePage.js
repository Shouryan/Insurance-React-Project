import React, { useState } from "react";

import axios from "axios";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

import './PurchasePage.css'

const PurchasePage = () => {
  const [formData, setFormData] = useState({
    clientAge: "",
    clientCity: "",
    clientMedicalHistory: "",
    clientTobaccoUser: false,
  });

  const user = useSelector(state=>state.AuthUser.user)
  const nav = useNavigate()

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post(
        `http://localhost:8010/home/purchasePolicy/${user.username}`,
        formData
      );

      if (response.status === 200) {
        // Handle success

        console.log("Form data sent successfully");
        nav('/feedback')
      } else {
        // Handle error

        console.error("Error sending form data");
      }
    } catch (error) {
      // Handle error

      console.error("Error sending form data:", error);
    }
  };

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;

    // If the field is a checkbox, update its checked status

    const fieldValue = type === "checkbox" ? checked : value;

    setFormData({ ...formData, [name]: fieldValue });
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>
        Age:
        <input
          type="number"
          name="clientAge"
          value={formData.clientAge}
          onChange={handleChange}
        />
      </label>

      <br />

      <label>
        City:
        <input
          type="text"
          name="clientCity"
          value={formData.clientCity}
          onChange={handleChange}
        />
      </label>

      <br />

      <label>
        Medical History:
        <textarea
          name="clientMedicalHistory"
          value={formData.clientMedicalHistory}
          onChange={handleChange}
        />
      </label>

      <br />

      <label>
        Tobacco User:
        <input
          type="checkbox"
          name="clientTobaccoUser"
          checked={formData.clientTobaccoUser}
          onChange={handleChange}
        />
      </label>

      <br />

      <button type="submit">Submit</button>
    </form>
  );
};

export default PurchasePage;
