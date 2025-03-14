import React from "react";
import { assets } from "../assets/assets";

const StickyIcon = () => {
  return (
    <div className="stickyIcon flex-center">
      <a href="#">
        <img src={assets.WhatsApp_icon} alt="" className="stickyImg" />
      </a>
      <a href="#">
        <img src={assets.robot_icon} alt="" className="stickyImg" />
      </a>

      <img src={assets.stickyArrow_icon} alt="" className="stickyArrow" />
    </div>
  );
};

export default StickyIcon;
