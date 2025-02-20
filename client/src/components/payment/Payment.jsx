import React, { useState, useEffect } from 'react';
import { useNavigate } from "react-router-dom"; // Import useNavigate
import './payment.css';

const Payment = () => {
    const [selectedOption, setSelectedOption] = useState('Monthly');
    const [selectedPlan, setSelectedPlan] = useState('Super'); // New state for plan selection
    const navigate = useNavigate(); // Initialize navigate

    const pricingOptions = {
        Monthly: { Super: '99/Month', Premium: '149/Month' },
        Quarterly: { Super: '299/3Months', Premium: '499/3Months' },
        Yearly: { Super: '999/Year', Premium: '1499/Year' },
    };

    // Set fade-up animation class on load
    const [fadeInClass, setFadeInClass] = useState('');
    useEffect(() => {
        setFadeInClass('fade-in');
    }, []);

    const handleContinue = () => {
        // Perform any validations or actions here (e.g., saving plan details)
        navigate('/homepage'); // Navigate to Homepage
    };

    return (
        <div className={`payments-container ${fadeInClass}`}>
            <h1 className="payments-header">Go pro with Picta Pass</h1>
            <p className="payments-subtitle">
                Movies are life. TV is king. We totally get it. Which is why we’ve created a more premium personal media experience, just for you.
            </p>
            <p className="payments-switch-plans">
                <strong>Switch plans or cancel anytime.</strong>
            </p>

            {/* Payments Options Table */}
            <h2 className="table-header">Picta Pass Upgrade Options</h2>
            <div className="payments-table">
                <div className="table-row table-head">
                    <div className="table-cell"></div>
                    <div className="table-cell">Super</div>
                    <div className="table-cell">Premium</div>
                </div>
                <div className="table-row">
                    <div className="table-cell">All content</div>
                    <div className="table-cell"><i className="fas fa-check"></i></div>
                    <div className="table-cell"><i className="fas fa-check"></i></div>
                </div>
                <div className="table-row">
                    <div className="table-cell">Watch on TV or Laptop</div>
                    <div className="table-cell"><i className="fas fa-check"></i></div>
                    <div className="table-cell"><i className="fas fa-check"></i></div>
                </div>
                <div className="table-row">
                    <div className="table-cell">Ads free movies and shows</div>
                    <div className="table-cell"><i className="fas fa-times"></i></div>
                    <div className="table-cell"><i className="fas fa-check"></i></div>
                </div>
                <div className="table-row">
                    <div className="table-cell">Number of devices that can be logged in</div>
                    <div className="table-cell">2</div>
                    <div className="table-cell">4</div>
                </div>
                <div className="table-row">
                    <div className="table-cell">Max video quality</div>
                    <div className="table-cell">Full HD 1080p</div>
                    <div className="table-cell">4K 2160p + Dolby Vision</div>
                </div>
                <div className="table-row">
                    <div className="table-cell">Max audio quality</div>
                    <div className="table-cell">Dolby Atmos</div>
                    <div className="table-cell">Dolby Atmos</div>
                </div>
            </div>

            {/* Subscription Box */}
            <div className="subscription-box">
                {/* Plan Duration Selection */}
                <div className="plan-options">
                    {['Monthly', 'Quarterly', 'Yearly'].map((option) => (
                        <div
                            key={option}
                            className={`plan-option ${selectedOption === option ? 'selected' : ''}`}
                            onClick={() => setSelectedOption(option)}
                        >
                            {option}
                            {selectedOption === option && <i className="fas fa-check-circle"></i>}
                        </div>
                    ))}
                </div>

                {/* Plan Type Selection */}
                <div className="plan-boxes">
                    <div
                        className={`plan-box ${selectedPlan === 'Super' ? 'active-plan' : ''}`}
                        onClick={() => setSelectedPlan('Super')}
                    >
                        <h3>Super</h3>
                        <p className="price">
                            <sup>₹</sup>
                            {pricingOptions[selectedOption].Super.split('/')[0]}
                            <sub>/{pricingOptions[selectedOption].Super.split('/')[1]}</sub>
                        </p>
                    </div>
                    <div
                        className={`plan-box ${selectedPlan === 'Premium' ? 'active-plan' : ''}`}
                        onClick={() => setSelectedPlan('Premium')}
                    >
                        <h3>Premium</h3>
                        <p className="price">
                            <sup>₹</sup>
                            {pricingOptions[selectedOption].Premium.split('/')[0]}
                            <sub>/{pricingOptions[selectedOption].Premium.split('/')[1]}</sub>
                        </p>
                    </div>
                </div>
            </div>

            {/* Payment Button */}
            <button className="payment-button" onClick={handleContinue}>
                Continue with {selectedPlan}
            </button>
        </div>
    );
};

export default Payment;
