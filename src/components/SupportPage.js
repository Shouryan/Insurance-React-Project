// AppInfo.js

import React, { useEffect } from 'react';
import './AppInfo.css';  // Import the CSS file

function SupportPage(props) {

  return (
    <div className="app-info-container">
      <h1>Your Insurance App</h1>
      <p>
        Welcome to Your Insurance App, where we strive to provide you with
        comprehensive insurance services to protect what matters most to you.
      </p>
      <h2>Key Features:</h2>
      <ul>
        <li>
          <span className="icon">&#128222;</span> 24/7 customer support
        </li>
        <li>
          <span className="icon">&#128190;</span> Flexible policy management
        </li>
      </ul>
      <h2>About Us:</h2>
      <p>
        Team-#3 is dedicated to offering reliable insurance solutions tailored
        to your needs. Our team is committed to providing excellent customer
        service and ensuring that you have the coverage you require.
      </p>
      <h2>Contact Information:</h2>
      <p>
        If you have any questions or need assistance, feel free to reach out to
        our customer support team at{' '}
        <a href="mailto:support@team3insurance.com">support@team3insurance.com</a>{' '}
        or call 1-800-123-4567.
      </p>
    </div>
  );
}

export default SupportPage;
