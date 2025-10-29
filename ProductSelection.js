import React, { useState } from 'react';
import NavigationBar from './NavigationBar';
import RoomSelection from './RoomSelection';
import AddOnsSelection from './AddOnsSelection';
import MealsSelection from './MealsSelection';
import DetailsPopup from './DetailsPopup';

const ProductSelection = () => {
  const [showDetails, setShowDetails] = useState(false);

  const handleShowDetails = () => {
    setShowDetails(true);
  };

  const handleCloseDetails = () => {
    setShowDetails(false);
  };

  return (
    <div className="product-selection-page">
      <NavigationBar onShowDetails={handleShowDetails} />
      <div className="product-content">
        <RoomSelection />
        <AddOnsSelection />
        <MealsSelection />
      </div>
      <DetailsPopup isOpen={showDetails} onClose={handleCloseDetails} />
    </div>
  );
};

export default ProductSelection;
