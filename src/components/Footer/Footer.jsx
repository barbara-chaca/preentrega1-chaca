import React from "react";
import "./footer.css"
import { CiInstagram } from "react-icons/ci";

export const Footer = () => {
  return (
    <div className="footerContainer">
      <a href="https://www.instagram.com/ceramisu57/">
        <CiInstagram className="instagramLogo" />
      </a>
      <p className="instagramSite">/ceramisu57</p>
    </div>
  );
};
