import React from 'react';

const NavigationBar = ({ onShowDetails }) => {
  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <nav className="navigation-bar">
      <div className="nav-brand">ConferenceHub Planner</div>
      <div className="nav-links">
        <button onClick={() => scrollToSection('rooms-section')} className="nav-link">
          Room Selection
        </button>
        <button onClick={() => scrollToSection('addons-section')} className="nav-link">
          Add-ons
        </button>
        <button onClick={() => scrollToSection('meals-section')} className="nav-link">
          Meals
        </button>
        <button onClick={onShowDetails} className="show-details-btn">
          Show Details
        </button>
      </div>
    </nav>
  );
};

export default NavigationBar;
