import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { RootState } from '../../app/store';
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
  reducers: {
    // loadProducts: (state, action) => {
    //   return { ...state, isLoading: true };
    // },
    // loadProductsSuccess: (state, action) => {
    //   return {
    //     ...state,
    //     products: action.payload,
    //     isLoading: false,
    //   };
    // },
    // loadProductsFailed: (state, action) => {
    //   return {
    //     ...state,
    //     error: action.payload,
    //     isLoading: false,
    //   };
    // },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchProducts.pending, (state) => {
        return { ...state, isLoading: true };
      })
      .addCase(fetchProducts.fulfilled, (state, action) => {
        return { ...state, products: action.payload };
      })
      .addCase(fetchProducts.rejected, (state, action) => {
        return { ...state, error: action.payload };
      });
  },
});

export const selectProducts = (state: RootState) => state.products;

// export const { loadProducts, loadProductsSuccess, loadProductsFailed } =
//   productSlice.actions;

export default productSlice.reducer;
