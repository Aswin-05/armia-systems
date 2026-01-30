import React from 'react'
import './FeatureBox.css'

const FeatureBox = ({ iconClass, title, subtitle, boxClass, svg }) => (
  <div className={`feature-box`} >
    <div className={`icon-circle ${boxClass}`}>
      <img src={svg} alt={title} />
    </div>
    <div className="feature-text">
      <h6>{title}</h6>
      <p>{subtitle}</p>
    </div>
  </div>
);

export default FeatureBox