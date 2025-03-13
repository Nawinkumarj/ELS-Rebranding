import React from "react";
import { useParams } from "react-router-dom";
import { servicesData } from "../__mocks__data/ServiceData";

const SubServiceDetail = () => {
  const { serviceUrl, subServiceUrl } = useParams();

  // Find the main service using `url` instead of `id`
  const service = servicesData.find((service) => service.url === serviceUrl);

  // Find the sub-service using `url`
  const subService = service?.subServices.find(
    (sub) => sub.url === decodeURIComponent(subServiceUrl) // FIX: Use `subServiceUrl`
  );

  if (!service || !subService) {
    return <h2>Sub-service not found</h2>;
  }

  return (
    <div className="sub-service-detail">
      <h1>{subService.name}</h1>
      <p>{subService.description}</p>
    </div>
  );
};

export default SubServiceDetail;
