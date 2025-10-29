import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { incrementRoom, decrementRoom } from '../redux/roomsSlice';

const RoomSelection = () => {
  const rooms = useSelector((state) => state.rooms.items);
  const dispatch = useDispatch();

  const handleIncrement = (id) => {
    dispatch(incrementRoom(id));
  };

  const handleDecrement = (id) => {
    dispatch(decrementRoom(id));
  };

  return (
    <section id="rooms-section" className="selection-section">
      <h2 className="section-title">Room Selection</h2>
      <div className="items-grid">
        {rooms.map((room) => (
          <div key={room.id} className="item-card">
            <img src={room.image} alt={room.name} className="item-image" />
            <h3 className="item-name">{room.name}</h3>
            <p className="item-info">Capacity: {room.capacity} people</p>
            <p className="item-cost">${room.cost.toLocaleString()} each</p>
            <div className="quantity-control">
              <button 
                onClick={() => handleDecrement(room.id)} 
                className="quantity-btn"
                disabled={room.quantity === 0}
              >
                -
              </button>
              <span className="quantity-display">{room.quantity}</span>
              <button 
                onClick={() => handleIncrement(room.id)} 
                className="quantity-btn"
              >
                +
              </button>
            </div>
            <p className="subtotal">
              Subtotal: ${(room.cost * room.quantity).toLocaleString()}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default RoomSelection;
