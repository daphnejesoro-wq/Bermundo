import React from 'react';
import { useSelector } from 'react-redux';

const DetailsPopup = ({ isOpen, onClose }) => {
  const rooms = useSelector((state) => state.rooms.items);
  const addOns = useSelector((state) => state.addOns.items);
  const meals = useSelector((state) => state.meals.items);

  if (!isOpen) return null;

  // Filter items with quantity > 0
  const selectedRooms = rooms.filter(room => room.quantity > 0);
  const selectedAddOns = addOns.filter(addOn => addOn.quantity > 0);
  const selectedMeals = meals.filter(meal => meal.quantity > 0);

  // Calculate totals
  const roomsTotal = selectedRooms.reduce((sum, room) => sum + (room.cost * room.quantity), 0);
  const addOnsTotal = selectedAddOns.reduce((sum, addOn) => sum + (addOn.cost * addOn.quantity), 0);
  const mealsTotal = selectedMeals.reduce((sum, meal) => sum + (meal.costPerPerson * meal.quantity), 0);
  const grandTotal = roomsTotal + addOnsTotal + mealsTotal;

  return (
    <div className="popup-overlay" onClick={onClose}>
      <div className="popup-content" onClick={(e) => e.stopPropagation()}>
        <div className="popup-header">
          <h2>Order Details</h2>
          <button className="close-btn" onClick={onClose}>&times;</button>
        </div>
        
        <div className="popup-body">
          {selectedRooms.length === 0 && selectedAddOns.length === 0 && selectedMeals.length === 0 ? (
            <p className="no-items-message">No items selected yet. Please select rooms, add-ons, or meals to see your order details.</p>
          ) : (
            <table className="details-table">
              <thead>
                <tr>
                  <th>Item Type</th>
                  <th>Unit Cost</th>
                  <th>Quantity</th>
                  <th>Subtotal</th>
                </tr>
              </thead>
              <tbody>
                {selectedRooms.map((room) => (
                  <tr key={`room-${room.id}`}>
                    <td>{room.name}</td>
                    <td>${room.cost.toLocaleString()}</td>
                    <td>{room.quantity}</td>
                    <td>${(room.cost * room.quantity).toLocaleString()}</td>
                  </tr>
                ))}
                {selectedAddOns.map((addOn) => (
                  <tr key={`addon-${addOn.id}`}>
                    <td>{addOn.name}</td>
                    <td>${addOn.cost}</td>
                    <td>{addOn.quantity}</td>
                    <td>${(addOn.cost * addOn.quantity).toLocaleString()}</td>
                  </tr>
                ))}
                {selectedMeals.map((meal) => (
                  <tr key={`meal-${meal.id}`}>
                    <td>{meal.name}</td>
                    <td>${meal.costPerPerson} per person</td>
                    <td>{meal.quantity} people</td>
                    <td>${(meal.costPerPerson * meal.quantity).toLocaleString()}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          )}
        </div>

        {grandTotal > 0 && (
          <div className="popup-footer">
            <div className="grand-total">
              <span className="total-label">Grand Total:</span>
              <span className="total-amount">${grandTotal.toLocaleString()}</span>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default DetailsPopup;
