import React from "react";

const FindMeOn = ({ linkedin, github, instagram }) => {
  return (
    <div className="col-md-4 col-lg-4 col-xl-4 col-xxl-4 offset-sm-4 find-me-on">
      <h4 className="text-warning pb-2" id="find-me-on">
        Find Me On
      </h4>
      <div className="d-flex justify-content-start ps-1">
        <p className="fs-4">
          <a href={linkedin} className="col text-white me-4" id="linkedin">
            <i className="fab fa-linkedin"></i>
          </a>
        </p>
        <p className="fs-4">
          <a href={github} className="col text-white me-4" id="github">
            <i className="fab fa-github"></i>
          </a>
        </p>
        <p className="fs-4">
          <a href={instagram} className="col text-white me-4" id="instagram">
            <i className="fab fa-instagram"></i>
          </a>
        </p>
      </div>
    </div>
  );
};

export default FindMeOn;
