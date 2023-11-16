// import React from 'react';
// import { AppBar, Toolbar, Button } from '@mui/material';
import './HeaderComp.css'
import * as React from 'react';
import PropTypes from 'prop-types';
import Toolbar from '@mui/material/Toolbar';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import SearchIcon from '@mui/icons-material/Search';
import Typography from '@mui/material/Typography';
import Link from '@mui/material/Link';
import { NavLink } from 'react-router-dom';
import { AppBar } from '@mui/material';
import { useDispatch, useSelector } from 'react-redux';
import { logout } from '../../redux/actions/AuthUserActions';

const HeaderDisplay = (props) => {

  const user = useSelector(state=>state.AuthUser.user)
  const dispatch = useDispatch();

  const handleLogout =()=>{
    dispatch(logout());
  }

const { sections, title } = props;

return (
  <AppBar
        position="static"
        color="default"
        elevation={0}
        sx={{ borderBottom: (theme) => `1px solid ${theme.palette.divider}` }}
      >
        <Toolbar sx={{ flexWrap: 'wrap' }}>
          <Typography variant="h6" color="inherit"  noWrap sx={{ flexGrow: 1 }}>
            <Link href='/' underline='none' ><h2>BeInsure</h2></Link>
          </Typography>
          <nav>
            <Button component={NavLink} to="/home" exact color="inherit">
              Home
            </Button>
            <Button component={NavLink} to="/support" exact color="inherit">
              Support
            </Button>
            
          </nav>
          {
          user && user.username ?
            <Button component={NavLink} to="/" onClick={handleLogout} exact variant="outlined" sx={{ my: 1, mx: 1.5 }}>
              Logout
            </Button>
            :
            <div>
              <Button component={NavLink} to="/login" exact variant="outlined" sx={{ my: 1, mx: 1.5 }}>
                Login
              </Button>
              <Button component={NavLink} to="/register" variant="outlined" sx={{ my: 1, mx: 1.5 }}>
                Register
              </Button>
            </div>
        }
        </Toolbar>
      </AppBar>
  // <React.Fragment>
  //     <Toolbar sx={{ borderBottom: 1, borderColor: 'divider' }}>
  //       <Button component={NavLink} to="/" exact color="inherit">
  //          InsureCom
  //        </Button>
  //       <Typography
  //         component="h2"
  //         variant="h5"
  //         color="inherit"
  //         align="center"
  //         noWrap
  //         sx={{ flex: 1 }}
  //         >
  //         {title}
  //       </Typography>
  //       <IconButton>
  //         <SearchIcon />
  //       </IconButton>
  //       {
  //         user && user.username ?
  //           <Button component={NavLink} to="/home" onClick={handleLogout} exact color="inherit">
  //             Logout
  //           </Button>
  //           :
  //           <div>
  //             <Button component={NavLink} to="/login" exact color="inherit">
  //               Login
  //             </Button>
  //             <Button component={NavLink} to="/register" color="inherit">
  //               Register
  //             </Button>
  //           </div>
  //       }
  //     </Toolbar>
  //     <Toolbar
  //       component="nav"
  //       variant="dense"
  //       sx={{ justifyContent: 'space-between', overflowX: 'auto' }}
  //       >
  //         {/* <Link
  //         color="inherit"
  //         noWrap
  //         key="Home"
  //         variant="body2"
  //         href='home'
  //         sx={{ p: 1, flexShrink: 0 }}
  //         >
  //           Home
  //         </Link> */}
         
  //        <Button component={NavLink} to="/home" exact color="inherit">
  //          Home
  //        </Button>
         
  //       <Button component={NavLink} to="/userDetails" color="inherit">
  //         UserDetails
  //       </Button>
  //       <Button component={NavLink} to="/portfolio" color="inherit">
  //         Portfolio
  //       </Button>
  //     </Toolbar>
  //   </React.Fragment>
  );
}

function HeaderComp(props) {
  
  return (
    <div>
      <HeaderDisplay props={props}/>
    </div>
  );
}

HeaderComp.propTypes = {
  sections: PropTypes.arrayOf(
    PropTypes.shape({
      title: PropTypes.string.isRequired,
      url: PropTypes.string.isRequired,
    }),
  ).isRequired,
  title: PropTypes.string.isRequired,
};

export default HeaderComp;