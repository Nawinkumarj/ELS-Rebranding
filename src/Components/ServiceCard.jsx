import React from 'react';
import { assets } from '../assets/assets';

const ServiceCard = ({ serviceName }) => {
  return (
    <div className="serviceCardContainer flex-center">
      <h3 className="serviceName">{serviceName}</h3>
      <div className="serviceCardImg">
        <img src={assets.ServiceCard_Img} alt="" />
      </div>
    </div>
  );
};

export default ServiceCard;
