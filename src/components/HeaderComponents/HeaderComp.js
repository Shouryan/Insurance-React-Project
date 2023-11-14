import React from 'react';
import { NavLink } from 'react-router-dom';
import { AppBar, Toolbar, Button } from '@mui/material';
import { useSelector } from 'react-redux';

const HeaderDisplay = () => {

  const user = useSelector(state=>state.AuthUser.user)

  return (
    <AppBar position="static">
      <Toolbar>
        <Button component={NavLink} to="/" exact color="inherit">
          Home
        </Button>
        {
          user.username!=""?
            <Button component={NavLink} to="/login" exact color="inherit">
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
        <h4>{user.username}</h4>
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
