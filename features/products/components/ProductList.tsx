import * as React from 'react';
import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { selectProducts } from '../productsSlice';

const ProductList = () => {
  const dispatch = useDispatch();
  const products = useSelector(selectProducts);

  return <h2>Product List</h2>;
};

export default ProductList;
