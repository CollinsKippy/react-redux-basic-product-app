import * as React from 'react';
import './style.css';
import ProductList from './features/products/components/ProductList'

export default function App() {
  return (
    <div>
      <h1>Products App</h1>
      <p>With Bootstrap version 5.2.3</p>

      <ProductList />
    </div>
  );
}
