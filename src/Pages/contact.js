import React from "react";
import Header1 from "../Component/header1";
import Footer from "../Component/footer";

function contact() {
  return (
    <div>
      <Header1 />

      {/* start banner */}
      <section
        className="inner-banner"
        style={{ backgroundImage: "url(img/banner/sub-page.png)" }}
      >
        <div className="container">
          <div className="row">
            <div className="col-md-12 text-center">
              <div className="banner-content">
                <h2>Contact Us</h2>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* end banner */}

      {/* start contact */}
      <section className="section-spacing contact">
        <div className="container">
          <div className="row">
            <div className="col-md-6">
              <div className="contact-info">
                <div className="contact-icon">
                  <a href="#">
                    <i className="far fa-envelope" />
                  </a>
                  <p className="contact-text">Email Address: </p>
                </div>
                <div className="h-border" />
                <div className="contact-sub-text">
                  <p>
                    <a href="mailto:contactinfo@gmail.com">
                      contactinfo@gmail.com
                    </a>
                  </p>
                  <p>
                    <a href="mailto:support@gmail.com">support@gmail.com</a>
                  </p>
                </div>
              </div>
            </div>
            <div className="col-md-6">
              <div className="contact-info">
                <div className="contact-icon">
                  <a href="#">
                    <i className="fas fa-phone-alt" />
                  </a>
                  <p className="contact-text">Phone Number: </p>
                </div>
                <div className="h-border" />
                <div className="contact-sub-text">
                  <p>
                    <a href="#">+ 00 12345 67890</a>
                  </p>
                  <p>
                    <a href="#">+ 00 09876 54321</a>
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="row align-items-center contact-content">
            <div className="col-md-5 contact-img">
              <img
                className="tilt-img"
                src="img/contact/contact-img.png"
                alt="img"
              />
            </div>
            <div className="col-md-7">
              <div className="contact-form">
                <form>
                  <div className="mb-4">
                    <input
                      type="text"
                      className="form-control"
                      id="your_name"
                      placeholder="Enter your name"
                    />
                  </div>
                  <div className="mb-4">
                    <input
                      type="email"
                      className="form-control"
                      id="email_address"
                      placeholder="Enter email address"
                    />
                  </div>
                  <div className="mb-3">
                    <textarea
                      className="form-control"
                      id="keyword"
                      rows={6}
                      placeholder="Type you keyword"
                      defaultValue={""}
                    />
                  </div>
                  <button type="submit" className="btn btn-primary">
                    Send Message
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
        <div className="col-12 contact-map">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m10!1m8!1m3!1d3988.8270523294163!2d103.8527512!3d1.2772197!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2sbd!4v1632647635261!5m2!1sen!2sbd"
            className="google-map"
            style={{ border: 0 }}
            allowFullScreen=""
            loading="lazy"
          />
        </div>
      </section>
      {/* end contact */}

      <Footer />
    </div>
  );
}

export default contact;
