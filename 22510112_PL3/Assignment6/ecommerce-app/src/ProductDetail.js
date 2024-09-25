import React from 'react';
import { useParams } from 'react-router-dom';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';

const ProductDetail = ({ products, addToCart }) => {
  const { id } = useParams();
  const product = products.find(p => p.id === parseInt(id));

  return (
    <Container>
      <Box my={4}>
        <img src={product.image} alt={product.name} style={{ width: '300px', maxHeight: '400px', objectFit: 'cover',borderRadius:'20px'}} />
        <Typography variant="h4" component="h1" gutterBottom>
          {product.name}
        </Typography>
        <Typography variant="h5" component="p" gutterBottom>
          ${product.price}
        </Typography>
        <Button variant="contained" color="primary" onClick={() => addToCart(product)}>
          Add to Cart
        </Button>
      </Box>
    </Container>
  );
};

export default ProductDetail;