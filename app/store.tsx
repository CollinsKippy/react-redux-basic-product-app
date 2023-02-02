import { configureStore } from '@reduxjs/toolkit/dist/configureStore';

export const store = configureStore({
  reducer: {},
});

export type AppState = ReturnType<typeof store.getState>;
