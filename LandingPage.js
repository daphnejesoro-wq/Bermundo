import React from 'react';
import { useNavigate } from 'react-router-dom';

const LandingPage = () => {
  const navigate = useNavigate();

  const handleGetStarted = () => {
    navigate('/products');
  };

  return (
    <div className="landing-page">
      <div className="landing-content">
        <img 
          src="https://images.unsplash.com/photo-1540575467063-178a50c2df87?w=400&h=300&fit=crop" 
          alt="Conference" 
          className="landing-image"
        />
        <h1 className="company-name">ConferenceHub</h1>
        <p className="company-description">
          Welcome to ConferenceHub, your premier destination for planning exceptional 
          conference experiences. We provide comprehensive venue and service solutions 
          to make your events memorable and successful. From state-of-the-art auditoriums 
          to intimate meeting rooms, complete with all the equipment and catering you need, 
          we've got you covered. Let us help you create the perfect environment for your 
          next big event.
        </p>
        <button className="get-started-btn" onClick={handleGetStarted}>
          Get Started
        </button>
      </div>
    </div>
  );
};

export default LandingPage;
