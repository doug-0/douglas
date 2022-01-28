import React from 'react';
import { Link } from 'react-router-dom';
import './HomeBtn.css'
import './HomeBtnResponse.css';

export default function HomeBtn() {
  return (
    <div className="div-btn-home">
      <Link to="/home">
        <span className="brackets">{'{'}</span>
          dev-doug
        <span className="brackets">{'}'}</span>
      </Link>
    </div>
  );
}
