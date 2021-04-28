import React from 'react';
import { Card } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import Rating from '../components/Rating.js';

const Product = ({ product }) => {
  return (
    <div>
      <Card className='my-3 p-3 rounded'>
        <Link to={`/product/${product._id}`}>
          <Card.Img src={product.image} variant='top'></Card.Img>
        </Link>
        <Link to={`/product/${product._id}`}>
          <Card.Title as='div'>
            <strong>{product.name}</strong>
          </Card.Title>
        </Link>
        <Card.Text as='div'>
          {/* <div className='my-3'>
            {product.rating} from {product.numReviews}
          </div> */}
          <Rating
            value={product.rating}
            text={`${product.numReviews} reviews`}
            // color='orange'
          />
        </Card.Text>
        <Card.Text as='h3'>${product.price}</Card.Text>
      </Card>
    </div>
  );
};

export default Product;
