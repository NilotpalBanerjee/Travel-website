
import React from "react";
import Header from "../Component/header";
import Footer from "../Component/footer";

function home() {
  return (
    <div>
      <Header />
      {/* start banner */}
      <section className="carousel slide" id="banner" data-bs-ride="carousel">
        <div className="carousel-inner">
          <div className="carousel-item active">
            <div className="banner-caption">
              <div className="container">
                <div className="row">
                  <div className="col-md-6">
                    <div className="hero-text">
                      <h3 className="animated fadeInDown">
                        Explore Your Travel
                      </h3>
                      <h1 className="animated fadeInUp">
                        Start planning your dream trip today!
                      </h1>
                      <p className="animated fadeInUp">
                        I travel not to go anywhere, but to go. I travel for
                        travel's sake the great affair is to move.
                      </p>
                      <div className="banner-button-group">
                        <a
                          href="contact"
                          className="btn btn-primary animated fadeInUp"
                        >
                          Contact Us
                        </a>
                        <a
                          href="tours"
                          className="btn btn-primary learn-more animated fadeInUp"
                        >
                          Learn More
                        </a>
                      </div>
                    </div>
                  </div>
                  <div className="col-md-6">
                    <img className="tilt-img" src="img/banner/slide-2.png" />
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="carousel-item">
            <div className="banner-caption">
              <div className="container">
                <div className="row">
                  <div className="col-md-6">
                    <div className="hero-text">
                      <h3 className="animated fadeInLeft">
                        Explore Your Travel
                      </h3>
                      <h1 className="animated fadeInLeft">
                        Trusted Travel Agency
                      </h1>
                      <p className="animated fadeInLeft">
                        I travel not to go anywhere, but to go. I travel for
                        travel's sake the great affair is to move.
                      </p>
                      <div className="banner-button-group">
                        <a
                          href="contact"
                          className="btn btn-primary animated fadeInUp"
                        >
                          Contact Us
                        </a>
                        <a
                          href="tours"
                          className="btn btn-primary learn-more animated fadeInUp"
                        >
                          Learn More
                        </a>
                      </div>
                    </div>
                  </div>
                  <div className="col-md-6">
                    <img
                      className="tilt-img"
                      src="img/banner/slide-2.png"
                      alt="Slider Image"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="carousel-item">
            <div className="banner-caption">
              <div className="container">
                <div className="row">
                  <div className="col-md-6">
                    <div className="hero-text">
                      <h3 className="animated fadeInRight">
                        Explore Your Travel
                      </h3>
                      <h1 className="animated fadeInRight">
                        Get Exclusive Tour
                      </h1>
                      <p className="animated fadeInRight">
                        I travel not to go anywhere, but to go. I travel for
                        travel's sake the great affair is to move.
                      </p>
                      <div className="banner-button-group">
                        <a
                          href="contact"
                          className="btn btn-primary animated fadeInUp"
                        >
                          Contact Us
                        </a>
                        <a
                          href="tours"
                          className="btn btn-primary learn-more animated fadeInUp"
                        >
                          Learn More
                        </a>
                      </div>
                    </div>
                  </div>
                  <div className="col-md-6">
                    <img
                      className="tilt-img"
                      src="img/banner/slide-3.png"
                      alt="Slider Image"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
          <button
            className="carousel-control-prev"
            type="button"
            data-bs-target="#banner"
            data-bs-slide="prev"
          >
            <span className="carousel-control-prev-icon" aria-hidden="true" />
            <span className="visually-hidden">Previous</span>
          </button>
          <button
            className="carousel-control-next"
            type="button"
            data-bs-target="#banner"
            data-bs-slide="next"
          >
            <span className="carousel-control-next-icon" aria-hidden="true" />
            <span className="visually-hidden">Next</span>
          </button>
          <div className="shape1 d-none d-lg-block">
            <img src="img/banner/banner-shape1.png" alt="" />
          </div>
          <div className="shape2 d-none d-lg-block">
            <img src="img/banner/banner-shape2.png" alt="" />
          </div>
          <div className="shape3 d-none d-lg-block">
            <img src="img/banner/banner-shape3.png" alt="" />
          </div>
        </div>
      </section>
      {/* end banner */}

      {/* start destination */}
      <section className="section-spacing inverse-bg destinations">
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <div className="section-title text-center">
                <h3 className="mt-n6">Destinations</h3>
                <h2 className="mb-0">Choose Your Place</h2>
              </div>
            </div>
          </div>
          <div className="row" >
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
              <div className="destination-item item mb-0">
                <a href="tours">
                  <img src="img/destinations/5.png" alt="" />
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

      {/* start about us */}
      <section className="section-spacing about-us">
        <div className="container">
          <div className="row">
            <div className="col-md-12 col-lg-5">
              <div className="about-us-left" >
                <h3 className="mt-n6">About Us</h3>
                <h2>Explore all tour of the world with us.</h2>
                <p>
                  Lorem Ipsum available, but the majority have suffered
                  alteration in some form, by injected humour, or randomised
                  words which don't look even slightly believable.
                </p>
                <div className="about-info" >
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
                  <a href="booking" className="btn btn-primary">
                    Booking Now
                  </a>
                </div>
              </div>
            </div>
            <div className="col-md-12 col-lg-7">
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
            <div className="col-md-7 col-lg-5" >
              <h3 className="mt-n6">Love where you're going</h3>
              <h2>Learn new things by traveling the world.</h2>
              <p>
                Lorem Ipsum available, but the majority have suffered alteration
                in some form, by injected humour, or randomised words which
                don't look even slightly believable.
              </p>
              <div className="play-button" >
                <a
                  href="javascript:void(0)"
                  data-bs-toggle="modal"
                  data-bs-target="#video-modal"
                >
                  <i className="fa fa-play" />
                </a>
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

      {/* start popular tours */}
      <section className="section-spacing tours">
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <div className="section-title text-center">
                <h3 className="mt-n6">Featured Tours</h3>
                <h2 className="mb-0">Most Popular Tours</h2>
              </div>
            </div>
          </div>
          <div className="row" >
            <div className="col-md-6 col-lg-4">
              <a href="tours">
                <div className="card tour-card wow fadeIn">
                  <img className="card-img-top" src="img/tour/1.png" alt="" />
                  <span className="tour-duration">
                    <i className="fas fa-history" /> 12 Days{" "}
                  </span>
                  <div className="card-body">
                    <div className="tour-tags">
                      <span className="tour-price">From $50.00</span>
                      <span className="tour-rating">
                        <i className="fas fa-star" />
                        <i className="fas fa-star" />
                        <i className="fas fa-star" />
                        <i className="fas fa-star" />
                        <i className="far fa-star" /> (2){" "}
                      </span>
                    </div>
                    <h6>
                      A good traveler has no fixed plans and is not intent on
                      arriving.
                    </h6>
                    <p className="mb-0">Kuala Lumpur, Malaysia</p>
                  </div>
                </div>
              </a>
            </div>
            <div className="col-md-6 col-lg-4">
              <a href="tours">
                <div className="card tour-card wow fadeIn">
                  <img className="card-img-top" src="img/tour/2.png" alt="" />
                  <span className="tour-duration">
                    <i className="fas fa-history" /> 12 Days{" "}
                  </span>
                  <div className="card-body">
                    <div className="tour-tags">
                      <span className="tour-price">From $50.00</span>
                      <span className="tour-rating">
                        <i className="fas fa-star" />
                        <i className="fas fa-star" />
                        <i className="fas fa-star" />
                        <i className="fas fa-star" />
                        <i className="far fa-star" /> (2){" "}
                      </span>
                    </div>
                    <h6>
                      A good traveler has no fixed plans and is not intent on
                      arriving.
                    </h6>
                    <p className="mb-0">Kuala Lumpur, Malaysia</p>
                  </div>
                </div>
              </a>
            </div>
            <div className="col-md-6 col-lg-4">
              <a href="tours">
                <div className="card tour-card wow fadeIn">
                  <img className="card-img-top" src="img/tour/3.png" alt="" />
                  <span className="tour-duration">
                    <i className="fas fa-history" /> 12 Days{" "}
                  </span>
                  <div className="card-body">
                    <div className="tour-tags">
                      <span className="tour-price">From $50.00</span>
                      <span className="tour-rating">
                        <i className="fas fa-star" />
                        <i className="fas fa-star" />
                        <i className="fas fa-star" />
                        <i className="fas fa-star" />
                        <i className="far fa-star" /> (2){" "}
                      </span>
                    </div>
                    <h6>
                      A good traveler has no fixed plans and is not intent on
                      arriving.
                    </h6>
                    <p className="mb-0">Kuala Lumpur, Malaysia</p>
                  </div>
                </div>
              </a>
            </div>
            <div className="col-md-6 col-lg-4 d-block d-lg-none">
              <a href="tours">
                <div className="card tour-card wow fadeIn">
                  <img className="card-img-top" src="img/tour/1.png" alt="" />
                  <span className="tour-duration">
                    <i className="fas fa-history" /> 12 Days{" "}
                  </span>
                  <div className="card-body">
                    <div className="tour-tags">
                      <span className="tour-price">From $50.00</span>
                      <span className="tour-rating">
                        <i className="fas fa-star" />
                        <i className="fas fa-star" />
                        <i className="fas fa-star" />
                        <i className="fas fa-star" />
                        <i className="far fa-star" /> (2){" "}
                      </span>
                    </div>
                    <h6>
                      A good traveler has no fixed plans and is not intent on
                      arriving.
                    </h6>
                    <p className="mb-0">Kuala Lumpur, Malaysia</p>
                  </div>
                </div>
              </a>
            </div>
          </div>
        </div>
      </section>
      {/* end popular tours */}

      {/* start testimonials */}
      <section className="section-spacing reviews inverse-bg">
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <div className="section-title text-center">
                <h3 className="mt-n6">Testimonials &amp; Reviews</h3>
                <h2 className="mb-0">Our Traveler Says</h2>
              </div>
            </div>
          </div>
          <div className="row align-items-center">
            <div className="col-lg-5">
              <div className="reviews-left">
                <img className="tilt-img" src="img/testimonials/1.png" alt="" />
                <div className="review-shape1" />
                <div className="review-shape2" />
              </div>
            </div>
            <div className="col-lg-7">
              <div
                className="carousel slide"
                id="testimonial-carousel"
                data-bs-ride="carousel"
              >
                <div className="carousel-inner">
                  <div className="carousel-item active">
                    <div className="review-item">
                      <h5>Madison Aria</h5>
                      <div className="traveller">( Abubakar Siddique )</div>
                      <p>
                        Lorem Ipsum available, but the majority have suffered
                        alteration in some form the injected humour, or
                        randomised words which don't look even slightly
                        believable to if you are going to use a passage of Lorem
                        Ipsum, you need to be sure there isn't anything
                        embarrassing hidden in the middle of text.
                      </p>
                      <p>
                        Lorem Ipsum available, but the majority have suffered
                        alteration in some form the injected humour, or
                        randomised words which don't look even slightly
                        believable to if you are going to use a passage of Lorem
                        Ipsum, you need to be sure there isn't anything
                        embarrassing hidden in the middle of text.
                      </p>
                    </div>
                  </div>
                  <div className="carousel-item">
                    <div className="review-item">
                      <h5>Madison Aria</h5>
                      <div className="traveller">( Abubakar Siddique )</div>
                      <p>
                        Lorem Ipsum available, but the majority have suffered
                        alteration in some form the injected humour, or
                        randomised words which don't look even slightly
                        believable to if you are going to use a passage of Lorem
                        Ipsum, you need to be sure there isn't anything
                        embarrassing hidden in the middle of text.
                      </p>
                      <p>
                        Lorem Ipsum available, but the majority have suffered
                        alteration in some form the injected humour, or
                        randomised words which don't look even slightly
                        believable to if you are going to use a passage of Lorem
                        Ipsum, you need to be sure there isn't anything
                        embarrassing hidden in the middle of text.
                      </p>
                    </div>
                  </div>
                  <div className="carousel-item">
                    <div className="review-item">
                      <h5>Madison Aria</h5>
                      <div className="traveller">( Abubakar Siddique )</div>
                      <p>
                        Lorem Ipsum available, but the majority have suffered
                        alteration in some form the injected humour, or
                        randomised words which don't look even slightly
                        believable to if you are going to use a passage of Lorem
                        Ipsum, you need to be sure there isn't anything
                        embarrassing hidden in the middle of text.
                      </p>
                      <p>
                        Lorem Ipsum available, but the majority have suffered
                        alteration in some form the injected humour, or
                        randomised words which don't look even slightly
                        believable to if you are going to use a passage of Lorem
                        Ipsum, you need to be sure there isn't anything
                        embarrassing hidden in the middle of text.
                      </p>
                    </div>
                  </div>
                </div>
                <button
                  className="carousel-control-prev"
                  type="button"
                  data-bs-target="#testimonial-carousel"
                  data-bs-slide="prev"
                >
                  <span
                    className="carousel-control-prev-icon"
                    aria-hidden="true"
                  />
                  <span className="visually-hidden">Previous</span>
                </button>
                <button
                  className="carousel-control-next"
                  type="button"
                  data-bs-target="#testimonial-carousel"
                  data-bs-slide="next"
                >
                  <span
                    className="carousel-control-next-icon"
                    aria-hidden="true"
                  />
                  <span className="visually-hidden">Next</span>
                </button>
              </div>
              <div className="brand-section">
                <div className="brand-image">
                  <img src="img/testimonials/brand1.png" alt="" />
                </div>
                <div className="h-border" />
                <div className="brand-image">
                  <img src="img/testimonials/brand2.png" alt="" />
                </div>
                <div className="h-border" />
                <div className="brand-image">
                  <img src="img/testimonials/brand3.png" alt="" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* end testimonials */}

      {/* start blog */}
      <section className="section-spacing blogs">
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <div className="section-title text-center">
                <h3 className="mt-n6">From The Blog Post</h3>
                <h2 className="mb-0">Latest News &amp; Articles</h2>
              </div>
            </div>
          </div>
          <div className="row" >
            <div className="col-md-6 col-lg-4">
              <a href="blog">
                <div className="card tour-card wow fadeIn">
                  <img className="card-img-top" src="img/blog/1.png" alt="" />
                  <span className="tour-duration">
                    <i className="fas fa-history" /> 04 Dec{" "}
                  </span>
                  <div className="card-body">
                    <div className="d-flex">
                      <div className="flex-shrink-0">
                        <span className="align-self-start mr-3 media-icon">
                          <img src="img/blog/author.png" alt="" />
                        </span>
                      </div>
                      <div className="flex-grow-1 ms-3">
                        <h5 className="m-0">Jony bristow</h5>
                        <p className="m-0">Admin</p>
                      </div>
                      <div className="flex-shrink-0">
                        <span className="align-self-end"> 10:30 AM </span>
                      </div>
                    </div>
                    <h6>
                      A good traveler has no fixed plans and is not intent on
                      arriving.
                    </h6>
                    <span className="read-more">
                      Read More <i className="fas fa-arrow-right" />
                    </span>
                  </div>
                </div>
              </a>
            </div>
            <div className="col-md-6 col-lg-4">
              <a href="blog">
                <div className="card tour-card wow fadeIn">
                  <img className="card-img-top" src="img/blog/2.png" alt="" />
                  <span className="tour-duration">
                    <i className="fas fa-history" /> 04 Dec{" "}
                  </span>
                  <div className="card-body">
                    <div className="d-flex">
                      <div className="flex-shrink-0">
                        <span className="align-self-start mr-3 media-icon">
                          <img src="img/blog/author.png" alt="" />
                        </span>
                      </div>
                      <div className="flex-grow-1 ms-3">
                        <h5 className="m-0">Jony bristow</h5>
                        <p className="m-0">Admin</p>
                      </div>
                      <div className="flex-shrink-0">
                        <span className="align-self-end"> 10:30 AM </span>
                      </div>
                    </div>
                    <h6>
                      A good traveler has no fixed plans and is not intent on
                      arriving.
                    </h6>
                    <span className="read-more">
                      Read More <i className="fas fa-arrow-right" />
                    </span>
                  </div>
                </div>
              </a>
            </div>
            <div className="col-md-6 col-lg-4">
              <a href="blog">
                <div className="card tour-card wow fadeIn">
                  <img className="card-img-top" src="img/blog/3.png" alt="" />
                  <span className="tour-duration">
                    <i className="fas fa-history" /> 04 Dec{" "}
                  </span>
                  <div className="card-body">
                    <div className="d-flex">
                      <div className="flex-shrink-0">
                        <span className="align-self-start mr-3 media-icon">
                          <img src="img/blog/author.png" alt="" />
                        </span>
                      </div>
                      <div className="flex-grow-1 ms-3">
                        <h5 className="m-0">Jony bristow</h5>
                        <p className="m-0">Admin</p>
                      </div>
                      <div className="flex-shrink-0">
                        <span className="align-self-end"> 10:30 AM </span>
                      </div>
                    </div>
                    <h6>
                      A good traveler has no fixed plans and is not intent on
                      arriving.
                    </h6>
                    <span className="read-more">
                      Read More <i className="fas fa-arrow-right" />
                    </span>
                  </div>
                </div>
              </a>
            </div>
            <div className="col-md-6 col-lg-4 d-block d-lg-none">
              <a href="blog">
                <div className="card tour-card wow fadeIn">
                  <img className="card-img-top" src="img/blog/1.png" alt="" />
                  <span className="tour-duration">
                    <i className="fas fa-history" /> 04 Dec{" "}
                  </span>
                  <div className="card-body">
                    <div className="d-flex">
                      <div className="flex-shrink-0">
                        <span className="align-self-start mr-3 media-icon">
                          <img src="img/blog/author.png" alt="" />
                        </span>
                      </div>
                      <div className="flex-grow-1 ms-3">
                        <h5 className="m-0">Jony bristow</h5>
                        <p className="m-0">Admin</p>
                      </div>
                      <div className="flex-shrink-0">
                        <span className="align-self-end"> 10:30 AM </span>
                      </div>
                    </div>
                    <h6>
                      A good traveler has no fixed plans and is not intent on
                      arriving.
                    </h6>
                    <span className="read-more">
                      Read More <i className="fas fa-arrow-right" />
                    </span>
                  </div>
                </div>
              </a>
            </div>
          </div>
        </div>
      </section>
      {/* end blog */}

      <Footer />

    </div>
  );
}

export default home;
