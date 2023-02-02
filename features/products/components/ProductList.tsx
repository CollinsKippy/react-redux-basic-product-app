import * as React from 'react';
import { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { useAppDispatch } from '../../../app/hoots';
import { fetchProducts } from '../product.thunks';
import { selectProducts } from '../productsSlice';

const ProductList = () => {
  const dispatch = useAppDispatch();
  const products = useSelector(selectProducts);

  useEffect(() => {
    dispatch(fetchProducts());
  }, []);

  return <h2>Product List</h2>;
};

export default ProductList;
