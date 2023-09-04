import React from "react";
import Header1 from "../Component/header1";
import Footer from "../Component/footer";
function destinations() {
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
                <h2>Destinations</h2>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* end banner */}

      {/* start destination */}
      <section className="section-spacing inverse-bg destinations">
        <div className="container">
          <div className="row">
            <div className="col-md-6 col-12">
              <div className="destination-item">
                <a href="tours">
                  <img src="img/destinations/1.png" alt="" />
                  <div className="info-overlay">
                    <h4>Malé</h4>
                    <h3>Maldives</h3>
                  </div>
                </a>
              </div>
            </div>
            <div className="col-md-6 col-12">
              <div className="destination-item">
                <a href="tours">
                  <img src="img/destinations/2.png" alt="" />
                  <div className="info-overlay">
                    <h4>Bangkok</h4>
                    <h3>Thailand</h3>
                  </div>
                </a>
              </div>
            </div>
            <div className="col-md-4 col-12">
              <div className="destination-item item">
                <a href="tours">
                  <img src="img/destinations/3.png" alt="" />
                  <div className="info-overlay">
                    <h4>Kuala Lumpur</h4>
                    <h3>Malaysia</h3>
                  </div>
                </a>
              </div>
            </div>
            <div className="col-md-4 col-12">
              <div className="destination-item item">
                <a href="tours">
                  <img src="img/destinations/4.png" alt="" />
                  <div className="info-overlay">
                    <h4>Kathmandu</h4>
                    <h3>Nepal</h3>
                  </div>
                </a>
              </div>
            </div>
            <div className="col-md-4 col-12">
              <div className="destination-item item">
                <a href="tours">
                  <img src="img/destinations/5.png" alt="" />
                  <div className="info-overlay">
                    <h4>Jakarta</h4>
                    <h3>Indonesia</h3>
                  </div>
                </a>
              </div>
            </div>
            <div className="col-md-4 col-12">
              <div className="destination-item item">
                <a href="tours">
                  <img src="img/destinations/5.png" alt="" />
                  <div className="info-overlay">
                    <h4>Kuala Lumpur</h4>
                    <h3>Malaysia</h3>
                  </div>
                </a>
              </div>
            </div>
            <div className="col-md-4 col-12">
              <div className="destination-item item">
                <a href="tours">
                  <img src="img/destinations/3.png" alt="" />
                  <div className="info-overlay">
                    <h4>Kathmandu</h4>
                    <h3>Nepal</h3>
                  </div>
                </a>
              </div>
            </div>
            <div className="col-md-4 col-12">
              <div className="destination-item item mb-0">
                <a href="tours">
                  <img src="img/destinations/4.png" alt="" />
                  <div className="info-overlay">
                    <h4>Jakarta</h4>
                    <h3>Indonesia</h3>
                  </div>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* end destination */}

      <Footer />
    </div>
  );
}

export default destinations;
