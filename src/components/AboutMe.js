import React from "react";
import Avatar from "../assets/profile.jpeg";
import ContactDetails from "./ContactDetails";

const AboutMe = () => {
  return (
    <div>
      <div className="px-4 py-5 my-5 text-center">
        <img
          className="avatar d-block mx-auto mb-4"
          src={Avatar}
          alt=""
          width="110"
          height="120"
        />
        <h1 className="display-5 fw-bold">Aruna Duraisamy</h1>
        <h3 className="display-7">Web Developer</h3>
        <div className="col-lg-7 mx-auto">
          <p className="lead mb-4">
            A Returner, with 7 years of experience in Web development. I'm a
            self motivated person, good in diagnostics, with a passion for
            solving problems and a thirst for learning.
          </p>
          <div className="d-grid gap-2 d-sm-flex justify-content-sm-center">
            <ul className="nav">
              <li className="d-block mx-4 mb-1">
                <a href="https://www.linkedin.com/in/aruna-duraisamy/">
                  <i
                    className="bi bi-linkedin"
                    style={{ fontSize: "2rem", color: "white" }}
                  ></i>
                </a>
              </li>
              <li className="d-block mx-4 mb-1">
                <a href="https://github.com/Aruna-Duraisamy">
                  <i
                    className="bi bi-github"
                    style={{ fontSize: "2rem", color: "white" }}
                  ></i>
                </a>
              </li>
            </ul>
          </div>
        </div>

        <ContactDetails />
      </div>
    </div>
  );
};

export default AboutMe;
