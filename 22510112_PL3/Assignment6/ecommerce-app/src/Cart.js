import React from 'react';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import TextField from '@mui/material/TextField';

const Cart = ({ cart, removeFromCart, updateQuantity }) => {
  const totalPrice = cart.reduce((total, item) => total + item.price * item.quantity, 0);

  return (
    <Container>
      <Box my={4}>
        <Typography variant="h4" component="h1" gutterBottom>
          Shopping Cart
        </Typography>
        {cart.map(item => (
          <Grid container spacing={2} key={item.id} alignItems="center">
            <Grid item xs={12} sm={4}>
              <img src={item.image} alt={item.name} style={{ width: '100%' }} />
            </Grid>
            <Grid item xs={12} sm={4}>
              <Typography variant="h6" component="h2">
                {item.name}
              </Typography>
              <Typography variant="body1" component="p">
                ${item.price}
              </Typography>
            </Grid>
            <Grid item xs={12} sm={2}>
              <TextField
                type="number"
                value={item.quantity}
                onChange={(e) => updateQuantity(item.id, parseInt(e.target.value))}
                inputProps={{ min: 1 }}
              />
            </Grid>
            <Grid item xs={12} sm={2}>
              <Button variant="contained" color="secondary" onClick={() => removeFromCart(item.id)}>
                Remove
              </Button>
            </Grid>
          </Grid>
        ))}
        <Typography variant="h5" component="h2" gutterBottom>
          Total: ${totalPrice}
        </Typography>
      </Box>
    </Container>
  );
};

export default Cart;