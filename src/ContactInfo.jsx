import React from "react";

const ContactInfo = () => {
  return (
    <div className="col-md-4 col-lg-4 col-xl-4 col-xxl-4 contact-info">
      <h4 className="text-warning pb-2" id="contact-info">
        Contact Info
      </h4>
      <p className="mb-2" id="email">
        <i className="fas fa-envelope me-2"></i>ruipedrobc@gmail.com
      </p>
      <p className="mb-2" id="location">
        <i className="fas fa-location-dot me-2"></i>Póvoa de Varzim, Porto,
        Portugal
      </p>
    </div>
  );
};

export default ContactInfo;
