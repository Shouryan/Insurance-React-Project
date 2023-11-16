import React, { useState } from "react";
import "./Card.css";
import { useSelector } from "react-redux";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import AppBar from "@mui/material/AppBar";
import Button from "@mui/material/Button";
import CameraIcon from "@mui/icons-material/PhotoCamera";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import CssBaseline from "@mui/material/CssBaseline";
import Grid from "@mui/material/Grid";
import Stack from "@mui/material/Stack";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import Link from "@mui/material/Link";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import premium from "./premium";

const PolicyCard = ({ policy }) => {
  const user = useSelector((state) => state.AuthUser.user);
  const [isExpanded, setExpanded] = useState(false);
  const [isAddedToCart, setAddedToCart] = useState(false);
  const nav = useNavigate();
  const policyCart = useSelector((state) => state.policyCart.cart);
  const discount = useSelector((state) => state.Discount.discount);

  const cartRequest = {
    policyId: "",
    clientUsername: "",
    premium: "",
  };

  const handleCardClick = () => {
    setExpanded(!isExpanded);
  };

  const handleAddToCart = async (e) => {
    if (!(user && user.username)) {
      nav("/login");
    } else {
      const discountAvail = await axios
        .get(
          `http://localhost:8025/discountService/getDiscountByList/${policy.policyId}`
        )
        .then(async (response) => {
          e.preventDefault();
          cartRequest.policyId = policy.policyId;
          cartRequest.clientUsername = user.username;
          cartRequest.premium =
            Math.floor((policy.amount / policy.duration) * 10) -
            response.data[0].discountAmount;
          const responseCart = await axios.post(
            `http://localhost:8040/insuranceCart/addPolicyToCart`,
            [cartRequest]
            );
            setAddedToCart(true);
        });
    }
  };

  return (
    // <div className={`card ${isExpanded ? 'expanded' : ''}`} onClick={handleCardClick}>
    //   <div className="header">
    //     <h2 >{policy.policyName}</h2>
    //     <h3>Coverage : ${policy.amount}</h3>
    //     <h4>Premium : ${Math.floor((policy.amount/(policy.duration*12))*10)}</h4>
    //   </div>
    // <h4>Duration: {policy.duration} months</h4>
    // {isExpanded && (
    //   <div>
    //     <p>{policy.policyDesc}</p>
    //     <p>Type: {policy.policyType}</p>
    //     {!isAddedToCart && (
    //       <button className="addToCartBtn" onClick={handleAddToCart}>
    //         Add to Cart
    //       </button>
    //     )}
    //     {isAddedToCart && <p>Added to Cart!</p>}
    //   </div>
    // )}
    // </div>
    <Grid item key={policy} xs={12} sm={6} md={4}>
      <Card sx={{ height: "100%", display: "flex", flexDirection: "column" }}>
        <CardContent sx={{ flexGrow: 1 }}>
          <Typography gutterBottom variant="h5" component="h2">
            {policy.policyName}
          </Typography>
          <Typography>
            <h3>Coverage : ${policy.amount}</h3>
            <h4>
              Premium : $
              {premium(policy.amount,policy.duration)}
            </h4>
            <h4>Duration: {policy.duration} months</h4>
          </Typography>
          <Typography>
            <div>
              <p>{policy.policyDesc}</p>
              {!isAddedToCart && (
                <button className="addToCartBtn" onClick={handleAddToCart}>
                  Add to Cart
                </button>
              )}
              {isAddedToCart && <p>Added to Cart!</p>}
            </div>
          </Typography>
        </CardContent>
      </Card>
    </Grid>
  );
};

export default PolicyCard;

// function Copyright() {
//   return (
//     <Typography variant="body2" color="text.secondary" align="center">
//       {'Copyright © '}
//       <Link color="inherit" href="https://mui.com/">
//         Your Website
//       </Link>{' '}
//       {new Date().getFullYear()}
//       {'.'}
//     </Typography>
//   );
// }

// const cards = [1, 2, 3, 4, 5, 6, 7, 8, 9];

// // TODO remove, this demo shouldn't need to reset the theme.
// const defaultTheme = createTheme();

// export const Album =()=> {
//   return (
//     <ThemeProvider theme={defaultTheme}>
//       <CssBaseline />
//       <main>
//         <Container sx={{ py: 8 }} maxWidth="md">
//           {/* End hero unit */}
//           <Grid container spacing={4}>
//             {cards.map((card) => (
//               <Grid item key={card} xs={12} sm={6} md={4}>
//                 <Card
//                   sx={{ height: '100%', display: 'flex', flexDirection: 'column' }}
//                 >
//                   <CardMedia
//                     component="div"
//                     sx={{
//                       // 16:9
//                       pt: '56.25%',
//                     }}
//                     image="https://source.unsplash.com/random?wallpapers"
//                   />
//                   <CardContent sx={{ flexGrow: 1 }}>
//                     <Typography gutterBottom variant="h5" component="h2">
//                       Heading
//                     </Typography>
//                     <Typography>
//                       This is a media card. You can use this section to describe the
//                       content.
//                     </Typography>
//                   </CardContent>
//                   <CardActions>
//                     <Button size="small">View</Button>
//                     <Button size="small">Edit</Button>
//                   </CardActions>
//                 </Card>
//               </Grid>
//             ))}
//           </Grid>
//         </Container>
//       </main>
//     </ThemeProvider>
//   );
// }
