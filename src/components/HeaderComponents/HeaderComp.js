import React from 'react';
import { NavLink, useNavigate } from 'react-router-dom';
import { AppBar, Toolbar, Button } from '@mui/material';
import { useDispatch, useSelector } from 'react-redux';
import { logout } from '../../redux/actions/AuthUserActions';
import './HeaderComp.css'
const HeaderDisplay = () => {

  const user = useSelector(state=>state.AuthUser.user)
  const dispatch = useDispatch();

  const handleLogout =()=>{
    dispatch(logout());
    window.location.reload(true);
  }

  return (
    <AppBar position="static" className='appbar'>
      <Toolbar>
        <Button component={NavLink} to="/" exact color="inherit">
          InsureCom
        </Button>
        <Button component={NavLink} to="/home" exact color="inherit">
          Home
        </Button>
        {
          user && user.username ?
            <Button component={NavLink} to="/home" onClick={handleLogout} exact color="inherit">
              Logout
            </Button>
            :
            <div>
              <Button component={NavLink} to="/login" exact color="inherit">
                Login
              </Button>
              <Button component={NavLink} to="/register" color="inherit">
                Register
              </Button>
            </div>
        }
        <Button component={NavLink} to="/userDetails" color="inherit">
          UserDetails
        </Button>
        <Button component={NavLink} to="/portfolio" color="inherit">
          Portfolio
        </Button>
        <h4>{user && user.username}</h4>
      </Toolbar>
    </AppBar>
  );
};

function HeaderComp(props) {
  return (
    <div>
      <HeaderDisplay />
    </div>
  );
}

export default HeaderComp;
