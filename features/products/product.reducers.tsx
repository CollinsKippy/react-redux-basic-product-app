import { createReducer } from '@reduxjs/toolkit';
import { Product } from '../../entities/product';
import {
  loadProducts,
  loadProductsFailed,
  loadProductsSuccess,
} from './product.actions';

export interface ProductState {
  products: Product[];
  isLoading: boolean;
  error: string;
}

const initialState: ProductState = {
  products: [],
  isLoading: false,
  error: null,
};

export const productsReducer = createReducer(initialState, (builder) => {
  builder
    .addCase(loadProducts, (state, action) => {
      return { ...state, isLoading: true };
    })
    .addCase(loadProductsSuccess, (state, action) => {
      return {
        ...state,
        products: action.payload,
        isLoading: false,
      };
    })
    .addCase(loadProductsFailed, (state, action) => {
      return {
        ...state,
        error: action.payload,
        isLoading: false,
      };
    });
});
