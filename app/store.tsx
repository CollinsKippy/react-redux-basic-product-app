import { Action, configureStore, ThunkAction } from '@reduxjs/toolkit';
import productReducer from '../features/products/productsSlice';

export const store = configureStore({
  reducer: {
    product: productReducer,
  },
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>;
