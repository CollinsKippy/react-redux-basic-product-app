import * as React from 'react';
import { useAppDispatch, useAppSelector } from '../../../app/hoots';
import { fetchProducts, selectProducts } from '../productsSlice';

export const ProductList = () => {
  const dispatch = useAppDispatch();
  const products = useAppSelector(selectProducts);

  // useEffect(() => {
  //   dispatch(fetchProducts());
  // }, [dispatch]);

  return (
    <div>
      <h2>Product List</h2>
      <button onClick={() => dispatch(fetchProducts())}>Get Products</button>
      <ul>
        {products.map((prod) => {
          return <li key={prod.id}>{prod.title}</li>;
        })}
      </ul>
    </div>
  );
};
