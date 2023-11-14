
import { Button, Container, Grid, TextField, Typography } from '@mui/material';
import { useDispatch, useSelector } from 'react-redux';
import { login } from '../../redux/actions/AuthUserActions';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';


function LoginPage(props){
  
  const user = useSelector(state =>state.AuthUser.user)
  const dispatch = useDispatch()
  const nav = useNavigate();

  const handleLogin = async(e) => {
      e.preventDefault();
      const userLoginRequest = {
        'username':e.target.username.value,
        'password':e.target.password.value
      }
      const response = await axios.post('http://localhost:8000/loginService/login',userLoginRequest)
      dispatch(login(response.data))
      if(user)
        nav('/')
      else
        nav('/login')
  };

  const handleInputChange = (e) => {
  };

    return (
      <Container maxWidth="sm">
        <form onSubmit={handleLogin}>
          <Grid container spacing={3} alignItems="center" justifyContent="center" style={{ minHeight: '100vh' }}>
            <Grid item xs={12}>
              <Typography variant="h4" align="center">Login</Typography>
            </Grid>
            <Grid item xs={12}>
              <TextField
                label="Username"
                variant="outlined"
                fullWidth
                name="username"
                onChange={handleInputChange}
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                label="Password"
                type="password"
                variant="outlined"
                fullWidth
                name="password"
                onChange={handleInputChange}
              />
            </Grid>
            <Grid item xs={12}>
              <Button variant="contained" color="primary" type="submit" fullWidth>
                Login
              </Button>
            </Grid>
          </Grid>
        </form>
      </Container>
    );
}

export default LoginPage;
