import React from 'react';
import { useNavigate } from 'react-router-dom';

const Card = ({ symbol }) => {
    const navigate = useNavigate();

    return (
      <div className="card">
        <div className="card_body">
          <h2 className="card_title">{symbol}</h2>
        </div>
        <button className="card_btn" onClick={() => navigate(`/stocks/:${symbol}`, { state: symbol})}>View Details</button>
      </div>
    );
}

export default Card;