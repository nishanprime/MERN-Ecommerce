import React from 'react';
import products from '../products.js';
import { Row, Col } from 'react-bootstrap';
import Product from '../components/Product.js';
const HomeScreen = () => {
  return (
    <div>
      <h1>Latest Products</h1>
      <Row>
        {products.map(product => (
          <Col key={product._id} sm={12} md={6} lg={4} xl={3}>
            {/* <h3>{product.name}</h3> */}
            <Product product={product}></Product>
          </Col>
        ))}
      </Row>
    </div>
  );
};

export default HomeScreen;
