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
    <div className="d-flex flex-column flex-shrink-0 text-white bg-transparent">
      <div className="list-group list-group-flush w-auto">
        <div
          className="list-group-item bg-transparent d-flex gap-1 p-0"
          aria-current="true"
          onMouseEnter={() => setOpacity("1")}
          onMouseLeave={() => setOpacity("0")}
        >
          <i
            className="bi bi-envelope-fill my-auto"
            style={{ fontSize: "1rem", color: "white" }}
          ></i>

          <div className="d-flex gap-2 justify-content-sm-center text-white">
            <div>
              <h6 className="my-2">aruna.durai.official@gmail.com</h6>
            </div>

            <div
              className="d-flex gap-2  justify-content-sm-center text-white"
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
          className="list-group-item bg-transparent justify-content-sm-center d-flex gap-2 py-2"
          aria-current="true"
        >
          <i
            className="bi bi-phone-vibrate-fill my-auto"
            style={{ fontSize: "1rem", color: "white" }}
          ></i>

          <div className="d-flex gap-2 justify-content-sm-center text-white">
            <div>
              <h6 className="my-2">+44 7459957809</h6>
            </div>
          </div>
        </div>
        <div
          className="list-group-item bg-transparent justify-content-sm-center d-flex gap-2 py-2"
          aria-current="true"
        >
          <i
            className="bi bi-geo-alt-fill my-auto"
            style={{ fontSize: "1rem", color: "white" }}
          ></i>

          <div className="d-flex gap-2 justify-content-between text-white">
            <div>
              <h6 className="my-2">Norwich, UK.</h6>
            </div>
          </div>
        </div>
        <div className="d-flex gap-2 justify-content-sm-center text-white">
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
    </div>
  );
};

export default ContactDetails;
