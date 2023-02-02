import { createAsyncThunk } from '@reduxjs/toolkit';
import { BASE_URL } from '../../app/constants';
// import { loadProductsFailed, loadProductsSuccess } from './product.actions';

const productsUrl = BASE_URL + '/products';

export const fetchProducts = createAsyncThunk(
  '[PRODUCTS API] Load Products',
  async () => {
    const res = await fetch(productsUrl, {
      method: 'GET',
      mode: 'no-cors',
      headers: {
        'Content-Type': 'application/json',
      },
    });
    const data = await res.json();
    console.log({ data });
    return await data;
  }
);
