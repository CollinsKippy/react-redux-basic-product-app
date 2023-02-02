import { createAsyncThunk } from '@reduxjs/toolkit';
import { BASE_URL } from '../../app/constants';
// import { loadProductsFailed, loadProductsSuccess } from './product.actions';

const productsUrl = BASE_URL + '/albums';

export const fetchProducts = createAsyncThunk(
  '[PRODUCTS API] Load Products',
  async (ThunkAPI) => {
    const res = await fetch(productsUrl, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
      },
    });
    const data = await res.json();
    console.log({ data });
    return data;
  }
);
