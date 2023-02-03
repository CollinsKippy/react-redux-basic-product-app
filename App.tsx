import * as React from 'react';
import { ProductList } from './features/products/components/ProductList';
import './style.css';

export default function App() {
  return (
    <div>
      <h1>Products App</h1>
      <p>With Bootstrap version 5.2.3</p>

      <ProductList />
    </div>
  );
}
