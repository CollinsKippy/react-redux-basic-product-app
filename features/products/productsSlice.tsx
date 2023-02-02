import { createAsyncThunk, createSlice, PayloadAction } from '@reduxjs/toolkit';
import { BASE_URL } from '../../app/constants';
import { RootState } from '../../app/store';
import { Product } from '../../entities/product';

const productsUrl = BASE_URL + '/albums';

export interface ProductState {
  products: Product[];
  error: 'idle' | 'loading' | 'failed';
}

const initialState: ProductState = {
  products: [],
  error: 'idle',
};

export const fetchProducts = createAsyncThunk(
  '[PRODUCTS API] Load Products',
  async () => {
    const res = await fetch(productsUrl, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
      },
    });
    const data = (await res.json()) as Product[];
    console.log({ data });
    return data;
  }
);

export const productSlice = createSlice({
  name: 'product',
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
        state.status = 'loading';
      })
      .addCase(fetchProducts.fulfilled, (state, action) => {
        state.status = 'idle';
        state.products.push(action.payload);
      })
      .addCase(fetchProducts.rejected, (state, action) => {
        state.status = 'failed';
      });
  },
});

export const selectProducts = (state: RootState) => state.product.products;

// export const { loadProducts, loadProductsSuccess, loadProductsFailed } =
//   productSlice.actions;

export default productSlice.reducer;
