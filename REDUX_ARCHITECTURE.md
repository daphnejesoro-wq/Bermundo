# Redux Architecture Documentation

## State Management Structure

This application uses Redux Toolkit for state management with three separate slices.

## Store Configuration

**File:** `src/redux/store.js`

```javascript
{
  rooms: roomsSlice,
  addOns: addOnsSlice,
  meals: mealsSlice
}
```

## Slices Overview

### 1. Rooms Slice (`roomsSlice.js`)

**State Structure:**
```javascript
{
  items: [
    {
      id: number,
      name: string,
      capacity: number,
      cost: number,
      quantity: number
    }
  ]
}
```

**Available Rooms:**
1. Auditorium Hall - Capacity: 200, Cost: $5,500
2. Conference Room - Capacity: 15, Cost: $3,500
3. Presentation Room - Capacity: 50, Cost: $700
4. Large Meeting Room - Capacity: 10, Cost: $900
5. Small Meeting Room - Capacity: 5, Cost: $1,100

**Actions:**
- `incrementRoom(id)` - Increases room quantity by 1
- `decrementRoom(id)` - Decreases room quantity by 1 (minimum 0)

**Usage Example:**
```javascript
import { useSelector, useDispatch } from 'react-redux';
import { incrementRoom, decrementRoom } from '../redux/roomsSlice';

const rooms = useSelector(state => state.rooms.items);
const dispatch = useDispatch();

// Increment
dispatch(incrementRoom(roomId));

// Decrement
dispatch(decrementRoom(roomId));
```

### 2. Add-Ons Slice (`addOnsSlice.js`)

**State Structure:**
```javascript
{
  items: [
    {
      id: number,
      name: string,
      cost: number,
      quantity: number
    }
  ]
}
```

**Available Equipment:**
1. Speakers - $35 each
2. Microphones - $45 each
3. Whiteboards - $80 each
4. Projectors - $200 each
5. Signage - $80 each

**Actions:**
- `incrementAddOn(id)` - Increases add-on quantity by 1
- `decrementAddOn(id)` - Decreases add-on quantity by 1 (minimum 0)

**Usage Example:**
```javascript
import { incrementAddOn, decrementAddOn } from '../redux/addOnsSlice';

const addOns = useSelector(state => state.addOns.items);
dispatch(incrementAddOn(addOnId));
dispatch(decrementAddOn(addOnId));
```

### 3. Meals Slice (`mealsSlice.js`)

**State Structure:**
```javascript
{
  items: [
    {
      id: number,
      name: string,
      costPerPerson: number,
      quantity: number
    }
  ]
}
```

**Available Meals:**
1. Breakfast - $50 per person
2. Lunch - $60 per person
3. High Tea - $25 per person
4. Dinner - $70 per person

**Actions:**
- `updateMealQuantity({ id, quantity })` - Sets the number of people for a meal

**Usage Example:**
```javascript
import { updateMealQuantity } from '../redux/mealsSlice';

const meals = useSelector(state => state.meals.items);
dispatch(updateMealQuantity({ id: mealId, quantity: numberOfPeople }));
```

## Component Integration

### How Components Use Redux

#### Reading State
```javascript
import { useSelector } from 'react-redux';

// Get all rooms
const rooms = useSelector(state => state.rooms.items);

// Get all add-ons
const addOns = useSelector(state => state.addOns.items);

// Get all meals
const meals = useSelector(state => state.meals.items);
```

#### Dispatching Actions
```javascript
import { useDispatch } from 'react-redux';
import { incrementRoom } from '../redux/roomsSlice';

const dispatch = useDispatch();

const handleClick = () => {
  dispatch(incrementRoom(1)); // Increment Auditorium Hall
};
```

## Calculations

### Subtotal Calculation
Each component calculates subtotals based on:

**Rooms & Add-ons:**
```javascript
subtotal = cost × quantity
```

**Meals:**
```javascript
subtotal = costPerPerson × quantity (number of people)
```

### Grand Total Calculation
The DetailsPopup component calculates the grand total:

```javascript
// Calculate each category total
const roomsTotal = selectedRooms.reduce(
  (sum, room) => sum + (room.cost * room.quantity), 
  0
);

const addOnsTotal = selectedAddOns.reduce(
  (sum, addOn) => sum + (addOn.cost * addOn.quantity), 
  0
);

const mealsTotal = selectedMeals.reduce(
  (sum, meal) => sum + (meal.costPerPerson * meal.quantity), 
  0
);

// Grand total
const grandTotal = roomsTotal + addOnsTotal + mealsTotal;
```

## Data Flow

```
User Action (Click +/- or Input)
         ↓
Dispatch Redux Action
         ↓
Reducer Updates State
         ↓
Component Re-renders (via useSelector)
         ↓
UI Updates with New Values
```

## Array Mapping Pattern

All components use `.map()` to iterate through items:

```javascript
{rooms.map((room) => (
  <div key={room.id}>
    <h3>{room.name}</h3>
    <p>${room.cost}</p>
    <p>Quantity: {room.quantity}</p>
    <button onClick={() => dispatch(incrementRoom(room.id))}>+</button>
    <button onClick={() => dispatch(decrementRoom(room.id))}>-</button>
  </div>
))}
```

## Best Practices Used

1. **Immutable Updates**: Redux Toolkit uses Immer internally, allowing "mutative" code that's actually immutable
2. **Normalized State**: Each slice has its own items array
3. **Action Creators**: Automatically generated by createSlice
4. **Type Safety**: Actions are strongly typed
5. **Selector Pattern**: useSelector for accessing state
6. **Single Source of Truth**: All state in one store

## Benefits of This Architecture

- ✅ **Predictable State**: All state changes through actions
- ✅ **Centralized Logic**: Business logic in reducers
- ✅ **Easy Testing**: Pure functions are easy to test
- ✅ **Time Travel Debugging**: Redux DevTools support
- ✅ **Scalable**: Easy to add more slices/features
- ✅ **Performance**: Re-renders only affected components

## Adding New Features

To add a new slice:

1. Create new slice file in `src/redux/`
2. Define initial state and reducers
3. Export actions and reducer
4. Add reducer to store configuration
5. Use in components with useSelector/useDispatch

Example:
```javascript
// src/redux/newSlice.js
import { createSlice } from '@reduxjs/toolkit';

const newSlice = createSlice({
  name: 'newFeature',
  initialState: { items: [] },
  reducers: {
    addItem: (state, action) => {
      state.items.push(action.payload);
    }
  }
});

export const { addItem } = newSlice.actions;
export default newSlice.reducer;

// Add to store.js
import newReducer from './newSlice';

export const store = configureStore({
  reducer: {
    rooms: roomsReducer,
    addOns: addOnsReducer,
    meals: mealsReducer,
    newFeature: newReducer  // Add here
  }
});
```

## Redux DevTools

To debug the application:

1. Install Redux DevTools browser extension
2. Open browser DevTools
3. Navigate to Redux tab
4. See all actions and state changes in real-time

This architecture follows Redux best practices and makes the application maintainable and scalable.
