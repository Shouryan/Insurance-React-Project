// // AppInfo.js

// import React from 'react';
// import './AppInfo.css';  

// function AppInfo(props) {
//   return (
//     <div className="app-info-container">
//       <h1>Your Insurance App</h1>
//       <p>
//         Welcome to Your Insurance App, where we strive to provide you with
//         comprehensive insurance services to protect what matters most to you.
//       </p>
//       <h2>Key Features:</h2>
//       <ul>
//         <li>
//           <span className="icon">&#128222;</span> 24/7 customer support
//         </li>
//         <li>
//           <span className="icon">&#128190;</span> Flexible policy management
//         </li>
//       </ul>
//       <h2>About Us:</h2>
//       <p>
//         Team-#3 is dedicated to offering reliable insurance solutions tailored
//         to your needs. Our team is committed to providing excellent customer
//         service and ensuring that you have the coverage you require.
//       </p>
//       <h2>Contact Information:</h2>
//       <p>
//         If you have any questions or need assistance, feel free to reach out to
//         our customer support team at{' '}
//         <a href="mailto:support@team3insurance.com">support@team3insurance.com</a>{' '}
//         or call 1-800-123-4567.
//       </p>
//     </div>
//   );
// }

// export default AppInfo;

import * as React from 'react';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardHeader from '@mui/material/CardHeader';
import CssBaseline from '@mui/material/CssBaseline';
import Grid from '@mui/material/Grid';
import StarIcon from '@mui/icons-material/StarBorder';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Link from '@mui/material/Link';
import GlobalStyles from '@mui/material/GlobalStyles';
import Container from '@mui/material/Container';

function Copyright(props) {
  return (
    <Typography variant="body2" color="text.secondary" align="center" {...props}>
      {'Copyright © '}
      <Link color="inherit" href="https://mui.com/">
        Your Website
      </Link>{' '}
      {new Date().getFullYear()}
      {'.'}
    </Typography>
  );
}

const tiers = [
  {
    title: 'Why Us?',
    price: '',
    description: [
      'Over 9 million customers trust us & have bought their insurance on BeSure'
    ],
    buttonText: 'Sign up for free',
    buttonVariant: 'outlined',
    href:'/register'
  },
  {
    title: 'Health Insurance',
    subheader: 'Most popular',
    price: '200*',
    description: [
      '100% Claim Assurance',
      'Minimal processing time',
      'Highly competitive pricing',
      '24*7 Support',
    ],
    buttonText: 'Get started',
    buttonVariant: 'contained',
    href:'/home'
  },
  {
    title: '24*7 Support',
    price: '',
    description: [
      'Our friendly customer support team is your extended family. Speak your heart out...'
    ],
    buttonText: 'Support Team',
    buttonVariant: 'outlined',
    href: '/support'
  },
];

// TODO remove, this demo shouldn't need to reset the theme.
const defaultTheme = createTheme();

export default function AppInfo() {
  return (
    <ThemeProvider theme={defaultTheme}>
      <GlobalStyles styles={{ ul: { margin: 0, padding: 0, listStyle: 'none' } }} />
      <CssBaseline />
      
      {/* Hero unit */}
      <Container disableGutters maxWidth="sm" component="main" sx={{ pt: 8, pb: 6 }}>
        <Typography
          component="h1"
          variant="h2"
          align="center"
          color="text.primary"
          gutterBottom
        >
          BeInsure : Where Your Future Meets Assurance.
        </Typography>
        <hr/>
        <Typography variant="h6" align="center" color="text.secondary" component="p">
        Welcome to 'BeSure' where the convergence of foresight and assurance defines our commitment. 
        As a paragon in the realm of insurance, we stand as sentinels, diligently safeguarding your future with unwavering certainty.
        </Typography>
      </Container>
      {/* End hero unit */}
      <Container maxWidth="md" component="main">
        <Grid container spacing={5} alignItems="flex-end">
          {tiers.map((tier) => (
            // Enterprise card is full width at sm breakpoint
            <Grid
              item
              key={tier.title}
              xs={12}
              sm={tier.title === 'Enterprise' ? 12 : 6}
              md={4}
            >
              <Card>
                <CardHeader
                  title={tier.title}
                  subheader={tier.subheader}
                  titleTypographyProps={{ align: 'center' }}
                  action={tier.title === 'Pro' ? <StarIcon /> : null}
                  subheaderTypographyProps={{
                    align: 'center',
                  }}
                  sx={{
                    backgroundColor: (theme) =>
                      theme.palette.mode === 'light'
                        ? theme.palette.grey[200]
                        : theme.palette.grey[700],
                  }}
                />
                <CardContent>
                  <Box
                    sx={{
                      display: 'flex',
                      justifyContent: 'center',
                      alignItems: 'baseline',
                      mb: 2,
                    }}
                  >
                    <Typography component="h2" variant="h3" color="text.primary">
                      ${tier.price}
                    </Typography>
                    <Typography variant="h6" color="text.secondary">
                      /mo
                    </Typography>
                  </Box>
                  <ul>
                    {tier.description.map((line) => (
                      <Typography
                        component="li"
                        variant="subtitle1"
                        align="center"
                        key={line}
                      >
                        {line}
                      </Typography>
                    ))}
                  </ul>
                </CardContent>
                <CardActions>
                  <Button fullWidth variant={tier.buttonVariant} href={tier.href}>
                    {tier.buttonText}
                  </Button>
                </CardActions>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Container>
    
    </ThemeProvider>
  );
}
