
import { Button, Container, Grid, TextField, Typography, FormControl, InputLabel, MenuItem, Select } from '@mui/material';
import { NavLink } from 'react-router-dom';
import axios from 'axios';

function RegisterPage(props) {
  
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
    console.log(response.data)
  };

    return (
      <Container maxWidth="sm">
        <form onSubmit={handleRegister}>
          <Grid container spacing={3} alignItems="center" justifyContent="center" style={{ minHeight: '100vh' }}>
            <Grid item xs={12}>
              <Typography variant="h4" align="center">Register</Typography>
            </Grid>
            <Grid item xs={12}>
              <TextField
                label="username"
                variant="outlined"
                fullWidth
                name="username"
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                label="Password"
                type="password"
                variant="outlined"
                fullWidth
                name="password"
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                label="confirmPassword"
                type="password"
                variant="outlined"
                fullWidth
                name="confirmPassword"
              />
            </Grid>
            <Grid item xs={12}>
              <FormControl fullWidth>
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
            </Grid>
            <Grid item xs={12}>
              <Button variant="contained" color="primary" type="submit" fullWidth>
                Register
              </Button>
            </Grid>
            <Grid item xs={12}>
              <Button variant="contained" color="primary" fullWidth>
                <NavLink to="/login">
                Login
                </NavLink>
              </Button>
            </Grid>
          </Grid>
        </form>
      </Container>
    );
  
}

export default RegisterPage;
