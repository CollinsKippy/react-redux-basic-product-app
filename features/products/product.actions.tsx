import { createAction } from '@reduxjs/toolkit';

const loadProducts = createAction('[PRODUCTS PAGE] Load Products');

const loadProductsSuccess = createAction(
  '[PRODUCTS API] Load Products Success'
);

const loadProductsFailed = createAction('[PRODUCTS API] Load Products Failed');
