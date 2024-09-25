import React from 'react';
import { Link } from 'react-router-dom';
import { Card, CardMedia, CardContent, Typography, Button } from '@mui/material';

const ProductList = ({ products }) => {
  return (
    <div style={{ display: 'flex', flexWrap: 'wrap', gap: '16px' }}>
      {products.map(product => (
        <Card key={product.id} style={{ width: '300px' }}>
          <CardMedia
            component="img"
            height="140"
            image={product.image}
            alt={product.name}
          />
          <CardContent>
            <Typography gutterBottom variant="h5" component="div">
              {product.name}
            </Typography>
            <Typography variant="body2" color="text.secondary">
              ${product.price}
            </Typography>
            <Link to={`/product/${product.id}`}>
              <Button size="small">View Details</Button>
            </Link>
          </CardContent>
        </Card>
      ))}
    </div>
  );
};

export default ProductList;