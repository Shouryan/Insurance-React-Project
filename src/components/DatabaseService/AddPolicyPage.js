import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { Avatar, Box, Button, Container, CssBaseline, TextField, ThemeProvider, Typography, createTheme } from '@mui/material';
import { Copyright } from '@mui/icons-material';

// TODO remove, this demo shouldn't need to reset the theme.

const defaultTheme = createTheme();

const AddPolicyPage = () => {
  const nav = useNavigate()
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
        nav('/feedback')
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
    // <div>
    //   <h2>Add Policy</h2>
    //   <form onSubmit={handleSubmit}>
    //     <label>
    //       Policy Name:
    //       <input type="text" name="policyName" value={formData.policyName} onChange={handleChange} />
    //     </label>
    //     <br />

    //     <label>
    //       Policy Description:
    //       <textarea name="policyDesc" value={formData.policyDesc} onChange={handleChange} />
    //     </label>
    //     <br />

    //     <label>
    //       Duration:
    //       <input type="text" name="duration" value={formData.duration} onChange={handleChange} />
    //     </label>
    //     <br />

    //     <label>
    //       Policy Type:
    //       <input type="text" name="policyType" value={formData.policyType} onChange={handleChange} />
    //     </label>
    //     <br />

    //     <label>
    //       Amount:
    //       <input type="text" name="amount" value={formData.amount} onChange={handleChange} />
    //     </label>
    //     <br />

    //     <button type="submit">Submit</button>
    //   </form>
    // </div>
    <ThemeProvider theme={defaultTheme}>
      <Container component="main" maxWidth="xs">
        <CssBaseline />
        <Box
          sx={{
            marginTop: 8,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
          }}
        >
          
          <Typography component="h1" variant="h5">
            Add Policy
          </Typography>
          <Box component="form" onSubmit={handleSubmit} noValidate sx={{ mt: 1 }}>
            <TextField
              margin="normal"
              required
              fullWidth
              id="policyName"
              label="policyName"
              name="policyName"
              autoComplete="policyName"
              autoFocus
            />
            <TextField
              margin="normal"
              required
              fullWidth
              id="policyDesc"
              label="policyDesc"
              name="policyDesc"
              autoComplete="policyDesc"
              autoFocus
            />
            <TextField
              margin="normal"
              required
              fullWidth
              id="duration"
              label="duration"
              name="duration"
              autoComplete="duration"
              autoFocus
            />
            <TextField
              margin="normal"
              required
              fullWidth
              id="policyType"
              label="policyType"
              name="policyType"
              autoComplete="policyType"
              autoFocus
            />
            <TextField
              margin="normal"
              required
              fullWidth
              name="amount"
              label="amount"
              type="amount"
              id="amount"
              autoComplete="current-password"
            />
            <Button
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2 }}
            >
              Add Policy
            </Button>
          </Box>
        </Box>
        <Copyright sx={{ mt: 8, mb: 4 }} />
      </Container>
    </ThemeProvider>
  );
};

export default AddPolicyPage;