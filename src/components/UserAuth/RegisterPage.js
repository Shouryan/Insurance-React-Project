
// import { Button, Container, Grid, TextField, Typography, FormControl, InputLabel, MenuItem, Select } from '@mui/material';
import { NavLink, useNavigate } from 'react-router-dom';
import axios from 'axios';
import * as React from 'react';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import Link from '@mui/material/Link';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { FormControl, InputLabel, MenuItem, Select } from '@mui/material';

function Copyright(props) {
  return (
    <Typography variant="body2" color="text.secondary" align="center" {...props}>
      {'Copyright © '}
      <Link color="inherit" href="https://mui.com/">
        BeInsure
      </Link>{' '}
      {new Date().getFullYear()}
      {'.'}
    </Typography>
  );
}

// TODO remove, this demo shouldn't need to reset the theme.

const defaultTheme = createTheme();

function RegisterPage(props) {
  
  const nav = useNavigate()
  const user = {
      username: '',
      password: '',
      confirmPassword: '',
      userType: '',
    };
  

  const handleRegister = async(e) => {
    e.preventDefault();
    user.username = e.target.username.value
    user.password = e.target.password.value
    user.confirmPassword = e.target.confirmPassword.value
    user.userType = e.target.usertype.value
    const response = await axios.post('http://localhost:8000/loginService/register',user)
    .then(()=>{
      // console.log(response.data)
      nav('/home')
    })
  };

    return (
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
          <Avatar sx={{ m: 1, bgcolor: 'secondary.main' }}>
            <LockOutlinedIcon />
          </Avatar>
          <Typography component="h1" variant="h5">
            Sign Up / Register
          </Typography>
          <Box component="form" onSubmit={handleRegister} noValidate sx={{ mt: 1 }}>
            <TextField
              margin="normal"
              required
              fullWidth
              id="username"
              label="Username"
              name="username"
              autoComplete="username"
              autoFocus
            />
            <TextField
              margin="normal"
              required
              fullWidth
              name="password"
              label="Password"
              type="password"
              id="password"
              autoComplete="current-password"
            />
            <TextField
              margin="normal"
              required
              fullWidth
              name="confirmPassword"
              label="confirmPassword"
              type="confirmPassword"
              id="confirmPassword"
              autoComplete="current-password"
            />
            <FormControl fullWidth >
            <InputLabel id="usertype-label">UserType</InputLabel>
            <Select
              labelId="usertype-label"
              id="usertype"
              name="usertype"
            >
              <MenuItem value="ADMIN">Admin</MenuItem>
              <MenuItem value="CLIENT">Client</MenuItem>
            </Select>
            </FormControl>
            <Button
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2 }}
            >
              Sign Up / Register
            </Button>
          </Box>
        </Box>
        <Copyright sx={{ mt: 8, mb: 4 }} />
      </Container>
    </ThemeProvider>
    );
  
}

export default RegisterPage;
