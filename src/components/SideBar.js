import React from "react";
import Avatar from "../assets/profile.jpeg";
import SocialIcons from "./SocialIcons";
import ContactDetails from "./ContactDetails";

const SideBar = () => {
  return (
    <div className="app_main">
      <div className="d-flex flex-column flex-shrink-0 p-3 text-white bg-transparent">
        <img
          className="avatar d-block mx-auto mb-4 mt-5"
          src={Avatar}
          alt=""
          width="110"
          height="120"
        />
        <h3 className="mx-auto">Aruna Duraisamy</h3>
        <p className="mx-auto">Web Developer</p>
      </div>
      <SocialIcons />
      <hr className="mt-1" />
      <ContactDetails />
    </div>
  );
};

export default SideBar;
