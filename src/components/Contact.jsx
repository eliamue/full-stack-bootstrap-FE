import React from "react";
import "../styles/About.css";

export default function Contact() {
  return (
    <div>
      <div className="contact-body">
        <h1>Contact</h1>
        <section className="nav-links">
          <div className="nav-link">
            <a href="mailto:eliamue@live.com" alt="email">
              <i
                id="email-icon" class="fa fa-solid fa-envelope"
                style={{ fontSize: "40px", color: "white", padding: "20px"  }}
              ></i>
            </a>
          </div>
          <div className="nav-link">
            <a href="https://www.linkedin.com/in/eliamue/">
              <i
                id="linkedin-icon" class="fa fa-linkedin-square"
                style={{ fontSize: "40px", color: "white", padding: "20px"  }}
              ></i>
            </a>
          </div>
          <div className="nav-link">
            <a href="https://eliamue.netlify.app/">
              <i
                id="portfolio-icon" class="fa fa-solid fa-briefcase"
                style={{ fontSize: "40px", color: "white", padding: "20px"  }}
              ></i>
            </a>
          </div>
          <div className="nav-link">
            <a href="https://github.com/eliamue">
              <i
                id="github-icon" class="fa fa-brands fa-github"
                style={{ fontSize: "40px", color: "white", padding: "20px" }}
              ></i>
            </a>
          </div>
        </section>
      </div>
    </div>
  );
}
