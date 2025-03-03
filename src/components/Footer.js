import React from "react";
import "@fortawesome/fontawesome-free/css/all.min.css";


const Footer = () => {
  return (
    <footer className="text-center text-lg-start bg-body-tertiary text-muted">
      {/* Section: Social media */}
      <section className="d-flex justify-content-center justify-content-lg-between p-4 border-bottom">
        {/* Left */}
        <div className="me-5 d-none d-lg-block">
          <span>Get connected with us on social networks:</span>
        </div>
        {/* Left */}

        {/* Right */}
        <div>
          {[
            "facebook-f",
            "twitter",
            "google",
            "instagram",
            "linkedin",
            "github",
          ].map((icon, index) => (
            <a key={index} href="#" className="me-4 text-reset">
              <i className={`fab fa-${icon}`}></i>
            </a>
          ))}
        </div>
        {/* Right */}
      </section>
      {/* Section: Social media */}

      {/* Section: Links  */}
      <section>
        <div className="container text-center text-md-start mt-5">
          <div className="row mt-3">
            {/* Company Info */}
            <div className="col-md-3 col-lg-4 col-xl-3 mx-auto mb-4">
              <h6 className="text-uppercase fw-bold mb-4">
                <i className="fas fa-gem me-3"></i>Company name
              </h6>
              <p>
                Here you can use rows and columns to organize your footer content.
                Lorem ipsum dolor sit amet, consectetur adipisicing elit.
              </p>
            </div>

            {/* Products */}
            <div className="col-md-2 col-lg-2 col-xl-2 mx-auto mb-4">
              <h6 className="text-uppercase fw-bold mb-4">Products</h6>
              {["Angular", "React", "Vue", "Laravel"].map((product, index) => (
                <p key={index}>
                  <a href="#!" className="text-reset">
                    {product}
                  </a>
                </p>
              ))}
            </div>

            {/* Useful Links */}
            <div className="col-md-3 col-lg-2 col-xl-2 mx-auto mb-4">
              <h6 className="text-uppercase fw-bold mb-4">Useful links</h6>
              {["Pricing", "Settings", "Orders", "Help"].map((link, index) => (
                <p key={index}>
                  <a href="#!" className="text-reset">
                    {link}
                  </a>
                </p>
              ))}
            </div>

            {/* Contact */}
            <div className="col-md-4 col-lg-3 col-xl-3 mx-auto mb-md-0 mb-4">
              <h6 className="text-uppercase fw-bold mb-4">Contact</h6>
              <p>
                <i className="fas fa-home me-3"></i> New York, NY 10012, US
              </p>
              <p>
                <i className="fas fa-envelope me-3"></i>
                info@example.com
              </p>
              <p>
                <i className="fas fa-phone me-3"></i> + 01 234 567 88
              </p>
              <p>
                <i className="fas fa-print me-3"></i> + 01 234 567 89
              </p>
            </div>
          </div>
        </div>
      </section>
      {/* Section: Links  */}
      

      {/* Copyright */}
      <div className="text-center p-4" style={{ backgroundColor: "rgba(0, 0, 0, 0.05)" }}>
        © 2021 Copyright:
        <a className="text-reset fw-bold" href="https://mdbootstrap.com/">
          MDBootstrap.com
        </a>
      </div>
    </footer>
  );
};

export default Footer;
