import { createSlice, PayloadAction } from '@reduxjs/toolkit';
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
    builder
      .addCase(fetchProducts.pending, (state) => {
        return { ...state, isLoading: true };
      })
      .addCase(
        fetchProducts.fulfilled,
        (state, action: PayloadAction<Product[]>) => {
          return { ...state, products: action.payload };
        }
      )
      .addCase(fetchProducts.rejected, (state, action) => {
        return { ...state, error: action.payload };
      });
  },
});

export const selectProducts = (state: AppState) => state.products;

export default productSlice.reducer;
