# Conference Expense Planner

A comprehensive React-based conference expense planning application with Redux state management.

## Features

### 🏠 Landing Page
- Professional company branding (ConferenceHub)
- Engaging background with company description
- "Get Started" button to navigate to product selection

### 🏢 Room Selection
- **Auditorium Hall** - Capacity: 200 | Cost: $5,500 each
- **Conference Room** - Capacity: 15 | Cost: $3,500 each
- **Presentation Room** - Capacity: 50 | Cost: $700 each
- **Large Meeting Room** - Capacity: 10 | Cost: $900 each
- **Small Meeting Room** - Capacity: 5 | Cost: $1,100 each

### 🎤 Add-ons Equipment
- **Speakers** - $35 each
- **Microphones** - $45 each
- **Whiteboards** - $80 each
- **Projectors** - $200 each
- **Signage** - $80 each

### 🍽️ Meals Selection
- **Breakfast** - $50 per person
- **Lunch** - $60 per person
- **High Tea** - $25 per person
- **Dinner** - $70 per person

### 📊 Order Details Pop-up
- Shows all selected items in a table format
- Displays: Item Type, Unit Cost, Quantity, Subtotal
- Calculates and displays grand total
- Clean modal interface with close button

## Technologies Used

- **React** - Function components with hooks
- **Redux Toolkit** - State management with slices
- **React Router** - Navigation between pages
- **CSS3** - Modern styling with gradients and animations

## Installation & Setup

1. Navigate to the project directory:
```bash
cd conference-expense-planner
```

2. Install dependencies (already done):
```bash
npm install
```

3. Start the development server:
```bash
npm start
```

4. Open your browser and visit:
```
http://localhost:3000
```

## Project Structure

```
src/
├── components/
│   ├── LandingPage.js          # Landing page component
│   ├── LandingPage.css         # Landing page styles
│   ├── ProductSelection.js     # Main product selection page
│   ├── ProductSelection.css    # Product selection styles
│   ├── NavigationBar.js        # Navigation header
│   ├── NavigationBar.css       # Navigation styles
│   ├── RoomSelection.js        # Room selection component
│   ├── RoomSelection.css       # Room selection styles
│   ├── AddOnsSelection.js      # Add-ons component
│   ├── AddOnsSelection.css     # Add-ons styles
│   ├── MealsSelection.js       # Meals selection component
│   ├── MealsSelection.css      # Meals styles
│   ├── DetailsPopup.js         # Order details modal
│   └── DetailsPopup.css        # Modal styles
├── redux/
│   ├── store.js                # Redux store configuration
│   ├── roomsSlice.js           # Rooms state slice
│   ├── addOnsSlice.js          # Add-ons state slice
│   └── mealsSlice.js           # Meals state slice
├── App.js                      # Main app with routing
├── App.css                     # Global styles
└── index.js                    # App entry point with Redux Provider
```

## How to Use

1. **Landing Page**: Click "Get Started" to begin planning
2. **Room Selection**: Use +/- buttons to select room quantities
3. **Add-ons**: Use +/- buttons to select equipment quantities
4. **Meals**: Enter number of people for each meal type
5. **View Details**: Click "Show Details" button in navigation to see your order summary
6. **Navigation**: Use section links in header to jump to different sections

## Key Features Implementation

### Redux State Management
- Three separate slices (rooms, add-ons, meals)
- Actions for increment, decrement, and quantity updates
- Centralized store for global state

### Dynamic Calculations
- Real-time subtotal updates for each item
- Grand total calculation across all categories
- Per-person pricing for meals

### Responsive Design
- Clean, modern UI with gradient styling
- Hover effects and smooth animations
- Mobile-friendly layout

### Array Mapping
- All product items are mapped from Redux state arrays
- Dynamic rendering of items based on data

## Available Scripts

- `npm start` - Runs the app in development mode
- `npm test` - Launches the test runner
- `npm run build` - Builds the app for production
- `npm run eject` - Ejects from Create React App (one-way operation)

## Future Enhancements

- Add form validation
- Implement local storage persistence
- Add checkout/booking functionality
- Include date selection for events
- Add user authentication
- Export order details to PDF

## License

This project was created for educational purposes.
