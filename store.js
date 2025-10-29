import { configureStore } from '@reduxjs/toolkit';
import roomsReducer from './roomsSlice';
import addOnsReducer from './addOnsSlice';
import mealsReducer from './mealsSlice';

export const store = configureStore({
  reducer: {
    rooms: roomsReducer,
    addOns: addOnsReducer,
    meals: mealsReducer,
  },
});
