import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
import { BASE_URL } from '../../app/constants';
// import { loadProductsFailed, loadProductsSuccess } from './product.actions';

const productsUrl = BASE_URL + '/products';

export const fetchProducts = createAsyncThunk(
  '[PRODUCTS API] Load Products',
  async () => {
    const { data } = await axios.get(productsUrl);
    console.log({ data });
    return data;
  }
);
