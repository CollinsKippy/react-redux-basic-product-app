import * as React from 'react';
import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchProducts } from '../product.thunks';

const ProductList = () => {
  const dispatch = useDispatch();
  // const products = useSelector(selectProducts);

  useEffect(() => {}, []);

  return <h2>Product List</h2>;
};

export default ProductList;
