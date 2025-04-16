import React from "react";
import "./offers.css";

const Offers: React.FC = () => {
  return (
    <div className="offers">
      <div className="opening">
        <h4>Open hours</h4>
        <div className="list">
          <div className="item">
            <span>Monday - Friday</span>
            <span>4:00 pm - 11:00 pm</span>
          </div>
          <div className="item">
            <span>Saturday:</span>
            <span>2:00 pm - 11:00 pm</span>
          </div>
          <div className="item">
            <span>Sunday:</span>
            <span>2:00 pm - 11:00 pm</span>
          </div>
        </div>
        <h5>Visit Us</h5>
      </div>
      <div className="image"></div>
      <div className="happyhour">
        <h4>Happy hour</h4>
        <div className="list">
          <div className="item">
            <span>Monday - Friday</span>
            <span>4:00 pm - 7:00 pm</span>
          </div>

          <div className="item">
            <span>2 cocktails @200</span>
            <span>15% off all cocktails</span>
          </div>
          
          <div className="item">
            <span>Monday - Friday</span>
            <span>7:00 pm - 11:00 pm</span>
          </div>

          <div className="item">
            <span>2 cocktails @300</span>
            <span>10% off all spirits</span>
          </div>
        </div>
        <h5>Visit Us</h5>
      </div>
    </div>
  );
};

export default Offers;
