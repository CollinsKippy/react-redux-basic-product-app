import { createSlice } from '@reduxjs/toolkit';
import { AppState } from '../../app/store';
import { Product } from '../../entities/product';
import { fetchProducts } from './product.thunks';

export interface ProductState {
  products: Product[];
  isLoading: boolean;
  error: string | null;
}

const initialState: ProductState = {
  products: [],
  isLoading: false,
  error: null,
};

export const productSlice = createSlice({
  name: 'products',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchProducts.pending, (state, action) => {
      return { ...state, isLoading: true };
    });
  },
});

export const selectProducts = (state: AppState) => state.products;

export default productSlice.reducer;
