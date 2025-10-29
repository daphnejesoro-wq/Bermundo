import { createSlice } from '@reduxjs/toolkit';

const roomsData = [
  { id: 1, name: 'Auditorium Hall', capacity: 200, cost: 5500, quantity: 0, image: 'https://images.unsplash.com/photo-1475503572774-15a45e5d60b9?w=300&h=200&fit=crop' },
  { id: 2, name: 'Conference Room', capacity: 15, cost: 3500, quantity: 0, image: 'https://images.unsplash.com/photo-1497366216548-37526070297c?w=300&h=200&fit=crop' },
  { id: 3, name: 'Presentation Room', capacity: 50, cost: 700, quantity: 0, image: 'https://images.unsplash.com/photo-1497366811353-6870744d04b2?w=300&h=200&fit=crop' },
  { id: 4, name: 'Large Meeting Room', capacity: 10, cost: 900, quantity: 0, image: 'https://images.unsplash.com/photo-1431540015161-0bf868a2d407?w=300&h=200&fit=crop' },
  { id: 5, name: 'Small Meeting Room', capacity: 5, cost: 1100, quantity: 0, image: 'https://images.unsplash.com/photo-1497215842964-222b430dc094?w=300&h=200&fit=crop' },
];

const roomsSlice = createSlice({
  name: 'rooms',
  initialState: {
    items: roomsData,
  },
  reducers: {
    incrementRoom: (state, action) => {
      const room = state.items.find(item => item.id === action.payload);
      if (room) {
        room.quantity += 1;
      }
    },
    decrementRoom: (state, action) => {
      const room = state.items.find(item => item.id === action.payload);
      if (room && room.quantity > 0) {
        room.quantity -= 1;
      }
    },
  },
});

export const { incrementRoom, decrementRoom } = roomsSlice.actions;
export default roomsSlice.reducer;
