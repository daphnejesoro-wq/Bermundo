import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { incrementAddOn, decrementAddOn } from '../redux/addOnsSlice';

const AddOnsSelection = () => {
  const addOns = useSelector((state) => state.addOns.items);
  const dispatch = useDispatch();

  const handleIncrement = (id) => {
    dispatch(incrementAddOn(id));
  };

  const handleDecrement = (id) => {
    dispatch(decrementAddOn(id));
  };

  return (
    <section id="addons-section" className="selection-section">
      <h2 className="section-title">Add-ons Selection</h2>
      <div className="items-grid">
        {addOns.map((addOn) => (
          <div key={addOn.id} className="item-card">
            <img src={addOn.image} alt={addOn.name} className="item-image" />
            <h3 className="item-name">{addOn.name}</h3>
            <p className="item-cost">${addOn.cost} each</p>
            <div className="quantity-control">
              <button 
                onClick={() => handleDecrement(addOn.id)} 
                className="quantity-btn"
                disabled={addOn.quantity === 0}
              >
                -
              </button>
              <span className="quantity-display">{addOn.quantity}</span>
              <button 
                onClick={() => handleIncrement(addOn.id)} 
                className="quantity-btn"
              >
                +
              </button>
            </div>
            <p className="subtotal">
              Subtotal: ${(addOn.cost * addOn.quantity).toLocaleString()}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default AddOnsSelection;
