import React from "react";
import Copyright from "./Copyright";
import ContactInfo from "./ContactInfo";
import FindMeOn from "./FindMeOn";

const Footer = () => {
  const links = {
    linkedin: "https://www.linkedin.com/in/rui-carvalho-9b826b2a2",
    github: "https://github.com/iamruicarvalho",
    instagram: "https://www.instagram.com/ruipedrobc/",
  };

  return (
    <footer className="bg-dark text-bg-dark">
      <div className="container p-4">
        <div className="row row-cols-2">
          <ContactInfo />
          <FindMeOn {...links} />
        </div>
        <Copyright />
      </div>
    </footer>
  );
};

export default Footer;
