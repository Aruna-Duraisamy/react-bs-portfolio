import React, { useState } from "react";
import resume from "../assets/Aruna_Duraisamy_Resume.pdf";
import { CopyToClipboard } from "react-copy-to-clipboard";

const ContactDetails = () => {
  const [opacity, setOpacity] = useState("0");
  const copyStyles = {
    cursor: "pointer",
    opacity: `${opacity}`,
  };

  const [copied, setCopied] = useState(false);
  const [email, setEmail] = useState("aruna.durai.official@gmail.com");
  const [iconClass, setIconClass] = useState("bi-clipboard-fill text-white");
  return (
    <div className="d-grid gap-2 d-sm-flex justify-content-sm-center my-4">
      <div className="list-group list-group-flush w-auto">
        <div
          className="list-group-item bg-transparent d-flex gap-3 py-2"
          aria-current="true"
          onMouseEnter={() => setOpacity("1")}
          onMouseLeave={() => setOpacity("0")}
        >
          <i
            className="bi bi-envelope-fill me-3"
            style={{ fontSize: "2rem", color: "white" }}
          ></i>

          <div className="d-flex gap-2 w-100 justify-content-between text-white">
            <div>
              <h6 className="my-3">aruna.durai.official@gmail.com</h6>
            </div>

            <div
              className="d-flex gap-2 w-100 justify-content-between text-white"
              style={copyStyles}
            >
              <CopyToClipboard
                text={email}
                onCopy={() => {
                  setCopied((current) => !current);
                  setIconClass("bi-check text-success");
                  setInterval(() => {
                    setIconClass("bi-clipboard-fill text-white");
                  }, 2000);
                }}
              >
                <i className={`bi ${iconClass} my-auto`}></i>
              </CopyToClipboard>
            </div>
          </div>
        </div>
        <div
          className="list-group-item bg-transparent d-flex gap-3 py-2"
          aria-current="true"
        >
          <i
            className="bi bi-phone-vibrate-fill me-3"
            style={{ fontSize: "2rem", color: "white" }}
          ></i>

          <div className="d-flex gap-2 w-100 justify-content-between text-white">
            <div>
              <h6 className="my-3">+44 7459957809</h6>
            </div>
          </div>
        </div>
        <div
          className="list-group-item bg-transparent d-flex gap-3 py-2"
          aria-current="true"
        >
          <i
            className="bi bi-geo-alt-fill me-3"
            style={{ fontSize: "2rem", color: "white" }}
          ></i>

          <div className="d-flex gap-2 w-100 justify-content-between text-white">
            <div>
              <h6 className="my-3">Norwich, UK.</h6>
            </div>
          </div>
        </div>
        <a
          href={resume}
          download="Aruna_Duraisamy_Resume.pdf"
          className="btn btn-primary"
        >
          <i
            className="bi bi-download"
            style={{ fontSize: "1rem", color: "white" }}
          ></i>
          &nbsp;Download Resume
        </a>
      </div>
    </div>
  );
};

export default ContactDetails;
