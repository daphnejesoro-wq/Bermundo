import { createSlice } from '@reduxjs/toolkit';

const addOnsData = [
  { id: 1, name: 'Speakers', cost: 35, quantity: 0, image: 'https://images.unsplash.com/photo-1608043152269-423dbba4e7e1?w=300&h=200&fit=crop' },
  { id: 2, name: 'Microphones', cost: 45, quantity: 0, image: 'https://images.unsplash.com/photo-1590602847861-f357a9332bbc?w=300&h=200&fit=crop' },
  { id: 3, name: 'Whiteboards', cost: 80, quantity: 0, image: 'https://images.unsplash.com/photo-1625225233840-695456021cde?w=300&h=200&fit=crop' },
  { id: 4, name: 'Projectors', cost: 200, quantity: 0, image: 'https://images.unsplash.com/photo-1593508512255-86ab42a8e620?w=300&h=200&fit=crop' },
  { id: 5, name: 'Signage', cost: 80, quantity: 0, image: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=300&h=200&fit=crop' },
];

const addOnsSlice = createSlice({
  name: 'addOns',
  initialState: {
    items: addOnsData,
  },
  reducers: {
    incrementAddOn: (state, action) => {
      const addOn = state.items.find(item => item.id === action.payload);
      if (addOn) {
        addOn.quantity += 1;
      }
    },
    decrementAddOn: (state, action) => {
      const addOn = state.items.find(item => item.id === action.payload);
      if (addOn && addOn.quantity > 0) {
        addOn.quantity -= 1;
      }
    },
  },
});

export const { incrementAddOn, decrementAddOn } = addOnsSlice.actions;
export default addOnsSlice.reducer;
