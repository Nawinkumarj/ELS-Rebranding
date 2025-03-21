import React from 'react';
import { assets } from '../assets/assets';
import { useNavigate } from 'react-router-dom';

const ServiceCard = ({ serviceName ,serviceUrl }) => {

  const navigate = useNavigate();

  return (
    <div className="serviceCardContainer">

      <div className='serviceCardImg'>
        <img src={assets.ServiceCard_Img} alt="" />
      </div>

      <div className='serviceCardContent'>
        <h3 className="serviceName">{serviceName}</h3>
        <button onClick={()=> navigate(`/services/${serviceUrl}`)} className='ServiceCardBtn'>Read More &#8641;</button>
      </div>


      {/* <h3 className="serviceName">{serviceName}</h3>
      <div className="serviceCardImg">
        <img src={assets.ServiceCard_Img} alt="" />
      </div> */}
    </div>
  );
};

export default ServiceCard;
