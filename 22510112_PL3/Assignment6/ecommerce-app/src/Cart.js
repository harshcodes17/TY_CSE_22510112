import React from 'react';
import { Card, CardMedia, CardContent, Typography, Button, TextField } from '@mui/material';

const Cart = ({ cart, removeFromCart, updateQuantity }) => {
  const totalPrice = cart.reduce((total, item) => total + item.price * item.quantity, 0);

  return (
    <div style={{ padding: '16px' }}>
      {cart.map(item => (
        <Card key={item.id} style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '16px' }}>
          <CardMedia
            component="img"
            style={{ width: '100px', height: '100px' }}
            image={item.image}
            alt={item.name}
          />
          <CardContent>
            <Typography gutterBottom variant="h5" component="div">
              {item.name}
            </Typography>
            <TextField
              type="number"
              value={item.quantity}
              onChange={(e) => updateQuantity(item.id, parseInt(e.target.value))}
              style={{ width: '60px' }}
            />
            <Typography variant="body2" color="text.secondary">
              ${item.price * item.quantity}
            </Typography>
            <Button onClick={() => removeFromCart(item.id)} variant="contained" color="secondary">
              Remove
            </Button>
          </CardContent>
        </Card>
      ))}
      <Typography variant="h5">Total: ${totalPrice}</Typography>
    </div>
  );
};

export default Cart;