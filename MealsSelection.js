import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { updateMealQuantity } from '../redux/mealsSlice';

const MealsSelection = () => {
  const meals = useSelector((state) => state.meals.items);
  const dispatch = useDispatch();

  const handleQuantityChange = (id, value) => {
    dispatch(updateMealQuantity({ id, quantity: value }));
  };

  return (
    <section id="meals-section" className="selection-section">
      <h2 className="section-title">Meals Selection</h2>
      <div className="items-grid">
        {meals.map((meal) => (
          <div key={meal.id} className="item-card">
            <img src={meal.image} alt={meal.name} className="item-image" />
            <h3 className="item-name">{meal.name}</h3>
            <p className="item-cost">${meal.costPerPerson} per person</p>
            <div className="meal-input-group">
              <label htmlFor={`meal-${meal.id}`} className="meal-label">
                Number of People:
              </label>
              <input
                id={`meal-${meal.id}`}
                type="number"
                min="0"
                value={meal.quantity}
                onChange={(e) => handleQuantityChange(meal.id, e.target.value)}
                className="meal-input"
                placeholder="0"
              />
            </div>
            <p className="subtotal">
              Subtotal: ${(meal.costPerPerson * meal.quantity).toLocaleString()}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default MealsSelection;
