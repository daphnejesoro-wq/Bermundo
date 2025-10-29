import { createSlice } from '@reduxjs/toolkit';

const mealsData = [
  { id: 1, name: 'Breakfast', costPerPerson: 50, quantity: 0, image: 'https://images.unsplash.com/photo-1533089860892-a7c6f0a88666?w=300&h=200&fit=crop' },
  { id: 2, name: 'Lunch', costPerPerson: 60, quantity: 0, image: 'https://images.unsplash.com/photo-1546069901-ba9599a7e63c?w=300&h=200&fit=crop' },
  { id: 3, name: 'High Tea', costPerPerson: 25, quantity: 0, image: 'https://images.unsplash.com/photo-1559305616-3ceb2d229f10?w=300&h=200&fit=crop' },
  { id: 4, name: 'Dinner', costPerPerson: 70, quantity: 0, image: 'https://images.unsplash.com/photo-1414235077428-338989a2e8c0?w=300&h=200&fit=crop' },
];

const mealsSlice = createSlice({
  name: 'meals',
  initialState: {
    items: mealsData,
  },
  reducers: {
    updateMealQuantity: (state, action) => {
      const { id, quantity } = action.payload;
      const meal = state.items.find(item => item.id === id);
      if (meal) {
        meal.quantity = parseInt(quantity) || 0;
      }
    },
  },
});

export const { updateMealQuantity } = mealsSlice.actions;
export default mealsSlice.reducer;
