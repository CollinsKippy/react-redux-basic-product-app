import { createSlice } from '@reduxjs/toolkit';
import { Product } from '../../entities/product';

interface ProductState {
  products: Product[];
  isLoading: boolean;
  error: string;
}

const initialState: ProductState = {
  products: [],
  isLoading: false,
  error: null,
};

export const counterSlice = createSlice({
  name: 'products',
  initialState,
  reducers: {
    
  }
})
