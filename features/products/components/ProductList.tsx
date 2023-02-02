import * as React from 'react';
import { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { useAppDispatch } from '../../../app/hoots';
import { store } from '../../../app/store';
import { fetchProducts, selectProducts } from '../productsSlice';

const ProductList = () => {
  const dispatch = useAppDispatch();
  const products = useSelector(selectProducts);

  useEffect(() => {}, []);

  return (
    <div>
      <h2>Product List</h2>
      <button onClick={() => dispatch(fetchProducts())}>Get Products</button>
      {/* <ul>
        {}
      </ul> */}
    </div>
  );
};

export default ProductList;
