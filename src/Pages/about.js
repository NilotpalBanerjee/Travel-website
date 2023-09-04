import React from "react";
import { Link } from 'react-router-dom';
import Header1 from "../Component/header1";
import Footer from "../Component/footer";

function about() {
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
                <h2>About Us</h2>
                
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* end banner */}
      {/* start about us */}
      <section className="section-spacing about-us">
        <div className="container">
          <div className="row">
            <div className="col-lg-5 col-md-12 col-sm-12">
              <div className="about-us-left" >
                <h3 className="mt-n6">About Us</h3>
                <h2>Explore all tour of the world with us.</h2>
                <p>
                  Lorem Ipsum available, but the majority have suffered
                  alteration in some form, by injected humour, or randomised
                  words which don't look even slightly believable.
                </p>
                <div className="about-info">
                  <div className="d-flex">
                    <div className="flex-shrink-0">
                      <span className="align-self-start mr-3 media-icon">
                        <i className="far fa-compass" />
                      </span>
                    </div>
                    <div className="flex-grow-1 ms-3">
                      <h5 className="mt-0">Tour guide</h5>
                      <p>
                        Lorem Ipsum available, but the majority have suffered
                        alteration in some.
                      </p>
                    </div>
                  </div>
                  <div className="d-flex">
                    <div className="flex-shrink-0">
                      <span className="align-self-start mr-3 media-icon">
                        <i className="fas fa-briefcase" />
                      </span>
                    </div>
                    <div className="flex-grow-1 ms-3">
                      <h5 className="mt-0">Friendly price</h5>
                      <p>
                        Lorem Ipsum available, but the majority have suffered
                        alteration in some.
                      </p>
                    </div>
                  </div>
                  <div className="d-flex">
                    <div className="flex-shrink-0">
                      <span className="align-self-start mr-3 media-icon">
                        <i className="fas fa-umbrella-beach" />
                      </span>
                    </div>
                    <div className="flex-grow-1 ms-3">
                      <h5 className="mt-0">Reliable tour</h5>
                      <p>
                        Lorem Ipsum available, but the majority have suffered
                        alteration in some.
                      </p>
                    </div>
                  </div>
                </div>
                <div className="cta-button">
                  <a href="booking.html" className="btn btn-primary">
                    Booking Now
                  </a>
                </div>
              </div>
            </div>
            <div className="col-lg-7 col-md-12 col-sm-12">
              <div className="about-right">
                <img className="tilt-img" src="img/about/1.png" alt="" />
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* end about us */}
      {/* start features */}
      <section
        className="section-spacing features"
        style={{ backgroundImage: "url(img/features/1.png)" }}
      >
        <div className="container">
          <div className="row justify-content-end">
            <div className="col-lg-5">
              <h3 className="mt-n6">Love where you're going</h3>
              <h2>Learn new things by traveling the world.</h2>
              <p>
                Lorem Ipsum available, but the majority have suffered alteration
                in some form, by injected humour, or randomised words which
                don't look even slightly believable.
              </p>
              <div className="play-button" >
                <Link
                  to="javascript:void(0)"
                  data-bs-toggle="modal"
                  data-bs-target="#video-modal"
                >
                  <i className="fa fa-play" />
                </Link>
              </div>
              <div className="features-items" >
                <div className="feature-item">
                  <h3>
                    <span className="counter">500</span>k
                  </h3>
                  <h4 className="mb-0">Our local guides</h4>
                </div>
                <div className="feature-item">
                  <h3>
                    <span className="counter">100</span>%
                  </h3>
                  <h4 className="mb-0">Trusted tour agency</h4>
                </div>
                <div className="feature-item">
                  <h3>
                    <span className="counter">99</span>%
                  </h3>
                  <h4 className="mb-0">Travel happiness</h4>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* end features */}
      {/* start team sec */}
      <section className="section-spacing team-sec">
        <div className="container">
          <div className="row" >
            <div className="col-md-12">
              <div className="about-us-left text-center">
                <h3 className="mt-n6">Our Team</h3>
                <h2>Meet Expert People</h2>
              </div>
            </div>
            <div className="col-lg-4 col-md-6 col-sm-6">
              <div className="team-item">
                <img src="img/about/team1.png" alt="" />
                <div className="team-body">
                  <div className="team-text">
                    <h4>Jony Bristow</h4>
                    <p>Tour Guide</p>
                  </div>
                  <div className="h-border" />
                  <ul className="team-social">
                    <li className="share-icon">
                      <a href="#">
                        <i className="fab fa-facebook-f" />
                      </a>
                    </li>
                    <li className="share-icon">
                      <a href="#">
                        <i className="fab fa-twitter" />
                      </a>
                    </li>
                    <li className="share-icon">
                      <a href="#">
                        <i className="fab fa-instagram" />
                      </a>
                    </li>
                    <li className="share-icon">
                      <a href="#">
                        <i className="fab fa-linkedin-in" />
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-6 col-sm-6">
              <div className="team-item">
                <img src="img/about/team2.png" alt="" />
                <div className="team-body">
                  <div className="team-text">
                    <h4>David Warner</h4>
                    <p>Tour Guide</p>
                  </div>
                  <div className="h-border" />
                  <ul className="team-social">
                    <li className="share-icon">
                      <a href="#">
                        <i className="fab fa-facebook-f" />
                      </a>
                    </li>
                    <li className="share-icon">
                      <a href="#">
                        <i className="fab fa-twitter" />
                      </a>
                    </li>
                    <li className="share-icon">
                      <a href="#">
                        <i className="fab fa-instagram" />
                      </a>
                    </li>
                    <li className="share-icon">
                      <a href="#">
                        <i className="fab fa-linkedin-in" />
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-6 col-sm-6">
              <div className="team-item">
                <img src="img/about/team3.png" alt="" />
                <div className="team-body">
                  <div className="team-text">
                    <h4>Andro Rassel</h4>
                    <p>Tour Guide</p>
                  </div>
                  <div className="h-border" />
                  <ul className="team-social">
                    <li className="share-icon">
                      <a href="#">
                        <i className="fab fa-facebook-f" />
                      </a>
                    </li>
                    <li className="share-icon">
                      <a href="#">
                        <i className="fab fa-twitter" />
                      </a>
                    </li>
                    <li className="share-icon">
                      <a href="#">
                        <i className="fab fa-instagram" />
                      </a>
                    </li>
                    <li className="share-icon">
                      <a href="#">
                        <i className="fab fa-linkedin-in" />
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* end team sec */}

      <Footer />
    </div>
  );
}

export default about;
